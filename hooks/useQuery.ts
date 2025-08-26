import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export type UpdateArgs<T> = {
  id: number;
  formData: T;
  tableName: string;
};

// Types for useGetData
type UseGetDataProps = {
  queryKey: string;
  getFun: (tableName: string) => Promise<any>;
  tableName?: string;
};

// Types for useAddData
type UseAddDataProps<T> = {
  mutationKey: string;
  addFun: ({ tableName, formData }: { tableName: string; formData: T }) => Promise<T[]>;
  queryKey: string;
  tableName: string;
  message: { onError: string; onSuccess: string };
};

// Types for useUpdateData
type UseUpdateDataProps<T> = {
  mutationKey: string;
  updateFun: ({ tableName, id, formData }: { tableName: string; id: number; formData: T }) => Promise<T[]>;
  queryKey: string;
  message: { onSuccessUpdate: string };
};

// Types for useDeleteData
type UseDeleteDataProps = {
  mutationKey: string;
  deleteFun: (id: number, tableName: string) => Promise<void>;
  queryKey: string;
  tableName: string;
  message: { onSuccessDelete: string };
};

export const useGetData = <T>({ queryKey, getFun, tableName }: UseGetDataProps) => {
  const { data, isLoading, isError, isPending } = useQuery({
    queryKey,
    queryFn: () => {
      return getFun(tableName);
    },
    staleTime: 60 * 1000,
    cacheTime: 5 * 60 * 1000,
  });

  return { data, isLoading, isError, isPending };
};

export const useAddData = <T>({ mutationKey, addFun, queryKey, tableName, message }: UseAddDataProps<T>) => {
  const queryClient = useQueryClient();

  const {
    mutate: add,
    mutateAsync: addAsync,
    isPending: isAdding,
    error: addError,
    isError: isAddError,
    reset: resetAdd,
  } = useMutation({
    mutationKey: [mutationKey],
    mutationFn: ({ formData }: UpdateArgs<T>) => {
      return addFun({ formData, tableName });
    },
    onError: () => {
      toast.error(message.onError);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast.success(message.onSuccess);
    },
  });

  return { add, addAsync, isAdding, addError, isAddError, resetAdd };
};

export const useUpdateData = <T>({ mutationKey, updateFun, queryKey, message }: UseUpdateDataProps<T>) => {
  const queryClient = useQueryClient();

  const {
    mutate: update,
    mutateAsync: updateAsync,
    isPending: isUpdating,
    error: updateError,
    isError: isUpdateError,
    reset: resetUpdate,
  } = useMutation({
    mutationKey: [mutationKey],
    mutationFn: ({ id, formData }: UpdateArgs<T>) => {
      return updateFun({ tableName: queryKey, id, formData });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast.success(message.onSuccessUpdate);
    },
  });

  return { update, updateAsync, isUpdating, updateError, isUpdateError, resetUpdate };
};

export const useDeleteData = ({ mutationKey, deleteFun, queryKey, tableName, message }: UseDeleteDataProps) => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteItem,
    isPending: isDeleting,
    error: deleteError,
    isError: isDeleteError,
    reset: resetDelete,
  } = useMutation({
    mutationKey: [mutationKey],
    mutationFn: (id: number) => deleteFun({ tableName, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast.success(message.onSuccessDelete);
    },
  });

  return { deleteItem, isDeleting, deleteError, isDeleteError, resetDelete };
};
