import axios from "axios";
import { Guest } from "../_types/type";

type GuestProps = {
  page?: number;
  pageSize?: number;
  search?: string;
  filter?: string;
};

export const GetAllGuests = async ({ page, pageSize, search, filter }: GuestProps) => {
  // If we have pagination but no filters
  if (page && pageSize && page > 0 && pageSize > 0 && filter === "" && search === "") {
    const { data } = await axios.get<Guest>(`/apis/guests/?page=${page}&pageSize=${pageSize}&search=${search}`);
    return data ?? [];
  }

  // If we have filters with pagination
  if (filter && page && pageSize) {
    const { data } = await axios.get<Guest>(`/apis/guests/?page=${page}&pageSize=${pageSize}&filter=${filter}`);
    return data ?? [];
  }

  // Default: get all guests without filters
  const { data } = await axios.get<Guest>(`/apis/guests/`);
  return data ?? [];
};

export const CreateGuest = async <T>(formData: T): Promise<T[]> => {
  const { data } = await axios.post<T[]>(`/apis/guests/`, { formData });
  return data ?? [];
};

export const UpdateGuest = async <T>({ id, formData }: { id: number; formData: T }): Promise<T[]> => {
  const { data } = await axios.put<T[]>(`/apis/guests/`, { id, formData });
  return data ?? [];
};

export const DeleteGuest = async (id: number): Promise<void> => {
  await axios.delete(`/apis/guests/`, { data: { id } });
};
