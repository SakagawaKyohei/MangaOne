import { useMutation, useQueryClient } from "react-query";
import supabase from "../app/supabase";
import { v4 as uuidv4 } from "uuid";
import useUser from "./useUser";

interface Manga {
  ten: string;
  tenkhac: string;
  theloai: string[];
  detail: string;
  tacgia: string;
  biatruyen: any;
}
const createManga = async (manga: Manga, uid: any) => {
  const currentDateTime = new Date(); // Lấy thời gian hiện tại
  const timestampzString = currentDateTime.toISOString();
  const id = uuidv4();
  const id_anhbia = uuidv4();
  const { data: data1, error } = await supabase.storage
    .from("avt")
    .upload("public" + "/" + id_anhbia + ".jpg", manga.biatruyen);
  //update avt in db
  if (data1) {
  } else {
    console.log(error);
  }
  const { data, error: InsertError } = await supabase.from("manga").insert({
    id: id,
    created_at: timestampzString,
    name: manga.ten,
    other_name: manga.tenkhac,
    genre: manga.theloai,
    view: 0,
    detail: manga.detail,
    biatruyen:
      "https://zrhhzqtaizoqtwmnzzbi.supabase.co/storage/v1/object/public/avt/public/" +
      id_anhbia +
      ".jpg",
    nguoi_dang: uid,
  });

  if (InsertError) {
    throw InsertError;
  }

  return data;
};

export default function useCreateManga(manga: Manga, uid: any) {
  return useMutation(() => createManga(manga, uid));
}
