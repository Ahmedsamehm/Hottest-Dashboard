import BookingRepository from "@/app/(Pages)/Bookings/Repository/bookingRepository";

import { NextResponse } from "next/server";
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page"));

  const pageSize = Number(searchParams.get("pageSize"));
  const search = searchParams.get("search") || "";
  const filter = searchParams.get("filter") || "";

  try {
    const { data, error, count } = await BookingRepository(page, pageSize, search, filter);

    return NextResponse.json({ data, error, count }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Something went wrong" }, { status: 400 });
  }
}

// export async function POST(request: Request) {
//   const supabase = await createClient();
//   const requestBody = await request.json();
//   const { formData } = requestBody;
//   if (!requestBody) return;

//   const { data, error } = await supabase.from("Booking").insert(formData).select();

//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
//   return NextResponse.json(data, { status: 200 });
// }

// export async function PUT(request: Request) {
//   const supabase = await createClient();
//   const requestBody = await request.json();
//   const { formData, id } = requestBody;
//   if (!requestBody) return;

//   const { data, error } = await supabase.from("Booking").update(formData).eq("id", id).select();

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
//   const { error } = await supabase.from("Booking").delete().eq("id", id);
//   if (error) {
//     return NextResponse.json({ error: error.message }, { status: 400 });
//   }
//   return NextResponse.json({ status: 200 });
// }
