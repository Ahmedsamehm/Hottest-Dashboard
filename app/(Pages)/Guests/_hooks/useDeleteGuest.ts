import { useDeleteData } from "@/hooks/useQuery";

import { DeleteGuest } from "../_services/guestServices";

const useDeleteGuest = () => {
  const message = {
    onSuccessDelete: "Guest deleted successfully",
  };
  const { deleteItem, isDeleting } = useDeleteData({
    mutationKey: "Guests",
    deleteFun: ({ id }: { id: number }) => DeleteGuest(id),
    queryKey: "Guests",
    tableName: "Guests",
    message,
  });
  return { deleteItem, isDeleting };
};

export default useDeleteGuest;
