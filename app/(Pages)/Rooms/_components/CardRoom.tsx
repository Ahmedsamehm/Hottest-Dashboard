"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/shared/ui/card";
import { useDashBoard } from "@/app/context/dashBoardContext";
import { Bed, Users } from "lucide-react";
import React from "react";
import { RoomType } from "../_types/types";
import { Badge } from "@/app/components/shared/ui/badge";
import useDeleteRoom from "../_hooks/useDeleteRoom";
import { DropDownMenu } from "@/app/components/DropDownMenu";

const CardRoom = ({ Rooms }) => {
  "use memo";
  const { getStatusColor, getAmenityIcon } = useDashBoard();
  const { deleteItem, isDeleting } = useDeleteRoom();

  return (
    <section>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto  max-h-[70vh] overflow-y-auto  ">
        {Rooms?.map((room: RoomType) => (
          <Card key={room.id} className=" light:border-gray-300 ">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold ">{room.name}</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm ">Room {room.id}</span>
                    <span className="text-sm ">•</span>
                    <span className="text-sm ">Floor {room.floor}</span>
                  </div>
                </div>
                {/* Dropdown menu for room actions */}
                <DropDownMenu Delete={() => deleteItem(room?.id)} isDeleting={isDeleting} id={room.id} />
              </div>
              <div className="flex items-center justify-between mt-4">
                <Badge className={getStatusColor(room?.status)}>{room.status}</Badge>
                <div className="text-right">
                  <div className="text-2xl font-bold ">${room.price}</div>
                  <div className="text-sm ">per night</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Room details */}
              <div className="flex items-center gap-2">
                <Bed className="size-4 " />
                <span className="text-sm ">{room.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="size-4 " />
                <span className="text-sm ">Up to {room.capacity} guests</span>
              </div>
              <p className="text-sm ">{room.description}</p>
              {/* Amenities */}
              <div className="flex gap-2">
                {Object.entries(room.amenities || {})
                  .filter(([, value]) => !!value)
                  .map(([key]) => (
                    <div key={key} className="flex items-center gap-1">
                      {getAmenityIcon(key)}
                    </div>
                  ))}
              </div>
              <div className="text-xs  pt-2 border-t border-gray-100">Last cleaned: {room.lastCleaned}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CardRoom;
