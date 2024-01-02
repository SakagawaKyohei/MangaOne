import { useQuery } from "react-query";
import supabase from "../../app/supabase";

const GetMangaList = async (page: number) => {
  const { data: pagemanga, error } = await supabase
    .from("manga")
    .select("*")
    .range((page - 1) * 12, page * 12 - 1)
    .order("created_at", { ascending: false });
  if (error) {
    throw new Error(error.message);
  }

  if (!pagemanga) {
    throw new Error("Manga not found");
  }
  const { data: allmanga, error: allmangaerror } = await supabase
    .from("manga")
    .select("*");

  const { data: mostviewpagemanga, error: mostviewerror } = await supabase
    .from("manga")
    .select("*")
    .range((page - 1) * 12, page * 12 - 1)
    .order("view", { ascending: false });
  if (mostviewerror) {
    throw new Error(mostviewerror.message);
  }

  if (!allmanga) {
    throw new Error("Manga not found");
  }

  return { allmanga, pagemanga, mostviewpagemanga };
};
export default function useGetMangaList(page: number) {
  return useQuery("mangalist" + page.toString(), () => GetMangaList(page));
}
