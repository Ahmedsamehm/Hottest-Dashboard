import { useGetData } from "@/hooks/useQuery";

import { BookingResponse } from "../_types/types";
import useCalculation from "@/hooks/useCalculation";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { GetAllData } from "@/hooks/crudService";

const useFetchAllBookings = (page?: number, pageSize?: number, search?: string, filter?: string) => {
  const queryClient = useQueryClient();
  let queryKey, prefetchKey;

  if (page != null) {
    if (search === "" && filter === "") {
      queryKey = ["Booking", page];
      prefetchKey = ["Booking", page + 1];
    } else {
      queryKey = ["Booking", page, search, filter];
      prefetchKey = ["Booking", page + 1, search, filter];
    }
  } else {
    queryKey = ["Booking"];
    prefetchKey = ["Booking"];
  }

  const {
    data: bookings,
    isLoading,
    isPending,
  } = useGetData<BookingResponse[]>({
    queryKey,
    getFun: () => GetAllData({ tableName: "Booking", page, pageSize, search, filter }),
    page,
    search,
    tableName: "Booking",
  });

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: prefetchKey,
      queryFn: () => GetAllData({ tableName: "Booking", page: page + 1, pageSize, search, filter }),
    });
  }, [page, queryClient]);

  const { getConfirmed, getPending, getRevenue, total } = useCalculation<BookingResponse>(bookings);

  return { bookings, isLoading, getConfirmed, getPending, getRevenue, total, isPending };
};

export default useFetchAllBookings;
