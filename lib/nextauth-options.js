import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import { connectToDB } from "@/lib/db";
import User from "@/models/User";

export const authOptions = {
  session: { strategy: "jwt" },
  pages: { signIn: "/signin" },
  providers: [
    GoogleProvider({ clientId: process.env.GOOGLE_CLIENT_ID || "", clientSecret: process.env.GOOGLE_CLIENT_SECRET || "" }),
    GitHubProvider({ clientId: process.env.GITHUB_ID || "", clientSecret: process.env.GITHUB_SECRET || "" }),
    CredentialsProvider({
      name: "Email & Password",
      credentials: { email: {}, password: {} },
      async authorize(creds) {
        await connectToDB();
        const user = await User.findOne({ email: (creds?.email || '').toLowerCase() }).lean();
        if (!user) return null;
        const ok = await bcrypt.compare(creds?.password || "", user.passwordHash);
        if (!ok) return null;
        return { id: String(user._id), name: user.name, email: user.email };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "credentials" && user?.email) {
        try{
          await connectToDB();
          const email = user.email.toLowerCase();
          const exists = await User.findOne({ email }).lean();
          if (!exists) {
            const hash = await bcrypt.hash("oauth", 5);
            await User.create({ name: user.name || email.split("@")[0], email, passwordHash: hash });
          }
        }catch(e){ console.error("OAuth upsert error:", e); }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) { token.uid = user.id || token.uid; token.name = user.name || token.name; }
      return token;
    },
    async session({ session, token }) {
      if (token?.uid) { session.user.id = token.uid; }
      if (token?.name) { session.user.name = token.name; }
      return session;
    },
  },
};
