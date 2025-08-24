"use client";

import useFetchRooms from "@/app/(Pages)/Rooms/_hooks/useFetchRooms";

import SkeletonComponent from "@/app/components/SkeletonComponent";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export function WeeklyRevenueChart() {
  "use memo";
  const { getRevenue, isLoading, isPending } = useFetchRooms();
  const data = [
    { day: "Today", revenue: getRevenue },
    { day: "Tue", revenue: 14500 },
    { day: "Wed", revenue: 12800 },
    { day: "Thu", revenue: 19200 },
    // { day: "Fri", revenue: 21500 },
    // { day: "Sat", revenue: 19800 },
    // { day: "Sun", revenue: 18500 },
  ];
  if (isLoading || isPending) return <SkeletonComponent />;

  return (
    <ResponsiveContainer className={"w-full mx-auto"} height={300}>
      <LineChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
        <XAxis dataKey="day" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
        <Tooltip
          formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
          contentStyle={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            color: "var(--foreground)",
          }}
        />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#3b82f6"
          strokeWidth={3}
          dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: "#3b82f6", strokeWidth: 2, fill: "white" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
