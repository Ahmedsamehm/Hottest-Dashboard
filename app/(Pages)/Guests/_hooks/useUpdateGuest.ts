import { useUpdateData } from "@/hooks/useQuery";

import { GuestType } from "../_components/GuestsClient";
import { UpdateGuest } from "../_services/guestServices";

const useUpdateGuest = () => {
  "use memo";
  const message = { onSuccessUpdate: "Guest updated successfully" };
  const { update, isUpdating, updateError, resetUpdate } = useUpdateData<GuestType>({
    mutationKey: "Guests",
    updateFun: ({ id, formData }) => UpdateGuest({ id, formData }),
    queryKey: "Guests",
    message,
  });
  return { update, isUpdating, updateError, resetUpdate };
};

export default useUpdateGuest;
