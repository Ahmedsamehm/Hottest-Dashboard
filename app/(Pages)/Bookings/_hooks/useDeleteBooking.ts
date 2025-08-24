import { DeleteData } from "@/hooks/crudService";
import { useDeleteData } from "@/hooks/useQuery";

const useDeleteBooking = () => {
  const { deleteItem, isDeleting } = useDeleteData({
    mutationKey: "Booking",
    deleteFun: (id: number) => DeleteData(id, "Booking"),
    queryKey: "Booking",
    tableName: "Booking",
  });
  return { deleteItem, isDeleting };
};

export default useDeleteBooking;
