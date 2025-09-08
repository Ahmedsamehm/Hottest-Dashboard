import React from "react";
import { Card, CardContent } from "./shared/ui/card";

export type Stat = {
  title: string;
  value: number | undefined | string;
  subtitle?: string;
  icon: any;
  bgColor: string;
  color: string;
};

const StatsCards = ({ stats }: { stats: Stat[] }) => {
  "use memo";
  const isEven = stats.length === 2;


  
  return isEven ? (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-border shadow-sm bg-card rounded-lg transition-all duration-300 hover:shadow-xs shadow-gray-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`size-5 ${stat.color}`} />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              {stat.subtitle && <p className="text-xs text-muted-foreground">{stat.subtitle}</p>}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  ) : (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-border shadow-sm bg-card rounded-lg transition-all duration-300  hover:shadow-xs shadow-gray-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`size-5 ${stat.color}`} />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
              <p className="text-2xl font-bold text-foreground">{Math.floor(stat?.value as number)}</p>
              {stat.subtitle && <p className="text-xs text-muted-foreground">{stat.subtitle}</p>}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
