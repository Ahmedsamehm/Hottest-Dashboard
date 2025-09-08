import { useUpdateData } from "@/hooks/useQuery";

import { BookingResponse } from "../_types/types";
import { UpdateBooking } from "../_services/bookingService";

const useUpdateBooking = () => {
  const message = { onSuccessUpdate: "Booking updated successfully" };
  const { update, isUpdating } = useUpdateData<BookingResponse>({
    mutationKey: "Booking",
    updateFun: ({ id, formData }) => {
      return UpdateBooking({ id, formData });
    },
    queryKey: "Booking",
    message,
  });
  return { update, isUpdating };
};

export default useUpdateBooking;
