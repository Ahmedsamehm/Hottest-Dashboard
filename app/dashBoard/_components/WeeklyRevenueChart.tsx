"use client";

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { day: "Mon", revenue: 13000 },
  { day: "Tue", revenue: 14500 },
  { day: "Wed", revenue: 12800 },
  { day: "Thu", revenue: 19200 },
  { day: "Fri", revenue: 21500 },
  { day: "Sat", revenue: 19800 },
  { day: "Sun", revenue: 18500 },
];

export function WeeklyRevenueChart() {
  return (
    <ResponsiveContainer className={"w-full mx-auto"} height={300}>
      <LineChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis dataKey="day" tick={{ fill: "#64748b", fontSize: 12 }} axisLine={false} tickLine={false} />
        <YAxis
          tick={{ fill: "#64748b", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
        />
        <Tooltip
          formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
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
