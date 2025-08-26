import { Checkbox } from "@/app/components/shared/ui/checkbox";
import { Input } from "@/app/components/shared/ui/input";
import { Label } from "@/app/components/shared/ui/label";

import React from "react";
import { Controller } from "react-hook-form";
import { Hamburger, Wallet } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/shared/ui/select";
import { FormLabel } from "@/app/Types/types";

import { BookingResponse } from "../_types/types";
import useAvailableRooms from "../../Rooms/_hooks/useAvailableRooms";
import useFetchGuests from "../../Guests/_hooks/useFetchGuests";
import { RoomType } from "../../Rooms/_types/types";

// Form field configurations
const formLabel: FormLabel[] = [
  {
    label: "Room Number",
    name: "roomId",
    type: "text",
  },
  {
    label: "Guest Name",
    name: "guestId",
    type: "text",
  },
  {
    label: "Booking Status",
    name: "status",
    type: "text",
    control: true,
    options: ["confirmed", "pending", "checked-out"],
  },
  {
    label: "Check-In",
    name: "checkin",
    type: "date",
  },
  {
    label: "Check-Out",
    name: "checkout",
    type: "date",
  },
  {
    label: "Nights",
    name: "nights",
    type: "number",
  },
  {
    label: "Total Amount",
    name: "price",
    type: "number",
  },
  {
    label: "Observations",
    name: "observations",
    type: "text",
  },
];

const BookingForm = ({ control, register, selected }: { control: any; register: any; selected?: BookingResponse }) => {
  const { Guests } = useFetchGuests();
  const { availableRooms, availableRoomsLoading, availableRoomsPending } = useAvailableRooms();

  const ChooseGuest = (value: string) => {
    if (!value) return "Choose Guest";
    return (Guests as any)?.data?.find((g: any) => g.id === Number(value))?.fullName || "Choose Guest";
  };
  const ChooseRoom = (value: string) => {
    if (!value) return "Choose Room";
    if ((availableRooms as any)?.length === 0) return "No Rooms Available";
    return (availableRooms as any)?.find((r: any) => r.id === parseInt(value))?.id;
  };

  const guestOptions =
    (Guests as any)?.data?.map((guest: any) => ({
      value: guest.id.toString(),
      label: guest.fullName,
    })) || [];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[50vh] md:max-h-full overflow-y-auto">
        {formLabel.map((field, index) => (
          <div key={index} className="space-y-2">
            {field.control ? (
              // Render Select for controlled fields (like status)
              <Controller
                name={field.name || ""}
                control={control}
                defaultValue={selected?.[field.name as keyof BookingResponse] || ""}
                render={({ field: f }) => (
                  <div>
                    <Label className="text-foreground">{field.label}</Label>
                    <Select onValueChange={f.onChange} value={f.value?.toString()} defaultValue={f.value}>
                      <SelectTrigger className="w-full bg-background border-border text-foreground">
                        <SelectValue placeholder={`Select ${field.label}`} />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border text-foreground">
                        {field.options?.map((opt, i) => (
                          <SelectItem key={i} value={opt} className="focus:bg-accent focus:text-accent-foreground">
                            {opt.charAt(0).toUpperCase() + opt.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              />
            ) : (
              // Render Input or Select based on field
              <>
                <Label className="text-foreground">{field.label}</Label>
                {field.name === "guestId" ? (
                  <Controller
                    name="guestId"
                    control={control}
                    defaultValue={selected?.guestId?.toString() || ""}
                    disabled={availableRoomsLoading || availableRoomsPending}
                    render={({ field: f }) => (
                      <Select onValueChange={f.onChange} value={f.value?.toString()}>
                        <SelectTrigger className="w-full bg-background border-border text-foreground">
                          <SelectValue placeholder={ChooseGuest(f.value)} />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border text-foreground">
                          {guestOptions.map((opt: any) => (
                            <SelectItem key={opt.value} value={opt.value} className="focus:bg-accent focus:text-accent-foreground">
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                ) : field.name === "roomId" ? (
                  <Controller
                    name="roomId"
                    control={control}
                    disabled={availableRoomsLoading || availableRoomsPending}
                    defaultValue={selected?.roomId || ""}
                    render={({ field: f }) => (
                      <Select onValueChange={f.onChange} value={f.value?.toString()}>
                        <SelectTrigger className="w-full bg-background border-border text-foreground">{ChooseRoom(f.value)}</SelectTrigger>
                        <SelectContent className="bg-popover border-border text-foreground">
                          {availableRooms?.map((room: RoomType) => (
                            <SelectItem key={room.id} value={room.id.toString()} className="focus:bg-accent focus:text-accent-foreground">
                              Room {room.id}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                ) : (
                  <Input
                    required
                    id={field.name}
                    type={field.type}
                    defaultValue={(selected?.[field.name as keyof BookingResponse] as string) || ""}
                    {...register(field.name)}
                    placeholder={`Enter ${field.label}`}
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  />
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {/* Additional checkboxes */}
      <div className="flex flex-wrap gap-6 mt-6">
        <div className="w-full flex justify-between items-center p-3 rounded-lg border border-border bg-card">
          <Label htmlFor="Breakfast" className="flex items-center gap-2 text-foreground">
            <Hamburger size={16} />
            Breakfast Included
          </Label>
          <Controller
            name="hasBreakfast"
            control={control}
            defaultValue={selected?.hasBreakfast || false}
            render={({ field: checkboxField }) => (
              <Checkbox checked={checkboxField.value} onCheckedChange={checkboxField.onChange} className="border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
            )}
          />
        </div>
        <div className="w-full flex justify-between items-center p-3 rounded-lg border border-border bg-card">
          <Label htmlFor="isPaid" className="flex items-center gap-2 text-foreground">
            <Wallet size={16} />
            Payment Completed
          </Label>
          <Controller
            name="isPaid"
            control={control}
            defaultValue={selected?.isPaid || false}
            render={({ field: checkboxField }) => (
              <Checkbox checked={checkboxField.value} onCheckedChange={checkboxField.onChange} className="border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" />
            )}
          />
        </div>
      </div>
    </>
  );
};

export default BookingForm;
