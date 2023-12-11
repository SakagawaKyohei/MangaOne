import { useQuery } from "react-query";
import supabase from "../app/supabase";

const getUser = async ({ userId }: any) => {
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("id", userId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error("User not found");
  }

  return data;
};

const userid = async () => {
  const { data, error } = await supabase.auth.getSession();
  return data.session?.user.id;
};
{
  /*loi use user*/
}
export default function useUser() {
  return useQuery("user", () => getUser(userid));
}
