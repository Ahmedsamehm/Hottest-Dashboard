"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { month: "Jan", occupied: 65, available: 35 },
  { month: "Feb", occupied: 72, available: 28 },
  { month: "Mar", occupied: 78, available: 22 },
  { month: "Apr", occupied: 82, available: 18 },
  { month: "May", occupied: 88, available: 12 },
  { month: "Jun", occupied: 85, available: 15 },
];

export function MonthlyOccupancyChart() {
  return (
    <ResponsiveContainer className={"w-full mx-auto"} height={300}>
      <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis dataKey="month" tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
          }}
        />
        <Bar dataKey="occupied" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="available" fill="#10b981" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
