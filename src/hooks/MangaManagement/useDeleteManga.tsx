import { useMutation, useQueryClient } from "react-query";
import supabase from "../../app/supabase";

const deleteManga = async (id: string[]) => {
  // Comment chapter later
  for (const mangaId of id) {
    try {
      const { error: chapterError } = await supabase
        .from("chapter")
        .delete()
        .eq("manga_id", mangaId);

      const { error: favoriteError } = await supabase
        .from("favorite")
        .delete()
        .eq("manga_id", mangaId);

      const { error: rateError } = await supabase
        .from("rate")
        .delete()
        .eq("manga_id", mangaId);

      const { error: mangaError } = await supabase
        .from("manga")
        .delete()
        .eq("id", mangaId);

      if (chapterError) {
        throw chapterError;
      }
      if (favoriteError) {
        throw favoriteError;
      }
      if (rateError) {
        throw rateError;
      }
      if (mangaError) {
        throw mangaError;
      }
    } catch (error) {
      console.error("Error deleting:", error);
      // Handle or log the error as needed
    }
  }
};

export default function useDeleteManga(id: any) {
  return useMutation(() => deleteManga(id));
}
