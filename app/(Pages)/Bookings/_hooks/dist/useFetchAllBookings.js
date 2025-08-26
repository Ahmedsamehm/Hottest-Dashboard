"use strict";
exports.__esModule = true;
var useQuery_1 = require("@/hooks/useQuery");
var useCalculation_1 = require("@/hooks/useCalculation");
var react_query_1 = require("@tanstack/react-query");
var react_1 = require("react");
var crudService_1 = require("@/hooks/crudService");
var useFetchAllBookings = function (page, pageSize, search, filter) {
    var queryClient = react_query_1.useQueryClient();
    var queryKey, prefetchKey;
    if (page != null) {
        if (search === "" && filter === "") {
            queryKey = ["Booking", page];
            prefetchKey = ["Booking", page + 1];
        }
        else {
            queryKey = ["Booking", page, search, filter];
            prefetchKey = ["Booking", page + 1, search, filter];
        }
    }
    else {
        queryKey = ["Booking"];
        prefetchKey = ["Booking"];
    }
    var _a = useQuery_1.useGetData({
        queryKey: queryKey,
        getFun: function () { return crudService_1.GetAllData({ tableName: "Booking", page: page, pageSize: pageSize, search: search, filter: filter }); },
        page: page,
        search: search,
        tableName: "Booking"
    }), bookings = _a.data, isLoading = _a.isLoading, isPending = _a.isPending;
    react_1.useEffect(function () {
        queryClient.prefetchQuery({
            queryKey: prefetchKey,
            queryFn: function () { return crudService_1.GetAllData({ tableName: "Booking", page: page + 1, pageSize: pageSize, search: search, filter: filter }); }
        });
    }, [page, queryClient]);
    var _b = useCalculation_1["default"](bookings), getConfirmed = _b.getConfirmed, getPending = _b.getPending, getRevenue = _b.getRevenue, total = _b.total;
    return { bookings: bookings, isLoading: isLoading, getConfirmed: getConfirmed, getPending: getPending, getRevenue: getRevenue, total: total, isPending: isPending };
};
exports["default"] = useFetchAllBookings;
