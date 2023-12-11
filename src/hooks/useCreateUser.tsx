import { useMutation, useQueryClient } from "react-query";
import supabase from "../app/supabase";

interface User {
  email: string;
  username: string;
  password: string;
}
const createUser = async (user: User) => {
  const { data: userWithUsername } = await supabase
    .from("users")
    .select("*")
    .eq("email", user.username)
    .single();
  if (userWithUsername) {
    throw new Error("Email đã được đăng ký");
  }
  const { data, error: signUpError } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
  });

  if (signUpError) {
    throw signUpError;
  }

  return data;
};

export default function useCreateUser(user: User) {
  return useMutation(() => createUser(user), {
    onSuccess: async (data) => {
      const { data: insertData, error: insertError } = await supabase
        .from("users")
        .insert({
          name: user.username,
          username: user.username,
          id: data.user?.id,
        });

      if (insertError) {
        throw insertError;
      }

      return insertData;
    },
  });
}
