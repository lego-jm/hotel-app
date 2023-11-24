import { useMutation, useQueryClient } from "react-query";
import { joinMember } from "../api/firebase";

export function useUsers() {
  // const queryClient = useQueryClient();

  const joinMemberQuery = useMutation(async (member) => joinMember(member));

  return { joinMemberQuery };
}
