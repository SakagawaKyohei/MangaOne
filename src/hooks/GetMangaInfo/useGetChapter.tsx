import { useQuery } from "react-query";
import supabase from "../../app/supabase";
import { v4 as uuidv4 } from "uuid";

//tìm hiểu thêm về rls và tăng bảo mật

const GetChapter = async (mangaId: string) => {
  const { data, error, count } = await supabase
    .from("chapter")
    .select("*", { count: "exact" })
    .eq("manga_id", mangaId);
  if (error) {
    throw new Error(error.message);
  }

  let start = 0;
  let end = Number(count) - 1;
  if (Number(count) - 3 > 0) {
    start = Number(count) - 3;
  }

  const { data: last, error: lasterror } = await supabase
    .from("chapter")
    .select("*")
    .eq("manga_id", mangaId)
    .range(start, end)
    .order("name", { ascending: false });
  if (lasterror) {
    throw new Error(lasterror.message);
  }

  if (!data) {
    throw new Error("Manga not found");
  }
  console.log(data);
  console.log(count);
  return { data, count, last };
};
export default function useGetChapter(mangaId: string, key: string) {
  return useQuery(key, () => GetChapter(mangaId));
}
