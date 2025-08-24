"use client";

import useFetchAllBookings from "@/app/(Pages)/Bookings/_hooks/useFetchAllBookings";
import { BookingResponse } from "@/app/(Pages)/Bookings/_types/types";
import { Avatar, AvatarFallback } from "@/app/components/shared/ui/avatar";
import { Badge } from "@/app/components/shared/ui/badge";

import SkeletonComponent from "@/app/components/SkeletonComponent";
import { useDashBoard } from "@/app/context/dashBoardContext";

export function TodaysActivities() {
  "use memo";

  const { getStatusColor } = useDashBoard();
  const { bookings, isLoading, isPending } = useFetchAllBookings();

  if (isLoading || isPending) return <SkeletonComponent />;

  return (
    <div className="space-y-4 overflow-auto max-h-[35vh]  ">
      {bookings?.data?.map((activity: BookingResponse) => (
        <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:bg-accent/10 transition-colors duration-200 ">
          <div className="flex items-center gap-3">
            <Avatar className="size-10 border-2 border-background shadow-sm bg-muted">
              <AvatarFallback className="bg-muted text-foreground text-sm font-medium">{activity?.guest?.fullName?.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-foreground">{activity?.guest?.fullName}</div>
              <div className="text-sm text-muted-foreground">Room {activity.roomId}</div>
            </div>
          </div>
          <Badge variant="outline" className={`border ${getStatusColor(activity.status)} `}>
            {activity.status}
          </Badge>
        </div>
      ))}
    </div>
  );
}
