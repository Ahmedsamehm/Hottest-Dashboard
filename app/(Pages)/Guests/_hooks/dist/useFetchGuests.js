"use strict";
exports.__esModule = true;
var useQuery_1 = require("@/hooks/useQuery");
var crudService_1 = require("@/hooks/crudService");
var useCalculation_1 = require("@/hooks/useCalculation");
var react_query_1 = require("@tanstack/react-query");
var react_1 = require("react");
var useFetchGuests = function (page, pageSize, search, filter) {
    "use memo";
    var queryClient = react_query_1.useQueryClient();
    var queryKey, prefetchKey;
    if (page != null) {
        if (search === "" && filter === "") {
            queryKey = ["Guests", page];
            prefetchKey = ["Guests", page + 1];
        }
        else {
            queryKey = ["Guests", page, search, filter];
            prefetchKey = ["Guests", page + 1, search, filter];
        }
    }
    else {
        queryKey = ["Guests"];
        prefetchKey = ["Guests"];
    }
    var _a = useQuery_1.useGetData({
        queryKey: queryKey,
        getFun: function () { return crudService_1.GetAllData({ tableName: "Guests", page: page, pageSize: pageSize, search: search, filter: filter }); },
        tableName: "Guests"
    }), Guests = _a.data, isLoading = _a.isLoading, isPending = _a.isPending;
    react_1.useEffect(function () {
        if (page != null) {
            queryClient.prefetchQuery({
                queryKey: prefetchKey,
                queryFn: function () { return crudService_1.GetAllData({ tableName: "Guests", page: page + 1, pageSize: pageSize, search: search, filter: filter }); }
            });
        }
    }, [page, queryClient]);
    var _b = useCalculation_1["default"](Guests), isVip = _b.isVip, total = _b.total;
    return { Guests: Guests, isLoading: isLoading, isVip: isVip, total: total, isPending: isPending };
};
exports["default"] = useFetchGuests;
