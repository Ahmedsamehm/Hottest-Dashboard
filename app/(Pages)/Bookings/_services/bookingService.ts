import axios from "axios";
import { BookingResponse } from "../_types/types";

export const GetAllBookings = async ({ page, pageSize, search, filter }: { page?: number; pageSize?: number; search?: string; filter?: string }) => {
  if (page && pageSize && page > 0 && pageSize > 0 && filter === "" && search === "") {
    const { data } = await axios.get<BookingResponse[]>(`/apis/bookingPage/?page=${page}&pageSize=${pageSize}&search=${search}`);
    return data ?? [];
  }

  if (filter && page && pageSize) {
    const { data } = await axios.get<BookingResponse[]>(`/apis/bookingPage/?page=${page}&pageSize=${pageSize}&filter=${filter}`);
    return data ?? [];
  }

  const { data } = await axios.get<BookingResponse[]>(`/apis/bookingPage/`);

  return data ?? [];
};

export const CreateBooking = async <T>(formData: T): Promise<T[]> => {
  const { data } = await axios.post<T[]>(`/apis/bookingPage/`, { formData });

  return data ?? [];
};
