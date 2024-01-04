import { useMutation, useQueryClient } from "react-query";
import supabase from "../../app/supabase";

const addhistory = async (Userid: string, Mangaid: string) => {
  const { data, error: addError } = await supabase
    .from("history")
    .upsert({ user_id: Userid, manga_id: Mangaid });
  if (addError) {
    console.log(addError.message);
  } else {
    console.log("b");
  }
  return data;
};

export default function useAddHistory(Userid: any, Mangaid: any) {
  return useMutation(() => addhistory(Userid, Mangaid));
}
