import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { User } from "@/types/user";
import { getUser } from "../_lib/getUser";

const useGetUserInfoQuery = (username: string) => {
  const { data: user, error } = useQuery<User, NonNullable<unknown>, User, [_1: string, _2: string]>({
    queryKey: [...QUERY_KEYS.USERS.INFO(username)],
    queryFn: getUser,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000
  });

  return { user, error };
};

export default useGetUserInfoQuery;
