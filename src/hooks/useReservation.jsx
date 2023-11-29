import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getAllReservation,
  getReservation,
  setReservation,
} from "../api/firebase";
import { useAuthContext } from "../context/AuthContext";

export function useReservation() {
  const queryClient = useQueryClient();
  const { user } = useAuthContext();

  const setReservationQuery = useMutation(
    async ({ data }) => setReservation({ ...data, uid: user.uid }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["reservation"]);
      },
    }
  );
  const getAllReservationQuery = useQuery(
    ["all-reservation"],
    async () => getAllReservation(),
    {}
  );

  const getReservationQuery = useQuery(
    ["reservation", user.uid],
    async () => getReservation(user.uid),
    { staleTime: 1000 * 60 * 5 }
  );

  return { setReservationQuery, getReservationQuery, getAllReservationQuery };
}
