import React from "react";
// UI Components
import { SidebarTrigger } from "../components/shared/ui/sidebar";
import { Users, Plus, UserCheck, UserX, Star } from "lucide-react";
import { Button } from "../components/shared/ui/button";
import StatsCards from "../components/StatsCards";
import SearchAndFilter from "../components/SearchAndFilter";
import { TableBody, TableCell, TableRow } from "../components/shared/ui/table";
import { Badge } from "../components/shared/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/shared/ui/avatar";
import TableMenu from "../components/TableMenu";

// Guest type definition
type GuestType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  room: string;
  checkIn: string;
  checkOut: string;
  status: string;
  vip: boolean;
  avatar: string;
  visits: number;
};

// Statistics data for the stats cards
const stats = [
  {
    title: "Total Guests",
    value: "8",
    subtitle: "All registered guests",
    icon: Users,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
  },
  {
    title: "Checked In",
    value: "3",
    subtitle: "Currently staying",
    icon: UserCheck,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Checked Out",
    value: "4",
    subtitle: "Recently departed",
    icon: UserX,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "VIP Guests",
    value: "2",
    subtitle: "Premium members",
    icon: Star,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

// Guests data (mocked)
const guests: GuestType[] = [
  {
    id: "G001",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    country: "USA",
    room: "205",
    checkIn: "1/15/2024",
    checkOut: "1/18/2024",
    status: "checked-in",
    vip: false,
    visits: 3,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "G002",
    name: "Maria Garcia",
    email: "maria.garcia@email.com",
    phone: "+1 (555) 234-5678",
    country: "Spain",
    room: "312",
    checkIn: "1/14/2024",
    checkOut: "1/16/2024",
    status: "checked-out",
    vip: true,
    visits: 7,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "G003",
    name: "David Lee",
    email: "david.lee@email.com",
    phone: "+1 (555) 345-6789",
    country: "Canada",
    room: "108",
    checkIn: "1/16/2024",
    checkOut: "1/20/2024",
    status: "checked-in",
    vip: false,
    visits: 1,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "G004",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 456-7890",
    country: "UK",
    room: "220",
    checkIn: "1/13/2024",
    checkOut: "1/15/2024",
    status: "checked-out",
    vip: false,
    visits: 2,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "G005",
    name: "Michael Chen",
    email: "michael.chen@email.com",
    phone: "+1 (555) 567-8901",
    country: "Australia",
    room: "405",
    checkIn: "1/17/2024",
    checkOut: "1/21/2024",
    status: "confirmed",
    vip: true,
    visits: 12,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "G006",
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    phone: "+44 20 7946 0958",
    country: "UK",
    room: "301",
    checkIn: "1/12/2024",
    checkOut: "1/14/2024",
    status: "checked-out",
    vip: false,
    visits: 1,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "G007",
    name: "Robert Brown",
    email: "robert.brown@email.com",
    phone: "+49 30 12345678",
    country: "Germany",
    room: "102",
    checkIn: "1/18/2024",
    checkOut: "1/22/2024",
    status: "checked-in",
    vip: false,
    visits: 4,
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "G008",
    name: "Lisa Anderson",
    email: "lisa.anderson@email.com",
    phone: "+33 1 42 86 83 26",
    country: "France",
    room: "208",
    checkIn: "1/11/2024",
    checkOut: "1/13/2024",
    status: "checked-out",
    vip: false,
    visits: 2,
    avatar: "/placeholder.svg?height=32&width=32",
  },
];

// Helper function to get badge color based on guest status
const getStatusColor = (status: string) => {
  switch (status) {
    case "checked-in":
      return "bg-emerald-100 text-emerald-700 hover:bg-emerald-100";
    case "confirmed":
      return "bg-blue-100 text-blue-700 hover:bg-blue-100";
    case "checked-out":
      return "bg-gray-100 text-gray-600 hover:bg-gray-100";
    default:
      return "bg-gray-100 text-gray-600 hover:bg-gray-100";
  }
};

// Table column titles
const TableHeadTitles = ["ID", "Guest", "Contact", "Room", "Check-in", "Check-out", "Visits", "Status"];

// Main Guests page component
const Rooms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="border-b border-gray-200 bg-white">
        <div className="flex h-16 items-center gap-4 px-6">
          {/* Sidebar menu trigger */}
          <SidebarTrigger className="text-gray-600 hover:text-gray-900" />
          {/* Page title and subtitle */}
          <div className="flex-1">
            <h1 className="text-xl font-semibold text-gray-900">Guests</h1>
            <p className="text-sm text-gray-500">Manage guest profiles and preferences</p>
          </div>
          {/* Add Guest button */}
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 size-4" />
            Add Guest
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 space-y-6 p-6">
        {/* Statistics Cards */}
        <StatsCards stats={stats} />

        {/* Search and Filter input */}
        <SearchAndFilter placeholder="Search by room name, floor, or capacity..." />

        {/* Guests Table */}
        <TableMenu TableHeadTitles={TableHeadTitles} tableName="Guests" tableDescription="Showing 5 of 5 guests">
          <TableBody>
            {guests.map((guest: GuestType) => (
              <TableRow key={guest.id} className="border-gray-200 hover:bg-gray-50">
                {/* Guest ID */}
                <TableCell className="font-medium text-gray-900">{guest.id}</TableCell>
                {/* Guest info with avatar */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8 border border-gray-200">
                      <AvatarImage src={guest.avatar || "/placeholder.svg"} alt={guest.name} />
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                        {guest.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-gray-900">{guest.name}</span>
                  </div>
                </TableCell>
                {/* Contact info */}
                <TableCell>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-600">{guest.email}</div>
                    <div className="text-sm text-gray-500">{guest.phone}</div>
                  </div>
                </TableCell>
                {/* Room number */}
                <TableCell className="font-medium text-gray-900">{guest.room}</TableCell>
                {/* Check-in date */}
                <TableCell className="text-gray-600">{guest.checkIn}</TableCell>
                {/* Check-out date */}
                <TableCell className="text-gray-600">{guest.checkOut}</TableCell>
                {/* Number of visits */}
                <TableCell className="text-gray-600">{guest.visits}</TableCell>
                {/* Status badge */}
                <TableCell>
                  <Badge className={`capitalize ${getStatusColor(guest.status)} `}>{guest.status.replace("-", " ")}</Badge>
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

export default Rooms;
