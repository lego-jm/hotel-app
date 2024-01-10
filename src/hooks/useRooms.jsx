import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addRoom,
  getAllRoom,
  deleteRoom,
  updateRoom,
  getFilters,
} from "../api/hotel-api";
import { useAuthContext } from "../context/AuthContext";

export function useRooms() {
  const queryClient = useQueryClient();
  const { user } = useAuthContext();

  const addRoomQuery = useMutation((room) => addRoom(room, user?.token), {
    onSuccess: () => queryClient.invalidateQueries(["rooms"]),
  });
  const updateRoomQuery = useMutation((room) => updateRoom(room), {
    onSuccess: () => queryClient.invalidateQueries(["rooms"]),
  });
  const getRoomsQuery = useQuery(["rooms"], async () => getAllRoom(), {
    staleTime: 1000 * 60 * 5,
  });
  const deleteRoomQuery = useMutation(
    (roomNo) => deleteRoom(roomNo, user?.token),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["rooms"]);
      },
    }
  );

  const getFilterQuery = useQuery(["filters"], async () => getFilters(), {
    staleTime: 1000 * 60 * 10,
  });

  return {
    addRoomQuery,
    updateRoomQuery,
    getRoomsQuery,
    deleteRoomQuery,
    getFilterQuery,
  };
}
