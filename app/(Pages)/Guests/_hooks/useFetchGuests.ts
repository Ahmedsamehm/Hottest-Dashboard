import { useGetData } from "@/hooks/useQuery";

import { GetAllData } from "@/hooks/crudService";
import useCalculation from "@/hooks/useCalculation";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { GuestType } from "../_components/GuestsClient";

const useFetchGuests = (page?: number, pageSize?: number, search?: string, filter?: string) => {
  "use memo";

  const queryClient = useQueryClient();

  let queryKey, prefetchKey;
  if (page != null) {
    if (search === "" && filter === "") {
      queryKey = ["Guests", page];
      prefetchKey = ["Guests", page + 1];
    } else {
      queryKey = ["Guests", page, search, filter];
      prefetchKey = ["Guests", page + 1, search, filter];
    }
  } else {
    queryKey = ["Guests"];
    prefetchKey = ["Guests"];
  }

  const {
    data: Guests,
    isLoading,
    isPending,
  } = useGetData<GuestType[]>({
    queryKey,
    getFun: () => GetAllData({ tableName: "Guests", page, pageSize, search, filter }),
    tableName: "Guests",
  });

  useEffect(() => {
    if (page != null) {
      queryClient.prefetchQuery({
        queryKey: prefetchKey,
        queryFn: () => GetAllData({ tableName: "Guests", page: page + 1, pageSize, search, filter }),
      });
    }
  }, [page, queryClient]);

  const { isVip, total } = useCalculation(Guests);
  return { Guests, isLoading, isVip, total, isPending };
};

export default useFetchGuests;
