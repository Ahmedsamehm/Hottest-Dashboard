"use memo";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.RoomsForm = void 0;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var lucide_react_1 = require("lucide-react");
var label_1 = require("@/app/components/shared/ui/label");
var input_1 = require("@/app/components/shared/ui/input");
var select_1 = require("@/app/components/shared/ui/select");
var checkbox_1 = require("@/app/components/shared/ui/checkbox");
exports.RoomsForm = function (_a) {
    var control = _a.control, register = _a.register, Rooms = _a.Rooms, editId = _a.editId;
    // Get selected room data once
    var roomData = Rooms === null || Rooms === void 0 ? void 0 : Rooms.find(function (room) { return (room === null || room === void 0 ? void 0 : room.id) === editId; });
    // Extract room fields
    var getCapacity = roomData === null || roomData === void 0 ? void 0 : roomData.capacity;
    // const getAmenities = roomData?.amenities;
    var getFloor = roomData === null || roomData === void 0 ? void 0 : roomData.floor;
    var getStatus = roomData === null || roomData === void 0 ? void 0 : roomData.status;
    var getRoomType = roomData === null || roomData === void 0 ? void 0 : roomData.type;
    // Form fields config
    var formLabel = [
        { label: "Room Number", name: "name", type: "text" },
        { label: "Capacity", name: "capacity", type: "number", value: getCapacity, control: true, options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] },
        { label: "Price", name: "price", type: "number" },
        { label: "Description", name: "description", type: "text" },
        { label: "Room Type", name: "type", value: getRoomType, type: "text", control: true, options: ["Single", "Double", "Suite", "Family", "Deluxe", "Executive", "Presidential"] },
        { label: "Floor", name: "floor", value: getFloor, type: "text", control: true, options: ["floor1", "floor2", "floor3", "floor4", "floor5", "floor6", "floor7", "floor8", "floor9", "floor10"] },
        { label: "Status", name: "status", value: getStatus, type: "text", control: true, options: ["available", "occupied", "maintenance", "needs cleaning"] },
        { label: "Last Cleaned", name: "lastCleaned", type: "text" },
    ];
    // Amenities fields config
    var amenitiesFields = [
        { name: "wifi", label: "Wifi", icon: lucide_react_1.Wifi },
        { name: "parking", label: "Parking", icon: lucide_react_1.CarIcon },
        { name: "breakfast", label: "Breakfast", icon: lucide_react_1.Hamburger },
    ];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[50vh] md:max-h-full overflow-y-auto" }, formLabel.map(function (field, idx) { return (react_1["default"].createElement("div", { key: idx, className: "col-span-2 lg:col-span-1" },
            react_1["default"].createElement(label_1.Label, { className: "my-2", htmlFor: field.name }, field.label),
            field.control ? (react_1["default"].createElement(react_hook_form_1.Controller, { name: field.name || "", control: control, defaultValue: field.value, render: function (_a) {
                    var _b, _c;
                    var f = _a.field;
                    return (react_1["default"].createElement(select_1.Select, { required: true, onValueChange: f.onChange, value: (_b = f.value) !== null && _b !== void 0 ? _b : "" },
                        react_1["default"].createElement(select_1.SelectTrigger, { className: "w-full" },
                            react_1["default"].createElement(select_1.SelectValue, { placeholder: "Select " + field.label })),
                        react_1["default"].createElement(select_1.SelectContent, null, (_c = field.options) === null || _c === void 0 ? void 0 : _c.map(function (opt, i) { return (react_1["default"].createElement(select_1.SelectItem, { key: i, value: opt }, opt)); }))));
                } })) : (react_1["default"].createElement(input_1.Input, __assign({ required: true, type: field.type, defaultValue: field.value }, register(field.name), { placeholder: "Enter " + field.label }))))); })),
        react_1["default"].createElement("h2", { className: "text-xl font-semibold" }, "Preferences"),
        react_1["default"].createElement("div", { className: "" },
            react_1["default"].createElement("div", { className: "flex flex-wrap gap-4" },
                react_1["default"].createElement("div", { className: "space-y-3 w-full " }, amenitiesFields.map(function (_a) {
                    var name = _a.name, label = _a.label, Icon = _a.icon;
                    return (react_1["default"].createElement("div", { key: name, className: "flex items-center gap-2 p-3 rounded-lg border border-border bg-card" },
                        react_1["default"].createElement(Icon, { className: "size-6" }),
                        react_1["default"].createElement("span", { className: "grow" }, label),
                        react_1["default"].createElement(react_hook_form_1.Controller, { name: "amenities." + name, control: control, 
                            // defaultValue={amenitiesDefaults[name] || false}
                            render: function (_a) {
                                var field = _a.field;
                                return react_1["default"].createElement(checkbox_1.Checkbox, { checked: field.value || false, onCheckedChange: field.onChange, className: "border-gray-600 border" });
                            } })));
                }))))));
};
