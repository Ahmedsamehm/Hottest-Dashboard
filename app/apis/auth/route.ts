import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
  return new NextResponse(JSON.stringify(user), { status: 200 });
};

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const supabase = await createClient();
  const cookie = await cookies();
  const { email, password } = await req.json();

  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return new NextResponse(JSON.stringify({ error: "wrong password or email" }), { status: 400 });
  }

  const userToken = data?.session?.access_token;
  if (userToken) {
    cookie.set("auth-token", userToken);
  }

  return new NextResponse(JSON.stringify(data), { status: 200 });
};
export const DELETE = async () => {
  const supabase = await createClient();
  const cookie = await cookies();

  let { error } = await supabase.auth.signOut();

  if (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }

  // Clear the auth-token cookie
  cookie.delete("auth-token");

  return new NextResponse(JSON.stringify({ message: "Logged out successfully" }), {
    status: 200,
  });
};
