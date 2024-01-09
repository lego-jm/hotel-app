import { useMutation, useQuery, useQueryClient } from "react-query";

import {
  addAttraction,
  deleteAttraction,
  getAllAttraction,
  updateAttraction,
} from "../api/hotel-api";
import { useAuthContext } from "../context/AuthContext";

export function useAttraction() {
  const queryClient = useQueryClient();
  const { user } = useAuthContext();

  const addAttractionQuery = useMutation(
    async (attraction) => addAttraction(attraction, user.token),
    {
      onSuccess: () => queryClient.invalidateQueries(["attractions"]),
    }
  );
  const getAllAttractionQuery = useQuery(
    ["attractions"],
    async () => getAllAttraction(),
    {
      staleTime: 1000 * 60 * 5,
    }
  );
  const updateAttractionQuery = useMutation(
    async (attraction) => updateAttraction(attraction, user.token),
    {
      onSuccess: () => queryClient.invalidateQueries(["attractions"]),
    }
  );

  const deleteAttractionQuery = useMutation(
    async (attractionId) => deleteAttraction(attractionId, user.token),
    {
      onSuccess: () => queryClient.invalidateQueries(["attractions"]),
    }
  );

  return {
    addAttractionQuery,
    updateAttractionQuery,
    getAllAttractionQuery,
    deleteAttractionQuery,
  };
}
