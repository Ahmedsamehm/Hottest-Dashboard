function useCalculation<T extends { status?: string; price?: number | undefined; vip?: boolean }>(list?: T[]) {
  "use memo";
  if (!list) list = [];

  console.log(list);

  const total = list?.count ?? 0;
  const getList = list?.data ?? [];

  const getConfirmed = getList?.filter((s) => s?.status === "confirmed").length;

  const getPending = getList.filter((s) => s.status === "pending").length;
  const getRevenue = getList.reduce((sum, s) => sum + (s.price ?? 0), 0);
  const avg = getList.length ? getRevenue / getList.length : 0;
  const getAvgRate = Number(avg.toFixed(1));
  const isVip = getList.filter((s) => s.vip === true).length;
  const getAvailableRooms = getList.filter((s) => s.status === "available").length;
  const getOccupiedRooms = getList.filter((s) => s.status === "occupied").length;
  const getMaintenance = getList.filter((s) => s.status === "maintenance").length;

  return { getConfirmed, getPending, getRevenue, total, getAvgRate, getAvailableRooms, getOccupiedRooms, isVip, getMaintenance };
}

export default useCalculation;
