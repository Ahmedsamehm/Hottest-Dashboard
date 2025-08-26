import { Avatar, AvatarFallback } from "@/app/components/shared/ui/avatar";
import { Badge } from "@/app/components/shared/ui/badge";
import { TableBody, TableCell, TableRow } from "@/app/components/shared/ui/table";
import TableMenu from "@/app/components/TableMenu";
import React from "react";
import { GuestType } from "./GuestsClient";

import { DropDownMenu } from "@/app/components/DropDownMenu";
import useDeleteGuest from "../_hooks/useDeleteGuest";
import SkeletonComponent from "@/app/components/SkeletonComponent";

// Table column headers
const TableHeadTitles = ["ID", "Guest", "Contact", "Nationality", "National ID", "VIP", "Actions"];

const GuestsTable = ({ Guests, isLoading }: { Guests: GuestType[]; isLoading: boolean }) => {
  "use memo";

  const { deleteItem, isDeleting } = useDeleteGuest();
  if (isLoading) return <SkeletonComponent />;
  return (
    <div className="max-h-[50vh] overflow-y-auto">
      <TableMenu TableHeadTitles={TableHeadTitles} tableName="Guests" tableDescription="Showing 5 of 5 guests">
        <TableBody>
          {Guests?.map((guest: GuestType) => (
            <TableRow key={guest.id} className="">
              {/* Guest ID */}
              <TableCell className="font-medium ">{guest.id}</TableCell>

              {/* Guest info with avatar */}
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="size-8 border border-gray-200">
                    <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                      {guest.fullName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium ">{guest.fullName}</span>
                </div>
              </TableCell>

              {/* Contact info */}
              <TableCell>
                <div className="space-y-1">
                  <div className="text-sm ">{guest.email}</div>
                  <div className="text-sm ">{guest.phone}</div>
                </div>
              </TableCell>

              {/* Nationality */}
              <TableCell>{guest.nationality}</TableCell>

              {/* National ID */}
              <TableCell>{guest.nationalID}</TableCell>

              {/* VIP status */}
              <TableCell>{guest.vip ? <Badge className="bg-purple-200 text-purple-600">VIP</Badge> : <Badge variant="secondary">Regular</Badge>}</TableCell>

              {/* Actions dropdown */}
              <TableCell>
                <DropDownMenu Delete={() => deleteItem(guest?.id)} isDeleting={isDeleting} id={guest?.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMenu>
    </div>
  );
};

export default GuestsTable;
