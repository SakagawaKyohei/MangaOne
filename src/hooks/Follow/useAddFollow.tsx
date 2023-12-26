import { useMutation, useQueryClient } from "react-query";
import supabase from "../../app/supabase";

const addFollow = async (Userid: string, Mangaid: string) => {
  const { data, error: addError } = await supabase
    .from("favorite")
    .upsert({ user_id: Userid, manga_id: Mangaid });

  return data;
};

export default function useAddFollow(Userid: any, Mangaid: any) {
  return useMutation(() => addFollow(Userid, Mangaid));
}
