"use client";
import { Calendar, CheckCircle, Clock, DollarSign } from "lucide-react";

// UI Components
import StatsCards, { Stat } from "@/app/components/StatsCards";
import SearchAndFilter from "@/app/components/SearchAndFilter";
import Header from "@/app/components/Header";
import PaginationComponent from "@/app/components/PaginationComponent";

// Custom Hooks
import useFetchAllBookings from "../_hooks/useFetchAllBookings";

import usePagination from "@/app/components/usePagination";

// Data and Types
import bookingOptions from "@/app/data/bookingOptions.json";

import FormComponent from "./formComponent";
import { useDashBoard } from "@/app/context/dashBoardContext";
import BookingTable from "./BookingTable";

const BookingClient = () => {
  "use memo";
  const { filter, debouncedSearch } = useDashBoard();

  const { page, pageSize } = usePagination();

  // --- Data Fetching & Mutations ---
  const { bookings, isPending, getConfirmed, getPending, getRevenue, total } = useFetchAllBookings(page, pageSize, debouncedSearch, filter);

  // Stats data with theme-appropriate colors
  const stats: Stat[] = [
    {
      title: "Total Bookings",
      value: total,
      icon: Calendar,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      title: "Confirmed",
      value: getConfirmed,
      icon: CheckCircle,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    },
    {
      title: "Pending",
      value: getPending,
      icon: Clock,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
    },
    {
      title: "Revenue",
      value: getRevenue,
      icon: DollarSign,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-950/30",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background ">
      <Header tableName="Bookings" DescriptionTable="Manage hotel reservations" displayButton={true} ButtonName="New Booking" FormComponent={<FormComponent />} />
      <div className="flex-1 space-y-6 p-6 ">
        <StatsCards stats={stats} />
        <SearchAndFilter filterOptions={bookingOptions} placeholder="Search by guest name" type="text" />

        <BookingTable bookings={bookings?.data ?? []} isLoading={isPending} />

        <PaginationComponent fetchAction={bookings} />
      </div>
    </div>
  );
};

export default BookingClient;
