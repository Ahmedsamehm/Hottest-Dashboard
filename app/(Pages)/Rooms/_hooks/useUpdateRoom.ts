import { useUpdateData } from "@/hooks/useQuery";
import { RoomType } from "../_types/types";
import { UpdateData } from "@/hooks/crudService";

const useUpdateRoom = () => {
  const message = {
    onSuccessUpdate: "Room updated successfully",
  };
  const { update, isUpdating } = useUpdateData<RoomType>({
    mutationKey: "updateRoom",
    updateFun: ({ tableName, id, formData }) => UpdateData({ id, formData, tableName }),
    queryKey: "Rooms",
    message,
  });

  return { update, isUpdating };
};

export default useUpdateRoom;
