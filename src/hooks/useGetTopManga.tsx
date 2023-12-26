import { useQuery } from "react-query";
import supabase from "../app/supabase";
import { v4 as uuidv4 } from "uuid";

const GetMangaTop = async (keyy: number) => {
  const { data, error } = await supabase
    .from("manga")
    .select("*")
    .order("view", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error("Manga not found");
  }
  return data[keyy];
};
export default function useGetMangaTop(keyy: number) {
  return useQuery(keyy.toString(), () => GetMangaTop(keyy));
}
