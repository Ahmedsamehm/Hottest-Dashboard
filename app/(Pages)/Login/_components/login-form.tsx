"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/app/components/shared/ui//button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/shared/ui//card";
import { Input } from "@/app/components/shared/ui//input";
import { Label } from "@/app/components/shared/ui//label";

import { SubmitHandler, useForm } from "react-hook-form";
import { useLogin } from "../_hooks/useLogin";

type LoginForm = {
  email: string;
  password: string;
};
export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const { Login, isPending, isError, error } = useLogin();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "test@test.com",
      password: "test",
    },
  });

  const onSubmit: SubmitHandler<any> = (formData: LoginForm) => {
    Login(formData);
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">email</Label>
                <Input id="email" type="text" {...register("email", { required: true })} />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" {...register("password", { required: true })} />
              </div>
              {isError ? <p className="text-red-600">{error?.response?.data.error}</p> : null}
              <div className="flex flex-col gap-3">
                <Button disabled={isPending} type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
