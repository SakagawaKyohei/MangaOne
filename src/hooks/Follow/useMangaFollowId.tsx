import { useQuery } from "react-query";
import supabase from "../../app/supabase";
import { v4 as uuidv4 } from "uuid";
const idf = uuidv4();

const GetMangaFollowId = async (userid: any) => {
  const { data: mangaid, error: mangaiderror } = await supabase
    .from("favorite")
    .select("manga_id")
    .eq("user_id", userid);

  if (mangaiderror) {
    throw new Error(mangaiderror.message);
  }

  if (!mangaid) {
    throw new Error("Manga not found");
  }
  return mangaid;
};
export default function useGetMangaFollowId(userid: any) {
  return useQuery("mangalist" + idf, () => GetMangaFollowId(userid));
}
