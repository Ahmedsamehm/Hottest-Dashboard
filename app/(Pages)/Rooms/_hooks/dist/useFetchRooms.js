"use strict";
exports.__esModule = true;
var useQuery_1 = require("@/hooks/useQuery");
var crudService_1 = require("@/hooks/crudService");
var useCalculation_1 = require("@/hooks/useCalculation");
var react_query_1 = require("@tanstack/react-query");
var react_1 = require("react");
var useFetchRooms = function (page, pageSize, search, filter) {
    var queryClient = react_query_1.useQueryClient();
    var queryKey, prefetchKey;
    if (page != null) {
        if (search === "" && filter === "") {
            queryKey = ["Rooms", page];
            prefetchKey = ["Rooms", page + 1];
        }
        else {
            queryKey = ["Rooms", page, search, filter];
            prefetchKey = ["Rooms", page + 1, search, filter];
        }
    }
    else {
        queryKey = ["Rooms"];
        prefetchKey = ["Rooms"];
    }
    var _a = useQuery_1.useGetData({
        queryKey: queryKey,
        getFun: function (tableName) { return crudService_1.GetAllData({ tableName: tableName, page: page, pageSize: pageSize, search: search, filter: filter }); },
        tableName: "Rooms"
    }), Rooms = _a.data, isLoading = _a.isLoading, isError = _a.isError, isPending = _a.isPending;
    react_1.useEffect(function () {
        queryClient.prefetchQuery({
            queryKey: prefetchKey,
            queryFn: function () { return crudService_1.GetAllData({ tableName: "Rooms", page: page + 1, pageSize: pageSize, search: search, filter: filter }); }
        });
    }, [page, queryClient]);
    var _b = useCalculation_1["default"](Rooms !== null && Rooms !== void 0 ? Rooms : []), getAvailableRooms = _b.getAvailableRooms, getOccupiedRooms = _b.getOccupiedRooms, total = _b.total, getAvgRate = _b.getAvgRate, getRevenue = _b.getRevenue, getMaintenance = _b.getMaintenance;
    return { Rooms: Rooms, isLoading: isLoading, isError: isError, getAvailableRooms: getAvailableRooms, getOccupiedRooms: getOccupiedRooms, total: total, getAvgRate: getAvgRate, getRevenue: getRevenue, getMaintenance: getMaintenance, isPending: isPending };
};
exports["default"] = useFetchRooms;
