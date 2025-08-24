"use client";
import React from "react";
import { Edit, MoreHorizontal, Trash2 } from "lucide-react";
import { Button } from "./shared/ui/button";

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./shared/ui/dropdown-menu";

import { useDashBoard } from "@/app/context/dashBoardContext";

type DropdownMenuDemoProps = {
  Delete: () => void;
  isDeleting: boolean;
  id: number;
};
export function DropDownMenu({ Delete, isDeleting, id }: DropdownMenuDemoProps) {
  "use memo";

  const { setIsEdit, setEditId, setOpen } = useDashBoard();
  const handleEdit = () => {
    setIsEdit(true);
    setOpen(true);
    setEditId(id);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" disabled={isDeleting} className="text-gray-400 hover:text-gray-600 border border-gray-400">
          <MoreHorizontal className="size-7" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>
          <p className="text-sm font-medium ">Actions Menu</p>
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleEdit} className="flex cursor-pointer hover:bg-blue-50">
            <Edit className="size-4 mr-2" />
            Edit Details
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" text-destructive hover:!text-destructive hover:!bg-destructive/10 border flex cursor-pointer" onClick={Delete}>
            <Trash2 className="size-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
