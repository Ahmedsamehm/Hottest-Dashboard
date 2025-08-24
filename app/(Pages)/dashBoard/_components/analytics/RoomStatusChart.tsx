"use client";

import useFetchRooms from "@/app/(Pages)/Rooms/_hooks/useFetchRooms";

import SkeletonComponent from "@/app/components/SkeletonComponent";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

export function RoomStatusChart() {
  "use memo";
  const { getAvailableRooms, getOccupiedRooms, isLoading, getMaintenance, isPending } = useFetchRooms();
  const data = [
    { name: "Occupied", value: getOccupiedRooms, color: "#10b981" },
    { name: "Available", value: getAvailableRooms, color: "#3b82f6" },
    { name: "Maintenance", value: getMaintenance, color: "#f59e0b" },
  ];
  if (isLoading || isPending) return <SkeletonComponent />;

  return (
    <div className="flex items-center justify-center">
      <ResponsiveContainer className={"w-full mx-auto"} height={300}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="ml-6 space-y-3">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="size-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
            <span className="text-sm text-muted-foreground dark:text-white">
              {item.name} ({item.value})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
