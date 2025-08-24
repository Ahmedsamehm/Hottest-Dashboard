import { useUpdateData } from "@/hooks/useQuery";

import { UpdateData } from "@/hooks/crudService";
import { GuestType } from "../_components/GuestsClient";

const useUpdateGuest = () => {
  "use memo";
  const message = { onSuccessUpdate: "Guest updated successfully" };
  const { update, isUpdating, updateError, resetUpdate } = useUpdateData<GuestType>({
    mutationKey: "Guests",
    updateFun: ({ tableName, id, formData }) => UpdateData({ id, formData, tableName }),
    queryKey: "Guests",
    message,
  });
  return { update, isUpdating, updateError, resetUpdate };
};

export default useUpdateGuest;
