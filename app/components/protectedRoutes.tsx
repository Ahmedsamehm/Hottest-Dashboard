"use client";
import React, { useEffect } from "react";
import { useGetUser } from "../(Pages)/Login/_hooks/useLogin";

import { useRouter } from "next/navigation";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const { user, isPending } = useGetUser();
  const router = useRouter();

  useEffect(() => {
    if (user && !isPending) {
      router.push("/");
    } else {
      router.push("/Login");
    }
  }, [user]);

  return children;
};

export default ProtectedRoutes;
