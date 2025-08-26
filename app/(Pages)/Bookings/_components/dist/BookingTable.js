"use strict";
exports.__esModule = true;
var table_1 = require("@/app/components/shared/ui/table");
var TableMenu_1 = require("@/app/components/TableMenu");
var react_1 = require("react");
var badge_1 = require("@/app/components/shared/ui/badge");
var useDeleteBooking_1 = require("../_hooks/useDeleteBooking");
var dashBoardContext_1 = require("@/app/context/dashBoardContext");
var DropDownMenu_1 = require("@/app/components/DropDownMenu");
var SkeletonComponent_1 = require("@/app/components/SkeletonComponent");
var BookingTable = function (_a) {
    "use memo";
    var bookings = _a.bookings, isLoading = _a.isLoading;
    var TableHeadTitles = ["BookingID", "Guest", "Contact", "Room", "Check-in", "Check-out", "Nights", "Amount", "Status", "Actions"];
    var getStatusColor = dashBoardContext_1.useDashBoard().getStatusColor;
    var _b = useDeleteBooking_1["default"](), deleteItem = _b.deleteItem, isDeleting = _b.isDeleting;
    if (isLoading)
        return react_1["default"].createElement(SkeletonComponent_1["default"], null);
    return (react_1["default"].createElement("div", { className: "max-h-[50vh] overflow-y-auto" },
        react_1["default"].createElement(TableMenu_1["default"], { TableHeadTitles: TableHeadTitles, tableName: "Bookings", tableDescription: "Showing bookings from example table" }, (bookings === null || bookings === void 0 ? void 0 : bookings.length) === 0 ? (react_1["default"].createElement(table_1.TableBody, null,
            react_1["default"].createElement(table_1.TableRow, null,
                react_1["default"].createElement(table_1.TableCell, { colSpan: 9, className: "h-24 text-center font-bold text-xl text-foreground" }, "No bookings available")))) : (react_1["default"].createElement(table_1.TableBody, null, bookings === null || bookings === void 0 ? void 0 : bookings.map(function (list) {
            var _a, _b, _c;
            return (react_1["default"].createElement(table_1.TableRow, { key: list.id, className: "border-border" },
                react_1["default"].createElement(table_1.TableCell, { className: "font-medium text-foreground" },
                    "BK",
                    list.id),
                react_1["default"].createElement(table_1.TableCell, null,
                    react_1["default"].createElement("div", { className: "flex items-center w-fit" },
                        react_1["default"].createElement("p", { className: "text-sm w-fit bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-md" }, ((_a = list === null || list === void 0 ? void 0 : list.guest) === null || _a === void 0 ? void 0 : _a.fullName) || (list === null || list === void 0 ? void 0 : list.fullName)))),
                react_1["default"].createElement(table_1.TableCell, null,
                    react_1["default"].createElement("div", { className: "space-y-1" },
                        react_1["default"].createElement("div", { className: "text-sm text-foreground" }, ((_b = list === null || list === void 0 ? void 0 : list.guest) === null || _b === void 0 ? void 0 : _b.email) || (list === null || list === void 0 ? void 0 : list.email)),
                        react_1["default"].createElement("div", { className: "text-sm text-foreground" }, ((_c = list === null || list === void 0 ? void 0 : list.guest) === null || _c === void 0 ? void 0 : _c.phone) || (list === null || list === void 0 ? void 0 : list.phone)))),
                react_1["default"].createElement(table_1.TableCell, { className: "font-medium text-foreground" }, list.roomId),
                react_1["default"].createElement(table_1.TableCell, { className: "text-foreground" }, list.checkin),
                react_1["default"].createElement(table_1.TableCell, { className: "text-foreground" }, list.checkout),
                react_1["default"].createElement(table_1.TableCell, { className: "text-foreground" }, list.nights),
                react_1["default"].createElement(table_1.TableCell, { className: "font-medium text-foreground" },
                    "$",
                    list.price),
                react_1["default"].createElement(table_1.TableCell, null,
                    react_1["default"].createElement(badge_1.Badge, { variant: "outline", className: "capitalize border " + getStatusColor(list.status) }, list.status)),
                react_1["default"].createElement(table_1.TableCell, null,
                    react_1["default"].createElement(DropDownMenu_1.DropDownMenu, { id: list === null || list === void 0 ? void 0 : list.id, isDeleting: isDeleting, Delete: function () { return deleteItem(list === null || list === void 0 ? void 0 : list.id); } }))));
        }))))));
};
exports["default"] = BookingTable;
