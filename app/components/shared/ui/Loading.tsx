import { LoaderCircle } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center min-h-[80vh] items-center ">
      <LoaderCircle className="animate-spin" size={70} />
    </div>
  );
};

export default Loading;
