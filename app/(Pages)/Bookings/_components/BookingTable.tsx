import { TableBody, TableCell, TableRow } from "@/app/components/shared/ui/table";
import TableMenu from "@/app/components/TableMenu";
import React from "react";

import { BookingResponse } from "../_types/types";
import { Badge } from "@/app/components/shared/ui/badge";

import useDeleteBooking from "../_hooks/useDeleteBooking";
import { useDashBoard } from "@/app/context/dashBoardContext";
import { DropDownMenu } from "@/app/components/DropDownMenu";
import SkeletonComponent from "@/app/components/SkeletonComponent";

interface BookingTableProps {
  bookings: BookingResponse;
  isLoading: boolean;
}

const BookingTable: React.FC<BookingTableProps> = ({ bookings, isLoading }) => {
  "use memo";
  const TableHeadTitles = ["BookingID", "Guest", "Contact", "Room", "Check-in", "Check-out", "Nights", "Amount", "Status", "Actions"];

  const { getStatusColor } = useDashBoard();
  const { deleteItem, isDeleting } = useDeleteBooking();
  if (isLoading) return <SkeletonComponent />;

  return (
    <TableMenu TableHeadTitles={TableHeadTitles} tableName="Bookings" tableDescription="Showing bookings from example table">
      {bookings?.length === 0 ? (
        <TableBody>
          <TableRow>
            <TableCell colSpan={9} className="h-24 text-center font-bold text-xl text-foreground">
              No bookings available
            </TableCell>
          </TableRow>
        </TableBody>
      ) : (
        <TableBody>
          {bookings?.map((list: BookingResponse) => (
            <TableRow key={list.id} className="border-border">
              <TableCell className="font-medium text-foreground">BK{list.id}</TableCell>
              <TableCell>
                <div className="flex items-center w-fit">
                  <p className="text-sm w-fit bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-md">{list?.guest?.fullName || list?.fullName}</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="text-sm text-foreground">{list?.guest?.email || list?.email}</div>
                  <div className="text-sm text-foreground">{list?.guest?.phone || list?.phone}</div>
                </div>
              </TableCell>
              <TableCell className="font-medium text-foreground">{list.roomId}</TableCell>
              <TableCell className="text-foreground">{list.checkin}</TableCell>
              <TableCell className="text-foreground">{list.checkout}</TableCell>
              <TableCell className="text-foreground">{list.nights}</TableCell>
              <TableCell className="font-medium text-foreground">${list.price}</TableCell>
              <TableCell>
                <Badge variant="outline" className={`capitalize border ${getStatusColor(list.status)}`}>
                  {list.status}
                </Badge>
              </TableCell>
              <TableCell>
                <DropDownMenu id={list?.id} isDeleting={isDeleting} Delete={() => deleteItem(list?.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      )}
    </TableMenu>
  );
};

export default BookingTable;
