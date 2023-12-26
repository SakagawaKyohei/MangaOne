import { useQuery } from "react-query";
import supabase from "../../app/supabase";
import { v4 as uuidv4 } from "uuid";

//tìm hiểu thêm về rls và tăng bảo mật

const GetChapter = async (mangaId: string) => {
  const { data, error, count } = await supabase
    .from("chapter")
    .select("*", { count: "exact" })
    .eq("manga_id", mangaId)
    .order("created_at", { ascending: false });
  if (error) {
    throw new Error(error.message);
  }

  let start = 0;
  let end = 2;

  let start20 = 0;
  let end20 = 19;

  const { data: last, error: lasterror } = await supabase
    .from("chapter")
    .select("*")
    .eq("manga_id", mangaId)
    .range(start, end)
    .order("created_at", { ascending: false });
  if (lasterror) {
    throw new Error(lasterror.message);
  }

  const { data: last1, error: last1error } = await supabase
    .from("chapter")
    .select("*")
    .eq("manga_id", mangaId)
    .range(0, 0)
    .order("created_at", { ascending: false });
  if (last1error) {
    throw new Error(last1error.message);
  }
  const { data: last20, error: last20error } = await supabase
    .from("chapter")
    .select("*")
    .eq("manga_id", mangaId)
    .range(start20, end20)
    .order("created_at", { ascending: false });
  if (last20error) {
    throw new Error(last20error.message);
  }

  if (!data) {
    throw new Error("Manga not found");
  }

  return {
    data,
    count,
    last,
    last20,
    last1: Array.isArray(last1) && last1.length > 0 ? last1[0] : null,
  };
};
export default function useGetChapter(mangaId: string) {
  return useQuery(mangaId + "_chapter", () => GetChapter(mangaId));
}
