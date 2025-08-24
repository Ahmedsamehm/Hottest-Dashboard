import React, { useEffect, useState, useMemo } from "react";

const useSearchAndFilters = <T extends Record<string, any>>(fetchAction: T[], searchKey: string) => {
  "use memo";
  const [search, setSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState<T[]>([]);
  // const { data } = fetchAction || [];
  // // const data = fetchAction?.data ?? [];
  // const filter = () => {
  //   if (!data) return;

  //   const filtered = data?.filter((item: any) => item.guest.fullName.toLowerCase().includes(search.toLowerCase()));
  //   setFilteredData(filtered || data);
  //   return filtered;
  // };
  // useEffect(() => {
  //   filter();
  // }, [search, data]);
  // const filteredResults = () => {
  //   if (!search.trim()) return fetchAction?.data ?? []; // Return all if search is empty

  //   return data?.filter((item) => {
  //     // Safely access nested properties (e.g., "guest.fullName")
  //     const searchValue = searchKey.split(".").reduce((obj, key) => obj?.[key], item as any);

  //     if (typeof searchValue !== "string") return false;

  //     const normalizedSearchTerm = search.trim().toLowerCase();
  //     const normalizedItemValue = String(searchValue).trim().toLowerCase();
  //     console.log(normalizedItemValue);

  //     return normalizedItemValue.includes(normalizedSearchTerm);
  //   });
  // };

  // useEffect(() => {
  //   setFilteredData(filteredResults);
  // }, [data]);

  return {
    search,
    setSearch,
    filteredData,
    setFilteredData,
  };
};

export default useSearchAndFilters;
