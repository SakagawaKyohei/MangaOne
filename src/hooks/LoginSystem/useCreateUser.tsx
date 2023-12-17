import { useMutation, useQueryClient } from "react-query";
import supabase from "../../app/supabase";

interface User {
  email: string;
  username: string;
  password: string;
}
const createUser = async (user: User) => {
  const { data, error: signUpError } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,

    options: {
      data: {
        ten: user.username,
        ho: "",
        avt: "https://zrhhzqtaizoqtwmnzzbi.supabase.co/storage/v1/object/public/avt/public/Chualogin.svg",
        stk: "",
        sdt: "",
        coin: 0,
      },
    },
  });
  //avt mac dinh, nua doi anh sau

  console.log(data.user?.email_confirmed_at);
  // User exists, but is fake. See https://supabase.com/docs/reference/javascript/auth-signup
  if (data.user && data.user.identities && data.user.identities.length === 0) {
    throw new Error("Email đã được đăng ký");
  }

  if (signUpError) {
    throw signUpError;
  }

  return data;
};

export default function useCreateUser(user: User) {
  return useMutation(() => createUser(user));
}
