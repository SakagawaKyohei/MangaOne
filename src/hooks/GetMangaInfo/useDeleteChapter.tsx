import { useMutation, useQueryClient } from "react-query";
import supabase from "../../app/supabase";

const deleteChapter = async (id: string[]) => {
  for (const chapterId of id) {
    try {
      const { error: chapterError } = await supabase
        .from("chapter")
        .delete()
        .eq("id", chapterId);

      if (chapterError) {
        throw chapterError;
      }
    } catch (error) {
      console.error("Error deleting:", error);
      // Handle or log the error as needed
    }
  }
};

export default function useDeleteChapter(id: any) {
  return useMutation(() => deleteChapter(id));
}
