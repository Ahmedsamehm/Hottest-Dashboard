"use client";

import { Badge } from "@/app/components/shared/ui/badge";
import { Button } from "@/app/components/shared/ui/button";

import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useDashBoard } from "@/app/context/dashBoardContext";

import BookingForm from "../(Pages)/Bookings/_components/BookingForm";

import GuestForm from "../(Pages)/Guests/_components/GuestForm";
import { RoomsForm } from "../(Pages)/Rooms/_components/RoomsForm";
import usePageName from "@/hooks/usePageName";

const DetailsSection = () => {
  const { fetchAction, updateAction, isLoading, AddAction, isEdit, getStatusColor, editId, actionError } = useDashBoard();
  const { pageName } = usePageName();

  const selected = isEdit && editId ? fetchAction?.data?.find((booking: any) => booking.id === Number(editId)) : null;

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isEdit && selected) {
      const { guest, ...rest } = selected;
      const transformedData = { ...rest, guestId: guest?.id };
      reset(transformedData);
    } else {
      reset({});
    }
  }, [isEdit, selected, reset]);

  const onSubmit: SubmitHandler<any> = (formData) => {
    if (isEdit && editId && selected) {
      const updatedFields = Object.fromEntries(Object.entries(formData).filter(([key, value]) => value !== (selected as any)[key]));
      updateAction({ id: editId, formData: updatedFields } as any);
    } else {
      AddAction({ formData });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {pageName === "Rooms" && <RoomsForm control={control} register={register} />}
      {pageName === "Bookings" && <BookingForm control={control} register={register} />}
      {pageName === "Guests" && <GuestForm control={control} register={register} errors={errors} />}
      {isEdit && selected && (
        <div className="flex justify-between items-center mt-4">
          <div>
            <h3 className="text-lg font-semibold">Status</h3>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          <Badge className={`capitalize ${getStatusColor((selected as any)?.status)} `}>{(selected as any)?.status}</Badge>
        </div>
      )}

      {actionError ? <p className="text-sm text-red-600">{actionError}</p> : null}

      <Button type="submit" disabled={isLoading} className="w-full">
        {isEdit ? "Update" : "Add"}
      </Button>
    </form>
  );
};

export default DetailsSection;
