import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getAllReservation,
  getReservation,
  addReservation,
  updateReservation,
  removeReservation,
} from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export function useReservation() {
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
  const getReservationQuery = useQuery(
    ["reservation", user.uid],
    async () => getReservation(user.uid),
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
    getReservationQuery,
    updateReservationQuery,
    getAllReservationQuery,
    removeReservationQuery,
  };
}
