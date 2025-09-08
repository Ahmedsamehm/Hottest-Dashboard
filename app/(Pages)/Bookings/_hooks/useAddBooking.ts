import { useAddData } from "@/hooks/useQuery";

import { BookingResponse } from "../_types/types";

import { CreateBooking } from "../_services/bookingService";

const useAddBooking = () => {
  const message = { onSuccess: "Booking added successfully", onError: "Something went wrong" };
  const { add: AddRoom, isAdding } = useAddData<BookingResponse>({
    mutationKey: "Booking",
    addFun: ({ formData }) => CreateBooking(formData),
    queryKey: "Booking",
    tableName: "Booking",
    message,
  });
  return { AddRoom, isAdding };
};

export default useAddBooking;
