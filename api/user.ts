// src/api/userApi.ts
import { supabase } from "@/lib/supabase";

export const getFullUser = async (id_user: number, role: string) => {
  const { data, error } = await supabase.rpc("get_user_by_role", {
    id_user,
    p_role: role,
  });

  if (error) throw new Error(error.message);
  return data;
};
