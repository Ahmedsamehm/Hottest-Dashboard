import axios from "axios";
import { BookingResponse } from "../_types/types";

export const GetAllBookings = async ({ page, pageSize, search, filter }: { page?: number; pageSize?: number; search?: string; filter?: string }) => {
  if (page && pageSize && page > 0 && pageSize > 0 && filter === "" && search === "") {
    const { data } = await axios.get<BookingResponse[]>(`/apis/booking/?page=${page}&pageSize=${pageSize}&search=${search}`);
    return data ?? [];
  }

  if (filter && page && pageSize) {
    const { data } = await axios.get<BookingResponse[]>(`/apis/booking/?page=${page}&pageSize=${pageSize}&filter=${filter}`);
    return data ?? [];
  }

  const { data } = await axios.get<BookingResponse[]>(`/apis/booking/`);

  return data ?? [];
};

export const CreateBooking = async <T>(formData: T): Promise<T[]> => {
  const { data } = await axios.post<T[]>(`/apis/booking/`, { formData });

  return data ?? [];
};

export const UpdateBooking = async <T>({ id, formData }: { id: number; formData: T }): Promise<T[]> => {
  const { data } = await axios.put<T[]>(`/apis/booking/`, { id, formData });

  return data ?? [];
};

export const DeleteBooking = async (id: number): Promise<void> => {
  await axios.delete(`/apis/booking/`, { data: { id } });
};
