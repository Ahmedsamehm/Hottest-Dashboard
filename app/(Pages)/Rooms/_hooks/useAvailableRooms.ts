import { useGetData } from "@/hooks/useQuery";
import { RoomType } from "../_types/types";
import { fetchAvailableRooms } from "../_services/crudService";

const useAvailableRooms = () => {
  "use memo";
  const queryKey = ["available_rooms"];
  const {
    data: availableRooms,
    isLoading: availableRoomsLoading,
    isError: availableRoomsError,
    isPending: availableRoomsPending,
  } = useGetData<RoomType[]>({
    queryKey,
    getFun: () => fetchAvailableRooms(),
  });

  return { availableRooms, availableRoomsLoading, availableRoomsError, availableRoomsPending };
};

export default useAvailableRooms;
