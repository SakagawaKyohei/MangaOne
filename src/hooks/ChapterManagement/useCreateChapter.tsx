import { useMutation, useQueryClient } from "react-query";
import supabase from "../../app/supabase";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

interface Chapter {
  ten: string;
  content: any[] | null;
  view: number;
  manga_id: any;
}

const CreateChapter = async (chapter: Chapter, id: string) => {
  console.log(chapter.content);
  const currentDateTime = new Date(); // Lấy thời gian hiện tại
  const timestampzString = currentDateTime.toISOString();
  const chapterurl: string[] = [];
  if (id == "") {
    id = uuidv4();
  }

  chapter.content?.map(async (item) => {
    const id_trang = uuidv4();
    chapterurl.push(
      `https://zrhhzqtaizoqtwmnzzbi.supabase.co/storage/v1/object/public/avt/public/${id_trang}.jpg`
    ); //gán id vô mảng trước, khỏi test bug thứ tự gán nếu file kích thước khác nhau
    console.log(item);
    const { data: data1, error } = await supabase.storage
      .from("avt")
      .upload("public" + "/" + id_trang + ".jpg", item);
    //update avt in db
    if (data1) {
      console.log(data1);
    } else {
      console.log(error);
    }
  });
  const { data, error: InsertError } = await supabase.from("chapter").upsert({
    id: id,
    created_at: timestampzString,
    name: chapter.ten,
    manga_id: chapter.manga_id,
    content: chapterurl, //url tất cả trang truyện
    view: chapter.view,
  });

  if (InsertError) {
    console.log(InsertError);
    throw InsertError;
  }

  return data;
};

export default function useCreateChapter(chapter: Chapter, id: string) {
  return useMutation(() => CreateChapter(chapter, id));
}
