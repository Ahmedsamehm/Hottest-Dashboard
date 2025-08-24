"use client";
import { createContext, useContext, useState } from "react";

import { Car, Coffee, Wifi } from "lucide-react";
import { useDebounce } from "@/hooks/useDebounce";

type Props = {
  children: React.ReactNode;
};

type DashBoardValues = {
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  editId: number | null;
  setEditId: React.Dispatch<React.SetStateAction<number | null>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  debouncedSearch: string;
  getStatusColor: (status: string) => string;

  getAmenityIcon: (amenity: string) => any;
};

const DashBoardContext = createContext<any>(null);
export const DashBoardProvider = ({ children }: Props) => {
  "use memo";
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const debouncedSearch = useDebounce(search, 500);
  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-emerald-100 text-emerald-700 hover:bg-emerald-100";
      case "pending":
        return "bg-amber-100 text-amber-700 hover:bg-amber-100";
      case "checked-out":
        return "bg-gray-100 text-gray-600 hover:bg-gray-100";
      case "available":
        return "bg-emerald-100 text-emerald-700 hover:bg-emerald-100";
      case "occupied":
        return "bg-blue-100 text-blue-700 hover:bg-blue-100";
      case "maintenance":
        return "bg-amber-100 text-amber-700 hover:bg-amber-100";
      default:
        return "bg-gray-100 text-gray-600 hover:bg-gray-100";
    }
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi":
        return <Wifi className="size-4 text-blue-500" />;
      case "parking":
        return <Car className="size-4 text-green-500" />;
      case "breakfast":
        return <Coffee className="size-4 text-orange-500" />;
      default:
        return null;
    }
  };
  const Values: DashBoardValues = {
    isEdit,
    setIsEdit,
    getStatusColor,

    editId,
    setEditId,
    open,
    setOpen,

    getAmenityIcon,
    search,
    setSearch,
    filter,
    setFilter,
    debouncedSearch,
  };
  return <DashBoardContext.Provider value={Values}>{children}</DashBoardContext.Provider>;
};

export const useDashBoard = () => {
  const context = useContext(DashBoardContext);
  if (!context) {
    throw new Error("useDashBoard must be used within a DashBoardProvider");
  }
  return context;
};
