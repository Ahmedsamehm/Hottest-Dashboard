
import { useDeleteData } from "@/hooks/useQuery";
import { DeleteBooking } from "../_services/bookingService";

const useDeleteBooking = () => {
  const { deleteItem, isDeleting } = useDeleteData({
    mutationKey: "Booking",
    deleteFun: ({ id }: { id: number }) => DeleteBooking(id),
    queryKey: "Booking",
    tableName: "Booking",
    message: { onSuccessDelete: "Booking deleted successfully" },
  });
  return { deleteItem, isDeleting };
};

export default useDeleteBooking;
