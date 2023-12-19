import { useQuery } from "react-query";
import supabase from "../../app/supabase";
import { useState } from "react";
import { count } from "console";

const GetManga = async (userId: string) => {
  const { data, error, count } = await supabase
    .from("manga")
    .select("*", { count: "exact" })
    .eq("nguoi_dang", userId);
  if (error) {
    throw new Error(error.message);
  }

  if (!data) {
    throw new Error("User not found");
  }

  return data;
};
export default function useGetMangaTrans(userId: string) {
  return useQuery("manga", () => GetManga(userId));
}
