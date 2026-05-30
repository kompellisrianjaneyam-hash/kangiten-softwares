import { redirect } from "next/navigation";
import { createClient } from "./supabase-server";

export async function requireAdmin() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  if (user.email !== "kangitensoftware@gmail.com") {
    redirect("/");
  }

  return user;
}