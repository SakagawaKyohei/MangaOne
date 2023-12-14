import { useMutation, useQueryClient } from "react-query";
import supabase from "../../app/supabase";

{
  /*tim cach set admin role*/
}
const deleteuser = async (id: string) => {
  const { error } = await supabase.auth.admin.deleteUser(
    "ce8ef829-db11-48a5-ab09-bcdad0abf5c3"
  );

  if (error) {
    throw error;
  }
};

export default function useDeleteUser(id: string) {
  return useMutation(() => deleteuser(id));
}
