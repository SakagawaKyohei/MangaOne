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

const GetCurrentUser = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    throw new Error(error.message);
  }
  const userId = data.session?.user.id;
  if (userId == null) {
    throw new Error("User not found");
  }
  const userData = await getUser(userId);
  return userData;
};
export default function useUser() {
  return useQuery("user", () => GetCurrentUser);
}
