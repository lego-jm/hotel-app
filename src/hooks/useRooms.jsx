import { useMutation, useQuery, useQueryClient } from "react-query";
import { addRoom, getRooms } from "../api/firebase";

export function useRooms() {
  const queryClient = useQueryClient();

  const addRoomQuery = useMutation((room, url) => addRoom(room, url), {
    onSuccess: () => queryClient.invalidateQueries(["rooms"]),
  });
  const getRoomsQuery = useQuery(["rooms"], async () => getRooms(), {
    staleTime: 1000 * 60 * 5,
  });

  return { addRoomQuery, getRoomsQuery };
}
