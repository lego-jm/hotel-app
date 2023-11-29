import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  addAttraction,
  getAttraction,
  removeAttraction,
  updateAttraction,
} from "../api/firebase";

export function useAttraction() {
  const queryClient = useQueryClient();

  const addAttractionQuery = useMutation(
    async (attraction) => addAttraction(attraction),
    {
      onSuccess: () => queryClient.invalidateQueries(["attractions"]),
    }
  );
  const getAttractionQuery = useQuery(
    ["attractions"],
    async () => getAttraction(),
    {
      staleTime: 1000 * 60 * 5,
    }
  );
  const updateAttractionQuery = useMutation(
    async (attraction) => updateAttraction(attraction),
    {
      onSuccess: () => queryClient.invalidateQueries(["attractions"]),
    }
  );
  const removeAttractionQuery = useMutation(
    async (attractionId) => removeAttraction(attractionId),
    {
      onSuccess: () => queryClient.invalidateQueries(["attractions"]),
    }
  );

  return {
    addAttractionQuery,
    updateAttractionQuery,
    getAttractionQuery,
    removeAttractionQuery,
  };
}
