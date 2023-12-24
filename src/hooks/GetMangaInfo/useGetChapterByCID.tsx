import { useQuery } from "react-query";
import supabase from "../../app/supabase";

const GetChapter = async (chapterId: string) => {
  const { data, error } = await supabase
    .from("chapter")
    .select("*")
    .eq("id", chapterId);
  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error("chapter not found");
  }

  return data[0];
};
export default function useGetChapterByCID(chapterId: string) {
  return useQuery("chapterCID" + chapterId, () => GetChapter(chapterId));
}
