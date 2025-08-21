// lib/auth.js
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongoose";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: { params: { scope: "read:user user:email" } },
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize({ email, password }) {
        await dbConnect();
        const user = await User.findOne({ email });
        if (!user || !user.passwordHash) return null;
        const ok = await bcrypt.compare(password, user.passwordHash);
        return ok ? { id: String(user._id), name: user.name, email: user.email } : null;
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "github") {
        // GitHub par email null ho sakti hai — token se primary email lao
        if (!user.email && account.access_token) {
          const r = await fetch("https://api.github.com/user/emails", {
            headers: {
              Authorization: `token ${account.access_token}`,
              Accept: "application/vnd.github+json",
            },
          });
          const emails = await r.json();
          const primary =
            (Array.isArray(emails) && emails.find(e => e.primary && e.verified)) ||
            emails?.[0];
          if (primary?.email) user.email = primary.email;
        }
      }

      if (account?.provider === "google" || account?.provider === "github") {
        await dbConnect();
        if (!user?.email) return false;
        const exists = await User.findOne({ email: user.email });
        if (!exists) {
          await User.create({
            name: user.name || profile?.name || "",
            email: user.email,
            image: user.image || profile?.avatar_url || null,
            provider: account.provider,
          });
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user?.id) token.uid = user.id;
      return token;
    },

    async session({ session, token }) {
      if (token?.uid) session.user.id = token.uid;
      return session;
    },
  },

  pages: { signIn: "/signin" },
  secret: process.env.NEXTAUTH_SECRET,
};
