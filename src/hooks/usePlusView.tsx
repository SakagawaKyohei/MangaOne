import { useMutation, useQueryClient } from "react-query";
import supabase from "../app/supabase";

const PlusViewChapter = async (chapterid: any, currentview: number) => {
  const { error } = await supabase
    .from("chapter")
    .update({ view: currentview + 1 })
    .eq("id", chapterid);
};

export default function usePlusViewChapter(
  chapterid: any,
  currentview: number
) {
  return useMutation(() => PlusViewChapter(chapterid, currentview));
}
