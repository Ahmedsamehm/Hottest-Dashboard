import axios from "axios";
type Props<T> = {
  tableName?: string;
  id?: number;
  formData?: T;
  search?: string | number;
  filter?: string;
  page?: number;
  pageSize?: number;
};

export const GetAllData = async <T>({ tableName, page, pageSize, search, filter }: Props<T>): Promise<any> => {
  try {
    if (page && pageSize && page > 0 && pageSize > 0 && filter === "") {
      const { data } = await axios.get<T[]>(`/apis/${tableName}?page=${page}&pageSize=${pageSize}&search=${search ?? ""}&filter=`);
      return data ?? [];
    }

    if (filter && page && pageSize) {
      const { data } = await axios.get<T[]>(`/apis/${tableName}?page=${page}&pageSize=${pageSize}&filter=${filter}&search=${search ?? ""}`);
      return data ?? [];
    }
    if (search && page && pageSize) {
      const { data } = await axios.get<T[]>(`/apis/${tableName}?page=${page}&pageSize=${pageSize}&search=${search}`);
      return data ?? [];
    }

    if (tableName) {
      const { data } = await axios.get<T[]>(`/apis/${tableName}`);
      return data ?? [];
    }
  } catch (e: any) {
    const message = e?.response?.data?.error || e?.message || "Failed to get record";
    throw new Error(message);
  }
};

export const DeleteData = async ({ tableName, id }: Props<any>): Promise<void> => {
  try {
    const { data } = await axios.delete<void>(`/apis/${tableName}`, {
      data: { id },
    });
    return data;
  } catch (e: any) {
    const message = e?.response?.data?.error || e?.message || "Failed to delete record";
    throw new Error(message);
  }
};

export const UpdateData = async <T>({ tableName, id, formData }: Props<T>): Promise<T[]> => {
  try {
    const { data } = await axios.put<T[]>(`/apis/${tableName}`, { id, formData });
    return data ?? [];
  } catch (e: any) {
    const message = e?.response?.data?.error || e?.message || "Failed to update record";
    throw new Error(message);
  }
};

export const AddData = async <T>({ tableName, formData }: Props<T>): Promise<T[]> => {
  try {
    const { data } = await axios.post<T[]>(`/apis/${tableName}`, { formData });
    return data ?? [];
  } catch (e: any) {
    const message = e?.response?.data?.error || e?.message || "Failed to add record";
    throw new Error(message);
  }
};
