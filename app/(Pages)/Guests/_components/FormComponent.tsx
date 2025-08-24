import { useDashBoard } from "@/app/context/dashBoardContext";
import useAddGuest from "../_hooks/useAddGuest";
import useUpdateGuest from "../_hooks/useUpdateGuest";
import useFetchGuests from "../_hooks/useFetchGuests";

import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";

import { Button } from "@/app/components/shared/ui/button";
import GuestForm from "./GuestForm";
import { GuestType } from "./GuestsClient";

const FormComponent = () => {
  const { Guests } = useFetchGuests();
  const { AddGuest, isAdding } = useAddGuest();
  const { update, isUpdating } = useUpdateGuest();

  const { isEdit, editId: id, setOpen } = useDashBoard();

  const selected = Guests?.data?.find((guest: GuestType) => guest?.id === Number(id)) || null;
  const { register, control, handleSubmit, reset } = useForm<GuestType>();

  useEffect(() => {
    if (isEdit && id) {
      reset(selected);
    } else {
      reset();
    }
  }, [id, reset, selected, isEdit]);

  const onSubmit: SubmitHandler<GuestType> = (formData: GuestType) => {
    if (isEdit && id) {
      const updatedFields = Object.fromEntries(Object.entries(formData).filter(([key, value]) => value !== (selected as any)[key]));

      update({ id, formData: updatedFields, tableName: "Guests" });
      setOpen(false);
    } else {
      AddGuest({ formData });
      setOpen(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <GuestForm register={register} control={control} />
      <Button disabled={isUpdating || isAdding} type="submit" className="btn btn-primary w-full">
        {isEdit ? "Update Guests" : "Add Guests"}
      </Button>
    </form>
  );
};

export default FormComponent;
