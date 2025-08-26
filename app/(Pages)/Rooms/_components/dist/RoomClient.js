"use client";
"use strict";
exports.__esModule = true;
var SearchAndFilter_1 = require("@/app/components/SearchAndFilter");
var StatsCards_1 = require("@/app/components/StatsCards");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var Header_1 = require("@/app/components/Header");
var dashBoardContext_1 = require("@/app/context/dashBoardContext");
var useFetchRooms_1 = require("../_hooks/useFetchRooms");
var PaginationComponent_1 = require("@/app/components/PaginationComponent");
var roomOptions_json_1 = require("@/app/data/roomOptions.json");
var usePagination_1 = require("@/app/components/usePagination");
var formComponent_1 = require("./formComponent");
var CardRoom_1 = require("./CardRoom");
var RoomClient = function () {
    "use memo";
    var _a = dashBoardContext_1.useDashBoard(), filter = _a.filter, debouncedSearch = _a.debouncedSearch;
    var _b = usePagination_1["default"](), page = _b.page, pageSize = _b.pageSize;
    var _c = useFetchRooms_1["default"](page, pageSize, debouncedSearch, filter), Rooms = _c.Rooms, isLoading = _c.isLoading, getAvailableRooms = _c.getAvailableRooms, getOccupiedRooms = _c.getOccupiedRooms, total = _c.total, getAvgRate = _c.getAvgRate, isPending = _c.isPending;
    // Define stats cards data
    var stats = [
        { title: "Total Rooms", value: total, subtitle: "All room inventory", icon: lucide_react_1.Bed, color: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-950/30" },
        { title: "Available", value: getAvailableRooms, subtitle: "Ready for guests", icon: lucide_react_1.Bed, color: "text-emerald-600 dark:text-emerald-400", bgColor: "bg-emerald-50 dark:bg-emerald-950/30" },
        { title: "Occupied", value: getOccupiedRooms, subtitle: "Currently in use", icon: lucide_react_1.Users, color: "text-amber-600 dark:text-amber-400", bgColor: "bg-amber-50 dark:bg-amber-950/30" },
        { title: "Avg. Rate", value: getAvgRate, subtitle: "Per night average", icon: lucide_react_1.Bed, color: "text-green-600 dark:text-green-400", bgColor: "bg-green-50 dark:bg-green-950/30" },
    ];
    // Show loading state while data is being fetched
    // if (isLoading) return <Loading />;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Header_1["default"], { tableName: "Rooms", ButtonName: "Add Room", DescriptionTable: "Manage hotel rooms and availability", icon: react_1["default"].createElement(lucide_react_1.Plus, { className: "mr-2 size-4" }), displayButton: true, FormComponent: react_1["default"].createElement(formComponent_1["default"], null) }),
        react_1["default"].createElement("div", { className: "flex-1 space-y-6 p-6 bg-background" },
            react_1["default"].createElement(StatsCards_1["default"], { stats: stats }),
            react_1["default"].createElement(SearchAndFilter_1["default"], { filterOptions: roomOptions_json_1["default"], placeholder: "Search by room name", type: "text" }),
            react_1["default"].createElement(CardRoom_1["default"], { Rooms: (Rooms === null || Rooms === void 0 ? void 0 : Rooms.data) || [], isPending: isPending }),
            react_1["default"].createElement(PaginationComponent_1["default"], { fetchAction: Rooms }))));
};
exports["default"] = RoomClient;
