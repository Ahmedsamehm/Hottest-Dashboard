import React, { useEffect } from "react";
import useFetchRooms from "../_hooks/useFetchRooms";
import useUpdateRoom from "../_hooks/useUpdateRoom";
import useAddRoom from "../_hooks/useAddRoom";
import { RoomType } from "../_types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { RoomsForm } from "./RoomsForm";
import { Button } from "@/app/components/shared/ui/button";
import { useDashBoard } from "@/app/context/dashBoardContext";
import Loading from "@/app/components/shared/ui/Loading";

const FormComponent = () => {

  const { Rooms, isPending } = useFetchRooms();
  const { update, isUpdating } = useUpdateRoom();
  const { isEdit, editId: id, setOpen } = useDashBoard();
  const { AddRoom, isAdding } = useAddRoom();
  const selected = Rooms?.data?.find((Room: RoomType) => Room?.id === Number(id)) || null;
  const { register, control, handleSubmit, reset } = useForm<RoomType>();

  useEffect(() => {
    if (isEdit && id) {
      reset(selected);
    } else {
      reset();
    }
  }, [id, reset, selected, isEdit]);

  const onSubmit: SubmitHandler<RoomType> = (formData: RoomType) => {
    if (isEdit && id) {
      const updatedFields = Object.fromEntries(Object.entries(formData).filter(([key, value]) => value !== (selected as any)[key]));

      update({ id, formData: updatedFields, tableName: "Rooms" });
      setOpen(false);
    } else {
      AddRoom({ formData });
      setOpen(false);
    }
  };
  if (isPending) return <Loading />;
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <RoomsForm register={register} control={control} Rooms={Rooms?.data || []} selected={selected} editId={id} />
      <Button disabled={isUpdating || isAdding} type="submit" className="btn btn-primary  w-full">
        {isEdit ? "Update Rooms" : "Add Rooms"}
      </Button>
    </form>
  );
};

export default FormComponent;
