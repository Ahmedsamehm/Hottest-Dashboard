import React from "react";
import { Skeleton } from "./shared/ui/skeleton";

function SkeletonComponent() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-6 w-1/2 dark:bg-muted bg-gray-300  duration-300 " />
      <Skeleton className="h-64 w-full dark:bg-muted bg-gray-300  duration-300" />
    </div>
  );
}

export default SkeletonComponent;
