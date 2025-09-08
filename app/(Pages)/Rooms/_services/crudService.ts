import axios from "axios";
import { RoomType } from "../_types/types";

// Fixed interface for the API response
interface RoomsApiResponse {
  data: RoomType[]; // Fixed: should be array not single object
  availableRooms: RoomType[];
  error: null;
  count: number;
}

export const fetchAvailableRooms = async (): Promise<RoomType[]> => {
  const { data } = await axios.get<RoomsApiResponse>("/apis/rooms");

  return data.availableRooms ?? [];
};

export const GetAllRooms = async ({ page, pageSize, search, filter }: { page?: number; pageSize?: number; search?: string; filter?: string }) => {
  // If we have pagination but no filters
  if (page && pageSize && page > 0 && pageSize > 0 && filter === "" && search === "") {
    const { data } = await axios.get<RoomsApiResponse>(`/apis/rooms/?page=${page}&pageSize=${pageSize}&search=${search}`);
    return data ?? [];
  }

  // If we have filters with pagination
  if (filter && page && pageSize) {
    const { data } = await axios.get<RoomsApiResponse>(`/apis/rooms/?page=${page}&pageSize=${pageSize}&filter=${filter}`);
    return data ?? [];
  }

  // Default: get all rooms without filters
  const { data } = await axios.get<RoomsApiResponse>(`/apis/rooms/`);
  return data ?? [];
};

export const CreateRoom = async <T>(formData: T): Promise<T[]> => {
  const { data } = await axios.post<T[]>(`/apis/rooms/`, { formData });
  return data ?? [];
};

export const UpdateRoom = async <T>({ id, formData }: { id: number; formData: T }): Promise<T[]> => {
  const { data } = await axios.put<T[]>(`/apis/rooms/`, { id, formData });
  return data ?? [];
};

export const DeleteRoom = async (id: number): Promise<void> => {
  await axios.delete(`/apis/rooms/`, { data: { id } });
};
