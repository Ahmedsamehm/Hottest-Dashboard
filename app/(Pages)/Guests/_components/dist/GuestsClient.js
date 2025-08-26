"use client";
"use strict";
exports.__esModule = true;
var Header_1 = require("@/app/components/Header");
var SearchAndFilter_1 = require("@/app/components/SearchAndFilter");
var StatsCards_1 = require("@/app/components/StatsCards");
var dashBoardContext_1 = require("@/app/context/dashBoardContext");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var useFetchGuests_1 = require("../_hooks/useFetchGuests");
var PaginationComponent_1 = require("@/app/components/PaginationComponent");
var guestOptions_json_1 = require("@/app/data/guestOptions.json");
var usePagination_1 = require("@/app/components/usePagination");
var FormComponent_1 = require("./FormComponent");
var GuestsTable_1 = require("./GuestsTable");
var GuestsClient = function () {
    "use memo";
    var _a = dashBoardContext_1.useDashBoard(), debouncedSearch = _a.debouncedSearch, filter = _a.filter;
    var _b = usePagination_1["default"](), page = _b.page, pageSize = _b.pageSize;
    var _c = useFetchGuests_1["default"](page, pageSize, debouncedSearch, filter), Guests = _c.Guests, total = _c.total, isVip = _c.isVip, isPending = _c.isPending;
    var stats = [
        {
            title: "Total Guests",
            value: total,
            subtitle: "All registered guests",
            icon: lucide_react_1.Users,
            color: "text-blue-600 dark:text-blue-400",
            bgColor: "bg-blue-50 dark:bg-blue-950/30"
        },
        {
            title: "VIP Guests",
            value: isVip,
            subtitle: "Premium members",
            icon: lucide_react_1.Star,
            color: "text-emerald-600 dark:text-emerald-400",
            bgColor: "bg-emerald-50 dark:bg-emerald-950/30"
        },
    ];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Header_1["default"], { tableName: "Guests", ButtonName: "Add Guest", DescriptionTable: "Manage guest profiles and preferences", icon: react_1["default"].createElement(lucide_react_1.Plus, { className: "size-4" }), displayButton: true, FormComponent: react_1["default"].createElement(FormComponent_1["default"], null) }),
        react_1["default"].createElement("div", { className: "flex-1 space-y-6 p-6 bg-background" },
            react_1["default"].createElement(StatsCards_1["default"], { stats: stats }),
            react_1["default"].createElement(SearchAndFilter_1["default"], { filterOptions: guestOptions_json_1["default"], type: "text", placeholder: "Search by guest name" }),
            react_1["default"].createElement(GuestsTable_1["default"], { Guests: (Guests === null || Guests === void 0 ? void 0 : Guests.data) || [], isLoading: isPending }),
            react_1["default"].createElement(PaginationComponent_1["default"], { fetchAction: Guests }))));
};
exports["default"] = GuestsClient;
