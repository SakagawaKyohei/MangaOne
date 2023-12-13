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
        first_name: "John",
        age: 27,
      },
    },
  });

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
