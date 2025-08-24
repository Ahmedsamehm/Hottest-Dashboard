import { createClient } from "@/lib/supabase/server";

const BookingRepository = async (page: number, pageSize: number, search?: string, filter?: string) => {
  const supabase = await createClient();
  let query;

  if (search && search.trim() !== "") {
    query = supabase.from("booking_with_guest").select("*", { count: "exact" }).ilike("fullName", `%${search}%`).order("id", { ascending: true });
  } else {
    query = supabase.from("Booking").select(`*,guest:Guests(fullName, email, phone)`, { count: "exact" }).order("id", { ascending: true });
  }

  if (filter) {
    query = supabase.from("Booking").select(`*,guest:Guests(fullName, email, phone)`, { count: "exact" }).eq("status", filter).order("id", { ascending: true });
  }
  if (page && pageSize) {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;
  if (error) throw new Error(error.message);
  return { data: data ?? [], count, error };
};

export default BookingRepository;
