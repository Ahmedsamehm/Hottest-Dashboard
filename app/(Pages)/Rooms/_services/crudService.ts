import axios from "axios";
import { RoomType } from "../_types/types";

export const fetchAvailableRooms = async (): Promise<RoomType[]> => {
  const { data } = await axios.get<RoomType[]>("/apis/rooms");

  return data ?? [];
};

// export const AddDataRooms = async (formData: RoomType) => {
//   const { data } = await axios.post<RoomType>("/apis/rooms", { formData });

//   return data ?? [];
// };

// export const UpdateRoom = async ({ id, formData }: { id: number; formData: RoomType }): Promise<RoomType[]> => {
//   const { data } = await axios.put<RoomType[]>(`/apis/rooms/`, { id, formData });

//   return data ?? [];
// };

// export const DeleteRoom = async (id: number): Promise<void> => {
//   const { data } = await axios.delete<void>(`/apis/rooms/`, { data: { id } });

//   return data;
// };
