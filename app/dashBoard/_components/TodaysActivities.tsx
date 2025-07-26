"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../../components/shared/ui/avatar";
import { Badge } from "../../components/shared/ui/badge";

const activities = [
  {
    id: 1,
    name: "John Smith",
    room: "Room 205 • 14:30",
    type: "check-in",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    name: "Maria Garcia",
    room: "Room 312 • 11:15",
    type: "check-out",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 3,
    name: "David Lee",
    room: "Room 108 • 16:45",
    type: "check-in",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    room: "Room 420 • 09:30",
    type: "check-out",
    avatar: "/placeholder.svg?height=32&width=32",
  },
];

export function TodaysActivities() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="size-10 border-2 border-white shadow-sm">
              <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.name} />
              <AvatarFallback className="bg-blue-100 text-blue-600 text-sm font-medium">
                {activity.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-gray-900">{activity.name}</div>
              <div className="text-sm text-gray-500">{activity.room}</div>
            </div>
          </div>
          <Badge
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              activity.type === "check-in" ? "bg-blue-100 text-blue-700 hover:bg-blue-100" : "bg-orange-100 text-orange-700 hover:bg-orange-100"
            }`}
          >
            {activity.type === "check-in" ? "Check-in" : "Check-out"}
          </Badge>
        </div>
      ))}
    </div>
  );
}
