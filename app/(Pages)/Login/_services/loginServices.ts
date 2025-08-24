import axios from "axios";

export const getUser = async () => {
  const { data } = await axios.get("/apis/auth");

  return { data: data ?? [] };
};

export const LoginServices = async ({ email, password }: { email: string; password: string }) => {
  const { data } = await axios.post("/apis/auth", { email, password });

  return { data: data ?? [] };
};

export const LogoutServices = async () => {
  const { data } = await axios.delete("/apis/auth");

  return { data: data ?? [] };
};
