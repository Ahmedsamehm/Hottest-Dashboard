import { useGetData } from "@/hooks/useQuery";
import { RoomType } from "../_types/types";
import { GetAllData } from "@/hooks/crudService";
import useCalculation from "@/hooks/useCalculation";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const useFetchRooms = (page?: number, pageSize?: number, search?: string | number, filter?: string) => {
  const queryClient = useQueryClient();

  let queryKey, prefetchKey;

  if (page != null) {
    if (search === "" && filter === "") {
      queryKey = ["Rooms", page];
      prefetchKey = ["Rooms", page + 1];
    } else {
      queryKey = ["Rooms", page, search, filter];
      prefetchKey = ["Rooms", page + 1, search, filter];
    }
  } else {
    queryKey = ["Rooms"];
    prefetchKey = ["Rooms"];
  }

  const {
    data: Rooms,
    isLoading,
    isError,
    isPending,
  } = useGetData<RoomType[]>({
    queryKey,
    getFun: (tableName) => GetAllData<RoomType>({ tableName, page, pageSize, search, filter }),
    tableName: "Rooms",
  });

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: prefetchKey,
      queryFn: () => GetAllData<RoomType>({ tableName: "Rooms", page: page + 1, pageSize, search, filter }),
    });
  }, [page, queryClient]);

  const { getAvailableRooms, getOccupiedRooms, total, getAvgRate, getRevenue, getMaintenance } = useCalculation(Rooms ?? []);
  return { Rooms, isLoading, isError, getAvailableRooms, getOccupiedRooms, total, getAvgRate, getRevenue, getMaintenance, isPending };
};

export default useFetchRooms;
