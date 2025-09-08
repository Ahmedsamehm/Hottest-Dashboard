import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const supabase = await createClient();

  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 10;
  const search = searchParams.get("search") || "";
  const filter = searchParams.get("filter") || "";

  try {
    let query = supabase.from("Guests").select("*", { count: "exact" }).order("id", { ascending: true });

    // Apply search filter
    if (search && search.trim() !== "") {
      query = query.ilike("fullName", `%${search}%`);
    }

    // Apply VIP filter
    if (filter === "vip") {
      query = query.eq("vip", true);
    } else if (filter === "regular") {
      query = query.eq("vip", false);
    }

    // Apply pagination
    if (page && pageSize && page > 0 && pageSize > 0) {
      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;
      query = query.range(from, to);
    }

    const { data: Guests, error, count } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      {
        data: Guests ?? [],
        error: null,
        count: count ?? 0,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message || "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const supabase = await createClient();
  const requestBody = await request.json();

  try {
    const { formData } = requestBody;
    if (!requestBody) return;

    const { data, error } = await supabase.from("Guests").insert(formData).select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const supabase = await createClient();
  const requestBody = await request.json();

  try {
    const { formData, id } = requestBody;
    if (!requestBody) return;

    const { data, error } = await supabase.from("Guests").update(formData).eq("id", id).select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const supabase = await createClient();

  try {
    const requestBody = await request.json();
    if (!requestBody) return;

    const { id } = requestBody;

    const { error } = await supabase.from("Guests").delete().eq("id", id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
