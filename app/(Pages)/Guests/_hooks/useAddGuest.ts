import { useAddData } from "@/hooks/useQuery";
import { GuestType } from "../_components/GuestsClient";

import { CreateGuest } from "../_services/guestServices";

const useAddGuest = () => {
  const message = { onError: "duplicate Guest(name)", onSuccess: "Guest added successfully" };
  const {
    add: AddGuest,
    isAdding,
    addError,
    resetAdd,
  } = useAddData<GuestType>({
    mutationKey: "addGuest",
    addFun: ({ formData }) => CreateGuest(formData),
    queryKey: "Guests",
    tableName: "Guests",
    message,
  });
  return { AddGuest, isAdding, addError, resetAdd };
};

export default useAddGuest;
