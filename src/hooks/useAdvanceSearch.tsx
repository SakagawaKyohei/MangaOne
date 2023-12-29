import { useQuery } from "react-query";
import supabase from "../app/supabase";

const GetMangaLists = async (
  page: number,
  name: string,
  author: any,
  genre: any[]
) => {
  if (name == "null") {
    name = "";
  }
  if (author == "null") {
    author = "";
  }
  if (genre[0] == "null") {
    genre = [];
  }
  const { data: pagemanga, error } = await supabase
    .from("manga")
    .select("*")
    .range((page - 1) * 12, page * 12 - 1)
    .ilike("name", `%${name}%`)
    .ilike("author", `%${author}%`)
    .contains("genre", genre)
    .order("created_at", { ascending: false });
  if (error) {
    throw new Error(error.message);
  }

  if (!pagemanga) {
    throw new Error("Manga not found");
  }
  console.log(name);
  const { data: allmanga, error: allmangaerror } = await supabase
    .from("manga")
    .select("*")
    .ilike("name", `%${name}%`)
    .ilike("author", `%${author}%`)
    .contains("genre", genre)
    .order("created_at", { ascending: false });
  if (allmangaerror) {
    throw new Error(allmangaerror.message);
  }
  console.log(genre);
  if (!allmanga) {
    throw new Error("Manga not found");
  }

  return { allmanga, pagemanga };
};
export default function useAdvanceSearch(
  page: number,
  name: any,
  author: any,
  genre: any[]
) {
  return useQuery("mangalist" + page.toString() + name + author, () =>
    GetMangaLists(page, name, author, genre)
  );
}
