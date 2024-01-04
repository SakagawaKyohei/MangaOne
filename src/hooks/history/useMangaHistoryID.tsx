import { useQuery } from "react-query";
import supabase from "../../app/supabase";
import { v4 as uuidv4 } from "uuid";
const idf = uuidv4();

const GetMangaHistoryId = async (userid: any) => {
  const { data: mangaid, error: mangaiderror } = await supabase
    .from("history")
    .select("manga_id")
    .eq("user_id", userid)
    .order("created_at", { ascending: false });

  if (mangaiderror) {
    throw new Error(mangaiderror.message);
  }

  if (!mangaid) {
    throw new Error("Manga not found");
  }
  return mangaid;
};
export default function useGetMangaHistoryId(userid: any) {
  return useQuery("mangalist" + idf, () => GetMangaHistoryId(userid));
}
