"use client";

import useFetchRooms from "@/app/(Pages)/Rooms/_hooks/useFetchRooms";

import SkeletonComponent from "@/app/components/SkeletonComponent";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export function MonthlyOccupancyChart() {
  "use memo";
  const { getAvailableRooms, getOccupiedRooms, isLoading, isPending } = useFetchRooms();

  const data = [{ month: "Now", occupied: getOccupiedRooms, available: getAvailableRooms }];

  if (isLoading || isPending) return <SkeletonComponent />;

  return (
    <ResponsiveContainer className={"w-full mx-auto"} height={300}>
      <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
        <XAxis dataKey="month" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            color: "var(--foreground)",
          }}
        />
        <Bar dataKey="occupied" fill="var(--color-chart-1)" radius={[4, 4, 0, 0]} />
        <Bar dataKey="available" fill="var(--color-chart-2)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
