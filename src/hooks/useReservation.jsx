import { useMutation, useQuery, useQueryClient } from "react-query";
import { getReservation, setReservation } from "../api/firebase";
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
  const getReservationQuery = useQuery(
    ["reservation"],
    async () => getReservation(user.uid),
    { staleTime: 1000 * 60 * 5 }
  );

  return { setReservationQuery, getReservationQuery };
}
