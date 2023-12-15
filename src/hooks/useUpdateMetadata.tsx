import { useMutation } from "react-query";
import supabase from "../app/supabase";

interface User {
  avt: string;
  ten: string;
  ho: string;
  sdt: string;
  stk: string;
  coin: number;
}
const updatemetadata = async ({
  metadata,
}: //key,
{
  metadata: User;
  //key: string;
}) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data, error } = await supabase.auth.updateUser({
    data: {
      ...user?.user_metadata,
      ten: metadata.ten,
      ho: metadata.ho,
      sdt: metadata.sdt,
      stk: metadata.stk,
      coin: metadata.coin,
      avt: metadata.avt,
    },
  });
  //tìm cách để xóa dữ liệu metadata không cần thiết (vì cách này chỉ chèn or edit nếu đã tồn tại)
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export default function useUpdateMetadata(metadata: User) {
  return useMutation(() => updatemetadata({ metadata }));
}
