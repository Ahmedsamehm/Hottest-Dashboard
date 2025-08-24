import React from "react";

import { Button } from "./shared/ui/button";
import usePagination from "./usePagination";
import usePageName from "@/hooks/usePageName";

const PaginationComponent = ({ fetchAction }: any) => {
  "use memo";
  const { pageName: path } = usePageName();

  const { page, handleIncrement, handleDecrement, totalPages } = usePagination(fetchAction, path);
  return (
    <div className="flex justify-center items-center mx-auto gap-3 mt-3">
      <Button disabled={page === 1} variant={"ghost"} className="bg-background text-foreground  hover:text-blue-600 hover:border-blue-600 border disabled:cursor-not-allowed" onClick={handleDecrement}>
        Previous
      </Button>
      <span className="text-lg font-semibold">{page}</span>
      <Button
        disabled={page === totalPages}
        variant={"ghost"}
        className="bg-background text-foreground  hover:bg-white hover:text-blue-600 hover:border-blue-600 border disabled:cursor-not-allowed"
        onClick={handleIncrement}
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationComponent;
