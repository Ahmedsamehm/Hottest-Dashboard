"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Occupied", value: 85, color: "#3b82f6" },
  { name: "Available", value: 12, color: "#10b981" },
  { name: "Maintenance", value: 3, color: "#f59e0b" },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

export function RoomStatusChart() {
  return (
    <div className="flex items-center justify-center">
      <ResponsiveContainer className={"w-full mx-auto"} height={300}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="ml-6 space-y-3">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="size-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
            <span className="text-sm text-gray-600">
              {item.name} ({item.value})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
