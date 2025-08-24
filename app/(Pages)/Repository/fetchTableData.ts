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
    let query = supabase.from(tableName).select(`*`, { count: "exact" }).order("id", { ascending: true });

    if (search) {
      if (!isNaN(Number(search))) {
        query = query.eq("id", Number(search));
      } else {
        query = query.ilike("fullName", `%${search}%`);
      }
    }

    if (tableName === "Guests") {
      if (filter === "vip") {
        query = query.eq("vip", true);
      } else if (filter === "regular") {
        query = query.eq("vip", false);
      }
    } else {
      if (filter) {
        query = query.eq("status", filter);
      }
    }

    if (page && pageSize && page > 0 && pageSize > 0) {
      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;
      query = query.range(from, to);
    }

    const { data, error, count } = await query;
    if (error) throw new Error(error.message);

    return { data: data ?? [], error: null, count: count ?? 0 };
  } catch (error) {
    throw new Error("Error fetching table data");
  }
};

export default fetchTableData;
