import { createClient } from "@/lib/supabase/server";

type Props = {
  page: number;
  pageSize: number;
  tableName: string;
  search?: string | number;
  filter?: string;
};
const fetchTableData = async ({ page, pageSize, tableName, search, filter }: Props) => {
  try {
    const supabase = await createClient();

    let query;

    if (tableName === "Booking") {
      // const selectStatement = search && search.trim() !== "" ? `*, guest:Guests!inner(fullName, email, phone)` : `*, guest:Guests(fullName, email, phone)`;

      // query = supabase.from("Booking").select(selectStatement, { count: "exact" }).order("id", { ascending: true });

      // if (search && search.trim() !== "") {
      //   query = query.ilike("guest.fullName", `%${search}%`);
      // }

      // if (filter && filter.trim() !== "") {
      //   query = query.eq("status", filter);
      // }
    } else if (tableName === "Guests") {
      query = supabase.from("Guests").select(`*`, { count: "exact" }).order("id", { ascending: true });

      if (search && search.trim() !== "") {
        query = query.ilike("fullName", `%${search}%`);
      }

      if (filter === "vip") {
        query = query.eq("vip", true);
      } else if (filter === "regular") {
        query = query.eq("vip", false);
      }
    } else if (tableName === "Rooms") {
      query = supabase.from("Rooms").select(`*`, { count: "exact" }).order("id", { ascending: true });

      if (search && search.trim() !== "") {
        query = query.ilike("name", `%${search}%`);
      }

      if (filter && filter.trim() !== "") {
        query = query.eq("status", filter);
      }
    } else {
      return { data: [], error: "Invalid table name", count: 0 };
    }

    // pagination
    if (page && pageSize && page > 0 && pageSize > 0) {
      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;
      query = query.range(from, to);
    }

    const { data, error, count } = await query;

    if (error) throw new Error(error.message);

    return { data: data ?? [], error: null, count: count ?? 0 };
  } catch (err: any) {
    return { data: [], error: err.message || "Unexpected error occurred", count: 0 };
  }
};

export default fetchTableData;
