import { useQuery } from "react-query";
import supabase from "../../app/supabase";

const GetMangaMID = async (mangaId: string) => {
  const { data, error } = await supabase
    .from("manga")
    .select("*")
    .eq("id", mangaId);
  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error("Manga not found");
  }

  return data[0];
};
export default function useGetMangaByMID(mangaId: string) {
  return useQuery(mangaId, () => GetMangaMID(mangaId));
}
