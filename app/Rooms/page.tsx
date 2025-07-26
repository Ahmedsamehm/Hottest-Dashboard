import React from "react";
// UI Components
import { SidebarTrigger } from "../components/shared/ui/sidebar";
import { Bed, Users, Plus, Coffee, Wifi, Car } from "lucide-react";
import { Button } from "../components/shared/ui/button";
import StatsCards from "../components/StatsCards";
import SearchAndFilter from "../components/SearchAndFilter";
import { Badge } from "../components/shared/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/shared/ui/card";

// Room type definition
export type RoomType = {
  id: string;
  name: string;
  floor: number;
  type: string;
  capacity: number;
  price: number;
  status: string;
  description: string;
  amenities: string[];
  lastCleaned: string;
};

// Statistics data for the stats cards
const stats = [
  {
    title: "Total Rooms",
    value: "6",
    subtitle: "All room inventory",
    icon: Bed,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
  },
  {
    title: "Available",
    value: "3",
    subtitle: "Ready for guests",
    icon: Bed,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Occupied",
    value: "2",
    subtitle: "Currently in use",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Avg. Rate",
    value: "$272",
    subtitle: "Per night average",
    icon: Bed,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

// Rooms data (mocked)
const rooms: RoomType[] = [
  {
    id: "101",
    name: "Ocean View Suite",
    floor: 1,
    type: "Suite Room",
    capacity: 4,
    price: 280,
    status: "available",
    description: "Spacious suite with stunning ocean views and premium amenities.",
    amenities: ["wifi", "parking", "breakfast"],
    lastCleaned: "1/15/2024",
  },
  {
    id: "205",
    name: "Deluxe King Room",
    floor: 2,
    type: "Deluxe Room",
    capacity: 2,
    price: 180,
    status: "occupied",
    description: "Comfortable king-size room with modern furnishings.",
    amenities: ["wifi", "parking"],
    lastCleaned: "1/14/2024",
  },
  {
    id: "312",
    name: "Standard Twin Room",
    floor: 3,
    type: "Standard Room",
    capacity: 2,
    price: 120,
    status: "maintenance",
    description: "Cozy twin bedroom perfect for business travelers.",
    amenities: ["wifi"],
    lastCleaned: "1/13/2024",
  },
  {
    id: "108",
    name: "Family Room",
    floor: 1,
    type: "Family Room",
    capacity: 6,
    price: 350,
    status: "available",
    description: "Large family room with separate living area and multiple beds.",
    amenities: ["wifi", "parking", "breakfast"],
    lastCleaned: "1/15/2024",
  },
  {
    id: "405",
    name: "Presidential Suite",
    floor: 4,
    type: "Presidential Room",
    capacity: 6,
    price: 500,
    status: "available",
    description: "Luxury presidential suite with panoramic city views.",
    amenities: ["wifi", "parking", "breakfast"],
    lastCleaned: "1/15/2024",
  },
  {
    id: "220",
    name: "Business Room",
    floor: 2,
    type: "Business Room",
    capacity: 2,
    price: 200,
    status: "occupied",
    description: "Professional room designed for business travelers.",
    amenities: ["wifi", "parking"],
    lastCleaned: "1/14/2024",
  },
];

// Helper function to get badge color based on room status
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

// Helper function to get amenity icon
const getAmenityIcon = (amenity: string) => {
  switch (amenity) {
    case "wifi":
      return <Wifi className="size-4 text-blue-500" />;
    case "parking":
      return <Car className="size-4 text-green-500" />;
    case "breakfast":
      return <Coffee className="size-4 text-orange-500" />;
    default:
      return null;
  }
};

// Main Rooms page component
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
            <h1 className="text-xl font-semibold text-gray-900">Rooms</h1>
            <p className="text-sm text-gray-500">Manage hotel rooms and availability</p>
          </div>
          {/* Add Room button */}
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 size-4" />
            Add Room
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 space-y-6 p-6">
        {/* Statistics Cards */}
        <StatsCards stats={stats} />

        {/* Search and Filter input */}
        <SearchAndFilter placeholder="Search by room name, floor, or capacity..." />

        {/* Rooms Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room: RoomType) => (
            <Card key={room.id} className="border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    {/* Room name and info */}
                    <CardTitle className="text-lg font-semibold text-gray-900">{room.name}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-500">Room {room.id}</span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-500">Floor {room.floor}</span>
                    </div>
                  </div>
                  {/* Card menu (actions) */}
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                    •••
                  </Button>
                </div>
                {/* Status badge and price */}
                <div className="flex items-center justify-between mt-4">
                  <Badge className={getStatusColor(room.status)}>{room.status}</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">${room.price}</div>
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Room type */}
                <div className="flex items-center gap-2">
                  <Bed className="size-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{room.type}</span>
                </div>
                {/* Room capacity */}
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Up to {room.capacity} guests</span>
                </div>
                {/* Room description */}
                <p className="text-sm text-gray-500">{room.description}</p>
                {/* Room amenities */}
                <div className="flex gap-2">
                  {room.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-1">
                      {getAmenityIcon(amenity)}
                    </div>
                  ))}
                </div>
                {/* Last cleaned info */}
                <div className="text-xs text-gray-400 pt-2 border-t border-gray-100">Last cleaned: {room.lastCleaned}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
