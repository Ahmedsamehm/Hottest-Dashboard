"use client";

import Header from "@/app/components/Header";
import { CardContent, CardTitle, CardHeader, CardDescription } from "@/app/components/shared/ui/card";
import { Card } from "@/app/components/shared/ui/card";
import StatsCards from "@/app/components/StatsCards";
import React from "react";
import { MonthlyOccupancyChart } from "./analytics/MonthlyOccupancyChart";
import { RoomStatusChart } from "./analytics/RoomStatusChart";
import { WeeklyRevenueChart } from "./analytics/WeeklyRevenueChart";
import { TodaysActivities } from "./analytics/TodaysActivities";
import { Bed, Users, DollarSign, TrendingUp } from "lucide-react";

import useFetchAllBookings from "../../Bookings/_hooks/useFetchAllBookings";
import useFetchRooms from "../../Rooms/_hooks/useFetchRooms";

const DashBoardClient = () => {
  "use memo";

  const { getAvailableRooms, total } = useFetchRooms();
  const { getConfirmed, getPending, getRevenue } = useFetchAllBookings();

  const stats = [
    {
      title: "Total Rooms",
      value: total,

      icon: Bed,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      title: "Available Rooms",
      value: getAvailableRooms,
      subtitle: "Ready for check-in",
      icon: Bed,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    },
    {
      title: "Check-ins Today",
      value: getConfirmed,
      subtitle: `${getPending} pending arrivals`,
      icon: Users,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
    },
    {
      title: "Today's Revenue",
      value: getRevenue,
      // subtitle: "+8.2% from yesterday",
      icon: DollarSign,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-950/30",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header Section */}

      <Header tableName={"Dashboard"} text={"Welcome Admin"} DescriptionTable={"Manage hotel rooms and availability"} icon={<TrendingUp className="size-4" />} displayButton={false} />

      {/* Main Content */}
      <div className="space-y-6 p-6">
        {/* Statistics Cards */}
        <StatsCards stats={stats} />

        {/* Charts Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Monthly Occupancy Chart */}
          <Card className="">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-foreground">Monthly Occupancy</CardTitle>
              <CardDescription className="text-muted-foreground">Room occupancy trends over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <MonthlyOccupancyChart />
            </CardContent>
          </Card>

          {/* Room Status Chart */}
          <Card className="">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-foreground">Room Status</CardTitle>
              <CardDescription className="text-muted-foreground">Current distribution of room availability</CardDescription>
            </CardHeader>
            <CardContent>
              <RoomStatusChart />
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row: Revenue and Activities */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Weekly Revenue Chart */}
          <Card className="">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-foreground">Weekly Revenue</CardTitle>
              <CardDescription className="text-muted-foreground">Daily revenue for the current week</CardDescription>
            </CardHeader>
            <CardContent>
              <WeeklyRevenueChart />
            </CardContent>
          </Card>

          {/* Today's Activities */}
          <Card className="">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-foreground">Today's Activities</CardTitle>
              <CardDescription className="text-muted-foreground">Recent check-ins and check-outs</CardDescription>
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

export default DashBoardClient;
