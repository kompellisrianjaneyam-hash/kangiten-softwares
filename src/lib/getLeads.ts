import { supabase } from "./supabase";

export async function getLeads() {
  const { data, error } = await supabase
    .from("leads")
    .select("*");

  console.log("LEADS DATA:", data);
  console.log("LEADS ERROR:", error);

  if (error) {
    return [];
  }

  return data || [];
}