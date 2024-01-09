import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  updateReservation,
  removeReservation,
  getRoomReservation,
} from "../api/firebase";
import {
  addReservation,
  getAllReservation,
  getUserReservation,
} from "../api/hotel-api";
import { useAuthContext } from "../context/AuthContext";

export function useReservation(roomId) {
  const queryClient = useQueryClient();
  const { user } = useAuthContext();

  const addReservationQuery = useMutation(
    async (reservation) =>
      addReservation({ ...reservation, userNo: user.no }, user.token),
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
    async () => getAllReservation(user.token),
    { staleTime: 1000 * 60 * 1 }
  );

  const getReservationUserQuery = useQuery(
    ["reservation", user.uid],
    async () => getUserReservation(user.no, user.token),
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
