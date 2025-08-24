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

// export async function POST(req: Request) {
//   const supabase = await createClient();
//   const requestBody = await req.json();
//   const { formData } = requestBody;
//   if (!requestBody) return;
//   console.log(formData);

//   const { data, error } = await supabase.from("Rooms").insert(formData).select();

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
//   return NextResponse.json(data, { status: 200 });
// }

// export async function PUT(req: Request) {
//   const supabase = await createClient();
//   const requestBody = await req.json();
//   const { formData, id } = requestBody;
//   if (!requestBody) return;

//   const { data, error } = await supabase.from("Rooms").update(formData).eq("id", id).select();

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
//   return NextResponse.json(data, { status: 200 });
// }
// export async function DELETE(request: Request) {
//   const supabase = await createClient();
//   const requestBody = await request.json();
//   if (!requestBody) return;

//   const { id } = requestBody;
//   console.log(id);

//   const { error } = await supabase.from("Rooms").delete().eq("id", id);
//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
//   return NextResponse.json({ status: 200 });
// }
