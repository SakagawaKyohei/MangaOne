import { useMutation } from "react-query";
import supabase from "../../app/supabase";
import { sleep } from "react-query/types/core/utils";

const Ologin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  if (error) {
    throw new Error(error.message);
  }
  console.log(data);
  return data;
};

export default function useLogin() {
  return useMutation(() => Ologin());
}
