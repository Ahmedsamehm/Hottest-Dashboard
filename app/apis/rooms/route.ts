import { createClient } from "@/lib/supabase/server";

import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  const { data: rooms, error } = await supabase.rpc("get_available_rooms_simple");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  return NextResponse.json(rooms, { status: 200 });
}
