import { useMutation, useQueryClient } from "react-query";
import supabase from "../../app/supabase";

const deleteFollow = async (Userid: string, Mangaid: string) => {
  const { data, error: deleteError } = await supabase
    .from("favorite")
    .delete()
    .eq("manga_id", Mangaid)
    .eq("user_id", Userid);
  return data;
};

export default function useDeleteFollow(Userid: any, Mangaid: any) {
  return useMutation(() => deleteFollow(Userid, Mangaid));
}
