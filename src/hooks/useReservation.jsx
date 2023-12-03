import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getAllReservation,
  addReservation,
  updateReservation,
  removeReservation,
  getReservationUser,
  getRoomReservation,
} from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export function useReservation(roomId) {
  const queryClient = useQueryClient();
  const { user } = useAuthContext();

  const addReservationQuery = useMutation(
    async (reservation) => addReservation(reservation, user.uid),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("all-reservation");
        queryClient.invalidateQueries("reservation");
      },
    }
  );
  const updateReservationQuery = useMutation(
    async (reservation) => updateReservation(reservation),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["all-reservation"]);
        queryClient.invalidateQueries(["reservation"]);
      },
    }
  );
  const getAllReservationQuery = useQuery(
    ["all-reservation"],
    async () => getAllReservation(),
    { staleTime: 1000 * 60 * 1 }
  );
  const getReservationUserQuery = useQuery(
    ["reservation", user.uid],
    async () => getReservationUser(user.uid),
    { staleTime: 1000 * 60 * 5 }
  );

  const getRoomReservationQuery = useQuery(
    ["reservation", roomId],
    async () => getRoomReservation(roomId),
    { staleTime: 1000 * 60 * 5 }
  );

  const removeReservationQuery = useMutation(
    async (reservationId) => removeReservation(reservationId, user.uid),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["all-reservation"]);
        queryClient.invalidateQueries(["reservation"]);
      },
    }
  );

  return {
    addReservationQuery,
    getReservationUserQuery,
    updateReservationQuery,
    getAllReservationQuery,
    getRoomReservationQuery,
    removeReservationQuery,
  };
}
