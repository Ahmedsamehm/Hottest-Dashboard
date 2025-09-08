import { useDeleteData } from "@/hooks/useQuery";
import { DeleteData } from "@/hooks/crudService";
import { DeleteRoom } from "../_services/crudService";

const useDeleteRoom = () => {
  const message = {
    onSuccessDelete: "Room deleted successfully",
  };
  const { deleteItem, isDeleting } = useDeleteData({
    mutationKey: "deleteRoom",
    deleteFun: ({ id }: { id: number }) => DeleteRoom(id),
    queryKey: "Rooms",
    tableName: "Rooms",
    message,
  });

  return { deleteItem, isDeleting };
};

export default useDeleteRoom;
