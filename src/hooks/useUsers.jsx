import { useMutation, useQueryClient } from "react-query";
import { idCheck, joinMember } from "../api/firebase";

export function useUsers() {
  // const queryClient = useQueryClient();

  const joinMemberQuery = useMutation(async (member) => joinMember(member));

  const idCheckQuery = useMutation(async (id) => idCheck(id));

  return { joinMemberQuery, idCheckQuery };
}
