import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  deleteAccount,
  getUserInfo,
  idCheck,
  joinUser,
  updatePassWordSendEmail,
  updateUser,
} from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export function useUsers() {
  const queryClient = useQueryClient();
  const { user } = useAuthContext();

  const joinMemberQuery = useMutation(async (newUser) => joinUser(newUser));
  const getUserInfoQuery = useQuery(
    ["userInfo"],
    async () => getUserInfo(user.uid),
    { staleTime: 1000 * 60 * 5 }
  );
  const updateUserQuery = useMutation(
    async (updateUserData) => updateUser(updateUserData),
    { onSuccess: () => queryClient.invalidateQueries(["userInfo"]) }
  );
  const updatePassWordSendQuery = useMutation(async () =>
    updatePassWordSendEmail(user.email)
  );
  const idCheckQuery = useMutation(async (id) => idCheck(id));
  const deleteAccountQuery = useMutation(() => deleteAccount(user));

  return {
    joinMemberQuery,
    updateUserQuery,
    updatePassWordSendQuery,
    getUserInfoQuery,
    idCheckQuery,
    deleteAccountQuery,
  };
}
