import { useDeleteData } from "@/hooks/useQuery";
import { DeleteData } from "@/hooks/crudService";

const useDeleteRoom = () => {
  const message = {
    onSuccessDelete: "Room deleted successfully",
  };
  const { deleteItem, isDeleting } = useDeleteData({
    mutationKey: "deleteRoom",
    deleteFun: DeleteData,
    queryKey: "Rooms",
    tableName: "Rooms",
    message,
  });

  return { deleteItem, isDeleting };
};

export default useDeleteRoom;
