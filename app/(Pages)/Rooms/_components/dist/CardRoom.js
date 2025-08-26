"use client";
"use strict";
exports.__esModule = true;
var card_1 = require("@/app/components/shared/ui/card");
var dashBoardContext_1 = require("@/app/context/dashBoardContext");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var badge_1 = require("@/app/components/shared/ui/badge");
var useDeleteRoom_1 = require("../_hooks/useDeleteRoom");
var DropDownMenu_1 = require("@/app/components/DropDownMenu");
var SkeletonComponent_1 = require("@/app/components/SkeletonComponent");
var CardRoom = function (_a) {
    "use memo";
    var Rooms = _a.Rooms, isPending = _a.isPending;
    var _b = dashBoardContext_1.useDashBoard(), getStatusColor = _b.getStatusColor, getAmenityIcon = _b.getAmenityIcon;
    var _c = useDeleteRoom_1["default"](), deleteItem = _c.deleteItem, isDeleting = _c.isDeleting;
    if (isPending)
        return react_1["default"].createElement(SkeletonComponent_1["default"], null);
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto  max-h-[70vh] overflow-y-auto  " }, Rooms === null || Rooms === void 0 ? void 0 : Rooms.map(function (room) { return (react_1["default"].createElement(card_1.Card, { key: room.id, className: " light:border-gray-300 " },
            react_1["default"].createElement(card_1.CardHeader, { className: "pb-4" },
                react_1["default"].createElement("div", { className: "flex items-start justify-between" },
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(card_1.CardTitle, { className: "text-lg font-semibold " }, room.name),
                        react_1["default"].createElement("div", { className: "flex items-center gap-2 mt-1" },
                            react_1["default"].createElement("span", { className: "text-sm " },
                                "Room ",
                                room.id),
                            react_1["default"].createElement("span", { className: "text-sm " }, "\u2022"),
                            react_1["default"].createElement("span", { className: "text-sm " },
                                "Floor ",
                                room.floor))),
                    react_1["default"].createElement(DropDownMenu_1.DropDownMenu, { Delete: function () { return deleteItem(room === null || room === void 0 ? void 0 : room.id); }, isDeleting: isDeleting, id: room.id })),
                react_1["default"].createElement("div", { className: "flex items-center justify-between mt-4" },
                    react_1["default"].createElement(badge_1.Badge, { className: getStatusColor(room === null || room === void 0 ? void 0 : room.status) }, room.status),
                    react_1["default"].createElement("div", { className: "text-right" },
                        react_1["default"].createElement("div", { className: "text-2xl font-bold " },
                            "$",
                            room.price),
                        react_1["default"].createElement("div", { className: "text-sm " }, "per night")))),
            react_1["default"].createElement(card_1.CardContent, { className: "space-y-4" },
                react_1["default"].createElement("div", { className: "flex items-center gap-2" },
                    react_1["default"].createElement(lucide_react_1.Bed, { className: "size-4 " }),
                    react_1["default"].createElement("span", { className: "text-sm " }, room.type)),
                react_1["default"].createElement("div", { className: "flex items-center gap-2" },
                    react_1["default"].createElement(lucide_react_1.Users, { className: "size-4 " }),
                    react_1["default"].createElement("span", { className: "text-sm " },
                        "Up to ",
                        room.capacity,
                        " guests")),
                react_1["default"].createElement("p", { className: "text-sm " }, room.description),
                react_1["default"].createElement("div", { className: "flex gap-2" }, Object.entries(room.amenities || {})
                    .filter(function (_a) {
                    var value = _a[1];
                    return !!value;
                })
                    .map(function (_a) {
                    var key = _a[0];
                    return (react_1["default"].createElement("div", { key: key, className: "flex items-center gap-1" }, getAmenityIcon(key)));
                })),
                react_1["default"].createElement("div", { className: "text-xs  pt-2 border-t border-gray-100" },
                    "Last cleaned: ",
                    room.lastCleaned)))); }))));
};
exports["default"] = CardRoom;
