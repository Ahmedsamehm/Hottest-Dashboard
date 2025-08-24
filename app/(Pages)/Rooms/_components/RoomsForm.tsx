"use memo";
import React from "react";
import { Controller } from "react-hook-form";

import { Wifi, CarIcon, Hamburger } from "lucide-react";

import { Label } from "@/app/components/shared/ui/label";
import { Input } from "@/app/components/shared/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/shared/ui/select";
import { Checkbox } from "@/app/components/shared/ui/checkbox";

interface RoomsFormProps {
  control: any;
  register: any;
}

export const RoomsForm = ({ control, register, Rooms, editId }: RoomsFormProps) => {
  "use memo";
  // Get selected room data once
  const roomData = Rooms?.find((room: any) => room?.id === editId);

  // Extract room fields
  const getCapacity = roomData?.capacity;
  // const getAmenities = roomData?.amenities;
  const getFloor = roomData?.floor;
  const getStatus = roomData?.status;
  const getRoomType = roomData?.type;

  // Form fields config
  const formLabel = [
    { label: "Room Number", name: "name", type: "text" },
    { label: "Capacity", name: "capacity", type: "number", value: getCapacity, control: true, options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
    { label: "Price", name: "price", type: "number" },
    { label: "Description", name: "description", type: "text" },

    { label: "Room Type", name: "type", value: getRoomType, type: "text", control: true, options: ["Single", "Double", "Suite", "Family", "Deluxe", "Executive", "Presidential"] },
    { label: "Floor", name: "floor", value: getFloor, type: "text", control: true, options: ["floor1", "floor2", "floor3", "floor4", "floor5", "floor6", "floor7", "floor8", "floor9", "floor10"] },
    { label: "Status", name: "status", value: getStatus, type: "text", control: true, options: ["available", "occupied", "maintenance", "needs cleaning"] },
    { label: "Last Cleaned", name: "lastCleaned", type: "text" },
  ];

  // Amenities fields config
  const amenitiesFields = [
    { name: "wifi", label: "Wifi", icon: Wifi },
    { name: "parking", label: "Parking", icon: CarIcon },
    { name: "breakfast", label: "Breakfast", icon: Hamburger },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[50vh] md:max-h-full overflow-y-auto">
        {formLabel.map((field, idx) => (
          <div key={idx} className="col-span-2 lg:col-span-1">
            <Label className="my-2" htmlFor={field.name}>
              {field.label}
            </Label>
            {field.control ? (
              <Controller
                name={field.name || ""}
                control={control}
                defaultValue={field.value}
                render={({ field: f }) => (
                  <Select required onValueChange={f.onChange} value={f.value ?? ""}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={`Select ${field.label}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options?.map((opt, i) => (
                        <SelectItem key={i} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            ) : (
              <Input required type={field.type} defaultValue={field.value} {...register(field.name)} placeholder={`Enter ${field.label}`} />
            )}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold">Preferences</h2>
      <div className="">
        <div className="flex flex-wrap gap-4">
          <div className="space-y-3 w-full ">
            {amenitiesFields.map(({ name, label, icon: Icon }) => (
              <div key={name} className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card">
                <Icon className="size-6" />
                <span className="grow">{label}</span>
                <Controller
                  name={`amenities.${name}`}
                  control={control}
                  // defaultValue={amenitiesDefaults[name] || false}
                  render={({ field }) => <Checkbox checked={field.value || false} onCheckedChange={field.onChange} className="border-gray-600 border" />}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
