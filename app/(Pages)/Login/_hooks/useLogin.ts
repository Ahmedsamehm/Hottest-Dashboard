import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getUser, LoginServices, LogoutServices } from "../_services/loginServices";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useGetUser = () => {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return getUser();
    },
  });
  return { user, isPending };
};

export const useLogin = () => {
  const QueryClient = useQueryClient();
  const router = useRouter();
  const {
    mutate: Login,
    isPending,
    isError,
    error,
  } = useMutation({
    queryKey: ["user"],
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return LoginServices({ email, password });
    },
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Login Success");
      router.push("/");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Login Failed");
    },
  });
  return { Login, isPending, isError, error };
};

export const useLogout = () => {
  const QueryClient = useQueryClient();
  const router = useRouter();
  const {
    mutate: Logout,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: () => {
      return LogoutServices();
    },
    onSuccess: () => {
      QueryClient.clear();
      toast.success("Logout Success");

      router.push("/Login");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Logout Failed");
    },
  });
  return { Logout, isPending, isError, error };
};
