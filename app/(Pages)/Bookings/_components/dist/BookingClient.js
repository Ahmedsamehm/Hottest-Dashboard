"use client";
"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
// UI Components
var StatsCards_1 = require("@/app/components/StatsCards");
var SearchAndFilter_1 = require("@/app/components/SearchAndFilter");
var Header_1 = require("@/app/components/Header");
var PaginationComponent_1 = require("@/app/components/PaginationComponent");
// Custom Hooks
var useFetchAllBookings_1 = require("../_hooks/useFetchAllBookings");
var usePagination_1 = require("@/app/components/usePagination");
// Data and Types
var bookingOptions_json_1 = require("@/app/data/bookingOptions.json");
var formComponent_1 = require("./formComponent");
var dashBoardContext_1 = require("@/app/context/dashBoardContext");
var BookingTable_1 = require("./BookingTable");
var BookingClient = function () {
    "use memo";
    var _a;
    var _b = dashBoardContext_1.useDashBoard(), filter = _b.filter, debouncedSearch = _b.debouncedSearch;
    var _c = usePagination_1["default"](), page = _c.page, pageSize = _c.pageSize;
    // --- Data Fetching & Mutations ---
    var _d = useFetchAllBookings_1["default"](page, pageSize, debouncedSearch, filter), bookings = _d.bookings, isPending = _d.isPending, getConfirmed = _d.getConfirmed, getPending = _d.getPending, getRevenue = _d.getRevenue, total = _d.total;
    // Stats data with theme-appropriate colors
    var stats = [
        {
            title: "Total Bookings",
            value: total,
            icon: lucide_react_1.Calendar,
            color: "text-blue-600 dark:text-blue-400",
            bgColor: "bg-blue-50 dark:bg-blue-950/30"
        },
        {
            title: "Confirmed",
            value: getConfirmed,
            icon: lucide_react_1.CheckCircle,
            color: "text-emerald-600 dark:text-emerald-400",
            bgColor: "bg-emerald-50 dark:bg-emerald-950/30"
        },
        {
            title: "Pending",
            value: getPending,
            icon: lucide_react_1.Clock,
            color: "text-amber-600 dark:text-amber-400",
            bgColor: "bg-amber-50 dark:bg-amber-950/30"
        },
        {
            title: "Revenue",
            value: getRevenue,
            icon: lucide_react_1.DollarSign,
            color: "text-green-600 dark:text-green-400",
            bgColor: "bg-green-50 dark:bg-green-950/30"
        },
    ];
    return (React.createElement("div", { className: "flex flex-col min-h-screen bg-background " },
        React.createElement(Header_1["default"], { tableName: "Bookings", DescriptionTable: "Manage hotel reservations", displayButton: true, ButtonName: "New Booking", FormComponent: React.createElement(formComponent_1["default"], null) }),
        React.createElement("div", { className: "flex-1 space-y-6 p-6 " },
            React.createElement(StatsCards_1["default"], { stats: stats }),
            React.createElement(SearchAndFilter_1["default"], { filterOptions: bookingOptions_json_1["default"], placeholder: "Search by guest name", type: "text" }),
            React.createElement(BookingTable_1["default"], { bookings: (_a = bookings === null || bookings === void 0 ? void 0 : bookings.data) !== null && _a !== void 0 ? _a : [], isLoading: isPending }),
            React.createElement(PaginationComponent_1["default"], { fetchAction: bookings }))));
};
exports["default"] = BookingClient;
