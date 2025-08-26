"use client";

import SearchAndFilter from "@/app/components/SearchAndFilter";
import StatsCards, { Stat } from "@/app/components/StatsCards";

import { Bed, Plus, Users } from "lucide-react";
import React from "react";

import Loading from "@/app/components/shared/ui/Loading";

import Header from "@/app/components/Header";
import { useDashBoard } from "@/app/context/dashBoardContext";

import useFetchRooms from "../_hooks/useFetchRooms";

import PaginationComponent from "@/app/components/PaginationComponent";

import roomOptions from "@/app/data/roomOptions.json";
import usePagination from "@/app/components/usePagination";

import FormComponent from "./formComponent";
import CardRoom from "./CardRoom";
const RoomClient = () => {
  "use memo";

  const { filter, debouncedSearch } = useDashBoard();
  const { page, pageSize } = usePagination();

  
  const { Rooms, isLoading, getAvailableRooms, getOccupiedRooms, total, getAvgRate, isPending } = useFetchRooms(page, pageSize, debouncedSearch, filter);

  // Define stats cards data
  const stats: Stat[] = [
    { title: "Total Rooms", value: total, subtitle: "All room inventory", icon: Bed, color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-950/30" },
    { title: "Available", value: getAvailableRooms, subtitle: "Ready for guests", icon: Bed, color: "text-emerald-600 dark:text-emerald-400", bgColor: "bg-emerald-50 dark:bg-emerald-950/30" },
    { title: "Occupied", value: getOccupiedRooms, subtitle: "Currently in use", icon: Users, color: "text-amber-600 dark:text-amber-400", bgColor: "bg-amber-50 dark:bg-amber-950/30" },
    { title: "Avg. Rate", value: getAvgRate, subtitle: "Per night average", icon: Bed, color: "text-green-600 dark:text-green-400", bgColor: "bg-green-50 dark:bg-green-950/30" },
  ];

  // Show loading state while data is being fetched
  // if (isLoading) return <Loading />;

  return (
    <>
      <Header
        tableName="Rooms"
        ButtonName="Add Room"
        DescriptionTable="Manage hotel rooms and availability"
        icon={<Plus className="mr-2 size-4" />}
        displayButton={true}
        FormComponent={<FormComponent />}
      />
      <div className="flex-1 space-y-6 p-6 bg-background">
        <StatsCards stats={stats} />
        <SearchAndFilter filterOptions={roomOptions} placeholder="Search by room name" type="text" />

        <CardRoom Rooms={Rooms?.data || []} isPending={isPending} />
        {/* <CardRoom /> */}
        <PaginationComponent fetchAction={Rooms} />
      </div>
    </>
  );
};

export default RoomClient;
