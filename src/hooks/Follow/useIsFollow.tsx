import { useMutation, useQuery, useQueryClient } from "react-query";
import supabase from "../../app/supabase";
import { v4 as uuidv4 } from "uuid";
const idf = uuidv4();

const IsFollow = async (Userid: string, Mangaid: string) => {
  const { data, error: IsError } = await supabase
    .from("favorite")
    .select("*")
    .eq("manga_id", Mangaid)
    .eq("user_id", Userid);
  if (IsError) {
    throw new Error(IsError.message);
  }

  if (!data) {
    throw new Error("Manga not found");
  }
  return data;
};

export default function useIsFollow(Userid: any, Mangaid: any) {
  return useQuery("isfollow" + idf, () => IsFollow(Userid, Mangaid));
}
