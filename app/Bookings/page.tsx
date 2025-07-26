import React from "react";
// UI Components
import { SidebarTrigger } from "../components/shared/ui/sidebar";
import { Calendar, CheckCircle, Clock, DollarSign, Plus } from "lucide-react";
import { Button } from "../components/shared/ui/button";
import StatsCards from "../components/StatsCards";
import SearchAndFilter from "../components/SearchAndFilter";
import TableMenu from "../components/TableMenu";
import { TableBody, TableCell, TableRow } from "../components/shared/ui/table";
import { Badge } from "../components/shared/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/shared/ui/avatar";

// Booking type definition
export type Booking = {
  id: string;
  guest: string;
  email: string;
  phone: string;
  room: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  amount: string;
  status: string;
  avatar: string;
};

// Statistics data for the stats cards
const stats = [
  {
    title: "Total Bookings",
    value: "5",
    subtitle: "All time bookings",
    icon: Calendar,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
  },
  {
    title: "Confirmed",
    value: "2",
    subtitle: "Active reservations",
    icon: CheckCircle,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Pending",
    value: "1",
    subtitle: "Awaiting confirmation",
    icon: Clock,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "Revenue",
    value: "$4,250",
    subtitle: "Total booking value",
    icon: DollarSign,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
];

// Bookings data (mocked)
const bookings: Booking[] = [
  {
    id: "BK001",
    guest: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    room: "205",
    checkIn: "1/15/2024",
    checkOut: "1/18/2024",
    nights: 3,
    amount: "$850",
    status: "confirmed",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "BK002",
    guest: "Maria Garcia",
    email: "maria.garcia@email.com",
    phone: "+1 (555) 234-5678",
    room: "312",
    checkIn: "1/14/2024",
    checkOut: "1/16/2024",
    nights: 2,
    amount: "$420",
    status: "checked-out",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "BK003",
    guest: "David Lee",
    email: "david.lee@email.com",
    phone: "+1 (555) 345-6789",
    room: "108",
    checkIn: "1/16/2024",
    checkOut: "1/20/2024",
    nights: 4,
    amount: "$1,200",
    status: "pending",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "BK004",
    guest: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 456-7890",
    room: "220",
    checkIn: "1/13/2024",
    checkOut: "1/15/2024",
    nights: 2,
    amount: "$380",
    status: "checked-out",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "BK005",
    guest: "Michael Chen",
    email: "michael.chen@email.com",
    phone: "+1 (555) 567-8901",
    room: "405",
    checkIn: "1/17/2024",
    checkOut: "1/21/2024",
    nights: 4,
    amount: "$1,400",
    status: "confirmed",
    avatar: "/placeholder.svg?height=32&width=32",
  },
];

// Helper function to get badge color based on booking status
const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "bg-emerald-100 text-emerald-700 hover:bg-emerald-100";
    case "pending":
      return "bg-amber-100 text-amber-700 hover:bg-amber-100";
    case "checked-out":
      return "bg-gray-100 text-gray-600 hover:bg-gray-100";
    default:
      return "bg-gray-100 text-gray-600 hover:bg-gray-100";
  }
};

// Table column titles
const TableHeadTitles = ["BookingID", "Guest", "Contact", "Room", "Check-in", "Check-out", "Nights", "Amount", "Status"];

// Main Bookings page component
const Bookings = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="border-b border-gray-200 bg-white">
        <div className="flex h-16 items-center gap-4 px-6">
          {/* Sidebar menu trigger */}
          <SidebarTrigger className="text-gray-600 hover:text-gray-900" />
          {/* Page title and subtitle */}
          <div className="flex-1">
            <h1 className="text-xl font-semibold text-gray-900">Bookings</h1>
            <p className="text-sm text-gray-500">Manage hotel reservations and guest information</p>
          </div>
          {/* New Booking button */}
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 size-4" />
            New Booking
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 space-y-6 p-6">
        {/* Statistics Cards */}
        <StatsCards stats={stats} />

        {/* Search and Filter input */}
        <SearchAndFilter placeholder="Search by guest name, email, room, or booking ID..." />

        {/* Bookings Table */}
        <TableMenu TableHeadTitles={TableHeadTitles} tableName="Bookings" tableDescription="Showing 5 of 5 bookings">
          <TableBody>
            {bookings.map((list: Booking) => (
              <TableRow key={list.id} className="border-gray-200 hover:bg-gray-50">
                {/* Booking ID */}
                <TableCell className="font-medium text-gray-900">{list.id}</TableCell>
                {/* Guest info with avatar */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8 border border-gray-200">
                      <AvatarImage src={list.avatar || "/placeholder.svg"} alt={list.guest} />
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                        {list.guest
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-gray-900">{list.guest}</span>
                  </div>
                </TableCell>
                {/* Contact info */}
                <TableCell>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-600">{list.email}</div>
                    <div className="text-sm text-gray-500">{list.phone}</div>
                  </div>
                </TableCell>
                {/* Room number */}
                <TableCell className="font-medium text-gray-900">{list.room}</TableCell>
                {/* Check-in date */}
                <TableCell className="text-gray-600">{list.checkIn}</TableCell>
                {/* Check-out date */}
                <TableCell className="text-gray-600">{list.checkOut}</TableCell>
                {/* Number of nights */}
                <TableCell className="text-gray-600">{list.nights}</TableCell>
                {/* Booking amount */}
                <TableCell className="font-medium text-gray-900">{list.amount}</TableCell>
                {/* Status badge */}
                <TableCell>
                  <Badge className={`capitalize ${getStatusColor(list.status)} `}>{list.status.replace("-", " ")}</Badge>
                </TableCell>
                {/* Table row menu (actions) */}
                <TableCell>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                    •••
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableMenu>
      </div>
    </div>
  );
};

export default Bookings;
