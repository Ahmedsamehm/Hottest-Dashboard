import { useAddData } from "@/hooks/useQuery";

import { BookingResponse } from "../_types/types";
import { AddData } from "@/hooks/crudService";

const useAddBooking = () => {
  const message = { onSuccess: "Booking added successfully", onError: "Something went wrong" };
  const { add: AddRoom, isAdding } = useAddData<BookingResponse>({
    mutationKey: "Booking",
    addFun: AddData,
    queryKey: "Booking",
    tableName: "Booking",
    message,
  });
  return { AddRoom, isAdding };
};

export default useAddBooking;
