import { useQuery } from "react-query";
import supabase from "../../app/supabase";

//tìm hiểu thêm về rls và tăng bảo mật

const GetChapter = async (mangaId: string) => {
  const { data, error, count } = await supabase
    .from("chapter")
    .select("*", { count: "exact" })
    .eq("manga_id", mangaId);
  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error("Manga not found");
  }
  console.log(data);
  console.log(count);
  return { data, count };
};
export default function useGetChapter(mangaId: string) {
  return useQuery("chapter", () => GetChapter(mangaId));
}
