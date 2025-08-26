import { UpdateData } from "@/hooks/crudService";
import { useUpdateData } from "@/hooks/useQuery";

import { BookingResponse } from "../_types/types";

const useUpdateBooking = () => {
  const message = { onSuccessUpdate: "Booking updated successfully" };
  const { update, isUpdating } = useUpdateData<BookingResponse>({
    mutationKey: "Booking",
    updateFun: ({ tableName, id, formData }) => {
      return UpdateData({ id, formData, tableName });
    },
    queryKey: "Booking",
    message,
  });
  return { update, isUpdating };
};

export default useUpdateBooking;
