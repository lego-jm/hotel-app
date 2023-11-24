import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addRoom,
  getFilterList,
  getRooms,
  removeRoom,
  updateRoom,
} from "../api/firebase";

export function useRooms() {
  const queryClient = useQueryClient();

  const addRoomQuery = useMutation((room) => addRoom(room), {
    onSuccess: () => queryClient.invalidateQueries(["rooms"]),
  });
  const updateRoomQuery = useMutation((room) => updateRoom(room), {
    onSuccess: () => queryClient.invalidateQueries(["rooms"]),
  });
  const getRoomsQuery = useQuery(["rooms"], async () => getRooms(), {
    staleTime: 1000 * 60 * 5,
  });
  const removeRoomQuery = useMutation((id) => removeRoom(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["rooms"]);
    },
  });
  const getFilterQuery = useQuery(["filters"], async () => getFilterList(), {
    staleTime: 1000 * 60 * 10,
  });

  return {
    addRoomQuery,
    updateRoomQuery,
    getRoomsQuery,
    removeRoomQuery,
    getFilterQuery,
  };
}
