import React from "react";
// UI Components
import { SidebarTrigger } from "../components/shared/ui/sidebar";
import { Bed, DollarSign, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "../components/shared/ui/card";
// Dashboard Charts and Widgets
import { MonthlyOccupancyChart } from "./_components/MonthlyOccupancyChart";
import { RoomStatusChart } from "./_components/RoomStatusChart";
import { WeeklyRevenueChart } from "./_components/WeeklyRevenueChart";
import { TodaysActivities } from "./_components/TodaysActivities";
import StatsCards from "../components/StatsCards";

// Dashboard statistics data
const stats = [
  {
    title: "Total Rooms",
    value: "100",
    subtitle: "85% occupancy rate",
    icon: Bed,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Available Rooms",
    value: "12",
    subtitle: "Ready for check-in",
    icon: Bed,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Check-ins Today",
    value: "24",
    subtitle: "4 pending arrivals",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Today's Revenue",
    value: "$18,520",
    subtitle: "+8.2% from yesterday",
    icon: DollarSign,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
];

// Main Dashboard component
const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 ">
      {/* Header Section */}
      <header className="border-b border-gray-200 bg-white py-3">
        <div className="flex h-16 items-center gap-4 px-6">
          {/* Sidebar menu trigger */}
          <SidebarTrigger className="text-gray-600 hover:text-gray-900" />
          {/* Page title and subtitle */}
          <div className="flex-1">
            <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-500">Hotel overview and analytics</p>
          </div>
          {/* Growth indicator */}
          <div className="flex items-center gap-2 text-sm text-emerald-600">
            <TrendingUp className="size-4" />
            <span>+15% vs last month</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="space-y-6 p-6">
        {/* Statistics Cards */}
        <StatsCards stats={stats} />

        {/* Charts Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Monthly Occupancy Chart */}
          <Card className="border-gray-200 shadow-sm bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-gray-900">Monthly Occupancy</CardTitle>
              <CardDescription className="text-gray-500">Room occupancy trends over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <MonthlyOccupancyChart />
            </CardContent>
          </Card>

          {/* Room Status Chart */}
          <Card className="border-gray-200 shadow-sm bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-gray-900">Room Status</CardTitle>
              <CardDescription className="text-gray-500">Current distribution of room availability</CardDescription>
            </CardHeader>
            <CardContent>
              <RoomStatusChart />
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row: Revenue and Activities */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Weekly Revenue Chart */}
          <Card className="border-gray-200 shadow-sm bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-gray-900">Weekly Revenue</CardTitle>
              <CardDescription className="text-gray-500">Daily revenue for the current week</CardDescription>
            </CardHeader>
            <CardContent>
              <WeeklyRevenueChart />
            </CardContent>
          </Card>

          {/* Today's Activities */}
          <Card className="border-gray-200 shadow-sm bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-gray-900">Today's Activities</CardTitle>
              <CardDescription className="text-gray-500">Recent check-ins and check-outs</CardDescription>
            </CardHeader>
            <CardContent>
              <TodaysActivities />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
