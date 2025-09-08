import { useUpdateData } from "@/hooks/useQuery";
import { RoomType } from "../_types/types";

import { UpdateRoom } from "../_services/crudService";

const useUpdateRoom = () => {
  const message = {
    onSuccessUpdate: "Room updated successfully",
  };
  const { update, isUpdating } = useUpdateData<RoomType>({
    mutationKey: "updateRoom",
    updateFun: ({ id, formData }) => UpdateRoom({ id, formData }),
    queryKey: "Rooms",
    message,
  });

  return { update, isUpdating };
};

export default useUpdateRoom;
