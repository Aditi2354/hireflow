import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ClientDashboard from "./_client";
import { authOptions } from "@/lib/nextauth-options";

export default async function Page(){
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  return <ClientDashboard />;
}
