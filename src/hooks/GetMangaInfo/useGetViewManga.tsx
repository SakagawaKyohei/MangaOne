import { useQuery } from "react-query";
import supabase from "../../app/supabase";

import { v4 as uuidv4 } from "uuid";
const idf = uuidv4();
const GetViewManga = async (mangaId: any) => {
  const { data, error } = await supabase
    .from("chapter")
    .select("view")
    .eq("manga_id", mangaId);
  let view = 0;

  data?.map((item) => {
    view = view + item.view; // Accumulate view count
  });

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error("Manga not found");
  }
  const { data: a, error: b } = await supabase
    .from("manga")
    .update({ view: view })
    .eq("id", mangaId);

  return view;
};
export default function useGetMangaView(mangaId: any) {
  return useQuery(mangaId + "vieww", () => GetViewManga(mangaId));
}
//hien tai chi update khi getview manga chu chua update khi plusview chapter
