import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUserInfo, idCheck, joinMember } from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export function useUsers() {
  // const queryClient = useQueryClient();
  const { user } = useAuthContext();

  const joinMemberQuery = useMutation(async (member) => joinMember(member));
  const getUserInfoQuery = useQuery(
    ["userInfo"],
    async () => getUserInfo(user.uid),
    { staleTime: 1000 * 60 * 5 }
  );
  const idCheckQuery = useMutation(async (id) => idCheck(id));

  return { joinMemberQuery, getUserInfoQuery, idCheckQuery };
}
