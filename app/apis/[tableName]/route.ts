import fetchTableData from "@/app/(Pages)/Repository/fetchTableData";
import { createClient } from "@/lib/supabase/server";

import { NextResponse } from "next/server";
const ALLOWED = new Set(["Rooms", "Guests", "Booking"]);

// export async function GET(req: Request, { params }: any) {
//   const { tableName } = await params;
//   if (!ALLOWED.has(tableName)) {
//     return NextResponse.json({ error: "Forbidden table" }, { status: 403 });
//   }

//   const { searchParams } = new URL(req.url);

//   const page = Number(searchParams.get("page"));

//   const pageSize = Number(searchParams.get("pageSize"));
//   const search = searchParams.get("search") || "";
//   const filter = searchParams.get("filter") || "";

//   try {
//     const { data, error, count } = await fetchTableData({ page, pageSize, tableName, search, filter });

//     if (error) {
//       return NextResponse.json({ error }, { status: 400 });
//     }
//     return NextResponse.json({ data: data ?? [], error: null, count: count ?? 0 }, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
//   }
// }
// export async function POST(request: Request, { params }: any) {
//   const supabase = await createClient();
//   const requestBody = await request.json();
//   const tableName = params.tableName;

//   if (!ALLOWED.has(tableName)) {
//     return NextResponse.json({ error: "Forbidden table" }, { status: 403 });
//   }
//   try {
//     const { formData } = requestBody;
//     if (!requestBody) return;

//     const { data, error } = await supabase.from(tableName).insert(formData).select();
//     if (error) {
//       return NextResponse.json({ error: error.message }, { status: 400 });
//     }
//     return NextResponse.json(data, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
//   }
// }
// export async function PUT(request: Request, { params }: any) {
//   const { tableName } = params;
//   const supabase = await createClient();
//   const requestBody = await request.json();
//   if (!ALLOWED.has(tableName)) {
//     return NextResponse.json({ error: "Forbidden table" }, { status: 403 });
//   }
//   try {
//     const { formData, id } = requestBody;
//     if (!requestBody) return;

//     const { data, error } = await supabase.from(tableName).update(formData).eq("id", id).select();

//     if (error) {
//       return NextResponse.json({ error: error.message }, { status: 400 });
//     }
//     return NextResponse.json(data, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
//   }
// }

// export async function DELETE(request: Request, { params }: any) {
//   const supabase = await createClient();
//   const { tableName } = params;
//   if (!ALLOWED.has(tableName)) {
//     return NextResponse.json({ error: "Forbidden table" }, { status: 403 });
//   }
//   try {
//     const requestBody = await request.json();
//     if (!requestBody) return;

//     const { id } = requestBody;

//     const { error } = await supabase.from(tableName).delete().eq("id", id);
//     if (error) {
//       return NextResponse.json({ error: error.message }, { status: 400 });
//     }
//     return NextResponse.json({ status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
//   }
// }
