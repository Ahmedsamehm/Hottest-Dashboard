"use client";

import Header from "@/app/components/Header";
import SearchAndFilter from "@/app/components/SearchAndFilter";
import StatsCards from "@/app/components/StatsCards";
import { useDashBoard } from "@/app/context/dashBoardContext";
import { Plus, Star, Users } from "lucide-react";
import React from "react";

import useFetchGuests from "../_hooks/useFetchGuests";

import PaginationComponent from "@/app/components/PaginationComponent";

import guestOptions from "@/app/data/guestOptions.json";
import usePagination from "@/app/components/usePagination";

import FormComponent from "./FormComponent";
import GuestsTable from "./GuestsTable";
import Loading from "@/app/components/shared/ui/Loading";

export interface GuestType {
  id: number;
  fullName: string;
  email: string;
  nationalID: string;
  nationality: string;
  phone: string;
  vip: boolean;
}

const GuestsClient = () => {
  "use memo";
  const { debouncedSearch, filter } = useDashBoard();

  const { page, pageSize } = usePagination();
  const { Guests, total, isVip, isPending } = useFetchGuests(page, pageSize, debouncedSearch, filter);

  const stats = [
    {
      title: "Total Guests",
      value: total,
      subtitle: "All registered guests",
      icon: Users,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      title: "VIP Guests",
      value: isVip,
      subtitle: "Premium members",
      icon: Star,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    },
  ];

  return (
    <>
      <Header
        tableName="Guests"
        ButtonName="Add Guest"
        DescriptionTable="Manage guest profiles and preferences"
        icon={<Plus className="size-4" />}
        displayButton={true}
        FormComponent={<FormComponent />}
      />
      <div className="flex-1 space-y-6 p-6 bg-background">
        <StatsCards stats={stats} />
        <SearchAndFilter filterOptions={guestOptions} type="text" placeholder="Search by guest name" />

        <GuestsTable Guests={Guests?.data || []} isLoading={isPending} />
        <PaginationComponent fetchAction={Guests} />
      </div>
    </>
  );
};

export default GuestsClient;
