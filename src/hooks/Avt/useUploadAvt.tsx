import { useMutation, useQueryClient } from "react-query";
import supabase from "../../app/supabase";
import { v4 as uuidv4 } from "uuid";

const uploadImages = async (image: any) => {
  const name = uuidv4();
  const { data, error } = await supabase.storage
    .from("avt")
    .upload("public" + "/" + name + ".jpg", image);
  //update avt in db
  if (data) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data, error } = await supabase.auth.updateUser({
      data: {
        ...user?.user_metadata,

        avt:
          "https://zrhhzqtaizoqtwmnzzbi.supabase.co/storage/v1/object/public/avt/public/" +
          name +
          ".jpg",
      },
    });
  } else {
    console.log(error);
  }
};

export default function useUploadAvt(image: any) {
  return useMutation(() => uploadImages(image));
}
//thêm time out để có thời gian upload và load avt mới lên web
