import { useMutation, useQuery, useQueryClient } from "react-query";

import {
  emailLogin,
  joinMember,
  getAllMember,
  getMember,
  updateMember,
  deleteMember,
  emailCheck,
} from "../api/hotel-api";
import { useAuthContext } from "../context/AuthContext";

export function useUsers() {
  const queryClient = useQueryClient();
  const { user } = useAuthContext();

  const emailLoginQuery = useMutation(async (user) => emailLogin(user), {
    onSuccess: () => queryClient.invalidateQueries["userInfo"],
  });
  const joinMemberQuery = useMutation(async (newUser) => joinMember(newUser));
  const getUsersQuery = useQuery(
    ["users"],
    async () => getAllMember(user?.token),
    {
      staleTime: 1000 * 60 * 5,
    }
  );
  const getUserInfoQuery = useQuery(
    ["userInfo"],
    async () => getMember(user?.no, user?.token),
    { staleTime: 1000 * 60 * 5 }
  );
  const updateUserQuery = useMutation(
    async (updateUserData) =>
      updateMember({ ...updateUserData, userNo: user?.no }, user?.token),
    { onSuccess: () => queryClient.invalidateQueries(["userInfo"]) }
  );

  const deleteAccountQuery = useMutation((userNo) =>
    deleteMember(userNo, user?.token)
  );

  const emailCheckQuery = useMutation(async (email) => emailCheck(email));

  return {
    emailLoginQuery,
    joinMemberQuery,
    updateUserQuery,
    getUsersQuery,
    getUserInfoQuery,
    emailCheckQuery,
    deleteAccountQuery,
  };
}
