import { useAddData } from "@/hooks/useQuery";
import { RoomType } from "../_types/types";
import { AddData } from "@/hooks/crudService";

const useAddRoom = () => {
  const message = {
    onError: "duplicate Room(number/name)",
    onSuccess: "Rooms added successfully",
  };

  const { add: AddRoom, isAdding } = useAddData<RoomType>({
    mutationKey: "addRoom",
    addFun: AddData,
    queryKey: "Rooms",
    tableName: "Rooms",
    message,
  });

  return { AddRoom, isAdding };
};

export default useAddRoom;
