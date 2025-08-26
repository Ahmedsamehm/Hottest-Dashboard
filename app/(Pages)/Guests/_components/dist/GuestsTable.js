"use strict";
exports.__esModule = true;
var avatar_1 = require("@/app/components/shared/ui/avatar");
var badge_1 = require("@/app/components/shared/ui/badge");
var table_1 = require("@/app/components/shared/ui/table");
var TableMenu_1 = require("@/app/components/TableMenu");
var react_1 = require("react");
var DropDownMenu_1 = require("@/app/components/DropDownMenu");
var useDeleteGuest_1 = require("../_hooks/useDeleteGuest");
var SkeletonComponent_1 = require("@/app/components/SkeletonComponent");
// Table column headers
var TableHeadTitles = ["ID", "Guest", "Contact", "Nationality", "National ID", "VIP", "Actions"];
var GuestsTable = function (_a) {
    "use memo";
    var Guests = _a.Guests, isLoading = _a.isLoading;
    var _b = useDeleteGuest_1["default"](), deleteItem = _b.deleteItem, isDeleting = _b.isDeleting;
    if (isLoading)
        return react_1["default"].createElement(SkeletonComponent_1["default"], null);
    return (react_1["default"].createElement("div", { className: "max-h-[50vh] overflow-y-auto" },
        react_1["default"].createElement(TableMenu_1["default"], { TableHeadTitles: TableHeadTitles, tableName: "Guests", tableDescription: "Showing 5 of 5 guests" },
            react_1["default"].createElement(table_1.TableBody, null, Guests === null || Guests === void 0 ? void 0 : Guests.map(function (guest) { return (react_1["default"].createElement(table_1.TableRow, { key: guest.id, className: "" },
                react_1["default"].createElement(table_1.TableCell, { className: "font-medium " }, guest.id),
                react_1["default"].createElement(table_1.TableCell, null,
                    react_1["default"].createElement("div", { className: "flex items-center gap-3" },
                        react_1["default"].createElement(avatar_1.Avatar, { className: "size-8 border border-gray-200" },
                            react_1["default"].createElement(avatar_1.AvatarFallback, { className: "bg-blue-100 text-blue-600 text-xs" }, guest.fullName
                                .split(" ")
                                .map(function (n) { return n[0]; })
                                .join(""))),
                        react_1["default"].createElement("span", { className: "font-medium " }, guest.fullName))),
                react_1["default"].createElement(table_1.TableCell, null,
                    react_1["default"].createElement("div", { className: "space-y-1" },
                        react_1["default"].createElement("div", { className: "text-sm " }, guest.email),
                        react_1["default"].createElement("div", { className: "text-sm " }, guest.phone))),
                react_1["default"].createElement(table_1.TableCell, null, guest.nationality),
                react_1["default"].createElement(table_1.TableCell, null, guest.nationalID),
                react_1["default"].createElement(table_1.TableCell, null, guest.vip ? react_1["default"].createElement(badge_1.Badge, { className: "bg-purple-200 text-purple-600" }, "VIP") : react_1["default"].createElement(badge_1.Badge, { variant: "secondary" }, "Regular")),
                react_1["default"].createElement(table_1.TableCell, null,
                    react_1["default"].createElement(DropDownMenu_1.DropDownMenu, { Delete: function () { return deleteItem(guest === null || guest === void 0 ? void 0 : guest.id); }, isDeleting: isDeleting, id: guest === null || guest === void 0 ? void 0 : guest.id })))); })))));
};
exports["default"] = GuestsTable;
