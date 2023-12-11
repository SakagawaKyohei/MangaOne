import { useMutation } from "react-query";
import supabase from "../app/supabase";

const Ologin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export default function useLogin() {
  return useMutation(() => Ologin());
}
