import { useDeleteData } from "@/hooks/useQuery";
import { DeleteData } from "@/hooks/crudService";

const useDeleteGuest = () => {
  const message = {
    onSuccessDelete: "Guest deleted successfully",
  };
  const { deleteItem, isDeleting } = useDeleteData({
    mutationKey: "Guests",
    deleteFun: (id: number) => DeleteData(id, "Guests"),
    queryKey: "Guests",
    tableName: "Guests",
    message,
  });
  return { deleteItem, isDeleting };
};

export default useDeleteGuest;
