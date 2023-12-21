import { useMutation, useQueryClient } from "react-query";
import supabase from "../../app/supabase";
import { v4 as uuidv4 } from "uuid";
import useUser from "../useUser";

interface Manga {
  ten: string;
  tenkhac: string;
  theloai: string[];
  detail: string;
  tacgia: string;
  biatruyen: any;
}
const createManga = async (manga: Manga, uid: any, id: string) => {
  const currentDateTime = new Date(); // Lấy thời gian hiện tại
  const timestampzString = currentDateTime.toISOString();
  if (id == "") {
    id = uuidv4();
  }
  if (manga.biatruyen == null) {
    const { data, error: InsertError } = await supabase.from("manga").upsert({
      id: id,
      created_at: timestampzString,
      name: manga.ten,
      other_name: manga.tenkhac,
      genre: manga.theloai,
      author: manga.tacgia,
      detail: manga.detail,
      nguoi_dang: uid,
    });

    if (InsertError) {
      throw InsertError;
    }

    return data;
  } else {
    const id_anhbia = uuidv4();

    const { data: data1, error } = await supabase.storage
      .from("avt")
      .upload("public" + "/" + id_anhbia + ".jpg", manga.biatruyen);
    //update avt in db
    if (data1) {
    } else {
      console.log(error);
    }
    const { data, error: InsertError } = await supabase.from("manga").upsert({
      id: id,
      created_at: timestampzString,
      name: manga.ten,
      other_name: manga.tenkhac,
      genre: manga.theloai,
      author: manga.tacgia,
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
  }
};

export default function useCreateManga(manga: Manga, uid: any, id: string) {
  return useMutation(() => createManga(manga, uid, id));
}
