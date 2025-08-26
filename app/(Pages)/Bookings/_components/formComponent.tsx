import React, { useEffect } from "react";

import { Button } from "@/app/components/shared/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { BookingResponse } from "../_types/types";
import useUpdateBooking from "../_hooks/useUpdateBooking";
import useFetchAllBookings from "../_hooks/useFetchAllBookings";
import { useDashBoard } from "@/app/context/dashBoardContext";
import useAddBooking from "../_hooks/useAddBooking";
import BookingForm from "./BookingForm";

const FormComponent = () => {

  const { bookings } = useFetchAllBookings();
  const { isUpdating, update } = useUpdateBooking();
  const { isEdit, editId: id, setOpen } = useDashBoard();
  const { AddRoom, isAdding } = useAddBooking();
  const selected = bookings?.data?.find((booking: BookingResponse) => booking?.id === Number(id)) || null;
  const { register, control, handleSubmit, reset } = useForm<BookingResponse>();

  useEffect(() => {
    if (isEdit && id) {
      reset(selected);
    } else {
      reset();
    }
  }, [id, reset, selected, isEdit]);

  const onSubmit: SubmitHandler<BookingResponse> = (formData: BookingResponse) => {
    if (isEdit && id) {
      const updatedFields = Object.fromEntries(Object.entries(formData).filter(([key, value]) => value !== (selected as any)[key]));
      update({ id, formData: updatedFields, tableName: "Booking" });
      setOpen(false);
    } else {
      AddRoom({ formData });
      setOpen(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <BookingForm register={register} control={control} selected={selected} />
      <div className="flex gap-4 justify-end pt-4 border-t border-border">
        <Button disabled={isUpdating || isAdding} type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
          {isEdit ? "Update" : "Create"}
        </Button>
      </div>
    </form>
  );
};

export default FormComponent;
