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
var checkbox_1 = require("@/app/components/shared/ui/checkbox");
var input_1 = require("@/app/components/shared/ui/input");
var label_1 = require("@/app/components/shared/ui/label");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var lucide_react_1 = require("lucide-react");
var select_1 = require("@/app/components/shared/ui/select");
var useAvailableRooms_1 = require("../../Rooms/_hooks/useAvailableRooms");
var useFetchGuests_1 = require("../../Guests/_hooks/useFetchGuests");
// Form field configurations
var formLabel = [
    {
        label: "Room Number",
        name: "roomId",
        type: "text"
    },
    {
        label: "Guest Name",
        name: "guestId",
        type: "text"
    },
    {
        label: "Booking Status",
        name: "status",
        type: "text",
        control: true,
        options: ["confirmed", "pending", "checked-out"]
    },
    {
        label: "Check-In",
        name: "checkin",
        type: "date"
    },
    {
        label: "Check-Out",
        name: "checkout",
        type: "date"
    },
    {
        label: "Nights",
        name: "nights",
        type: "number"
    },
    {
        label: "Total Amount",
        name: "price",
        type: "number"
    },
    {
        label: "Observations",
        name: "observations",
        type: "text"
    },
];
var BookingForm = function (_a) {
    var _b, _c;
    var control = _a.control, register = _a.register, selected = _a.selected;
    var Guests = useFetchGuests_1["default"]().Guests;
    var _d = useAvailableRooms_1["default"](), availableRooms = _d.availableRooms, availableRoomsLoading = _d.availableRoomsLoading, availableRoomsPending = _d.availableRoomsPending;
    var ChooseGuest = function (value) {
        var _a, _b, _c;
        if (!value)
            return "Choose Guest";
        return ((_c = (_b = (_a = Guests) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.find(function (g) { return g.id === Number(value); })) === null || _c === void 0 ? void 0 : _c.fullName) || "Choose Guest";
    };
    var ChooseRoom = function (value) {
        var _a, _b, _c;
        if (!value)
            return "Choose Room";
        if (((_a = availableRooms) === null || _a === void 0 ? void 0 : _a.length) === 0)
            return "No Rooms Available";
        return (_c = (_b = availableRooms) === null || _b === void 0 ? void 0 : _b.find(function (r) { return r.id === parseInt(value); })) === null || _c === void 0 ? void 0 : _c.id;
    };
    var guestOptions = ((_c = (_b = Guests) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.map(function (guest) { return ({
        value: guest.id.toString(),
        label: guest.fullName
    }); })) || [];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[50vh] md:max-h-full overflow-y-auto" }, formLabel.map(function (field, index) {
            var _a;
            return (react_1["default"].createElement("div", { key: index, className: "space-y-2" }, field.control ? (
            // Render Select for controlled fields (like status)
            react_1["default"].createElement(react_hook_form_1.Controller, { name: field.name || "", control: control, defaultValue: (selected === null || selected === void 0 ? void 0 : selected[field.name]) || "", render: function (_a) {
                    var _b, _c;
                    var f = _a.field;
                    return (react_1["default"].createElement("div", null,
                        react_1["default"].createElement(label_1.Label, { className: "text-foreground" }, field.label),
                        react_1["default"].createElement(select_1.Select, { onValueChange: f.onChange, value: (_b = f.value) === null || _b === void 0 ? void 0 : _b.toString(), defaultValue: f.value },
                            react_1["default"].createElement(select_1.SelectTrigger, { className: "w-full bg-background border-border text-foreground" },
                                react_1["default"].createElement(select_1.SelectValue, { placeholder: "Select " + field.label })),
                            react_1["default"].createElement(select_1.SelectContent, { className: "bg-popover border-border text-foreground" }, (_c = field.options) === null || _c === void 0 ? void 0 : _c.map(function (opt, i) { return (react_1["default"].createElement(select_1.SelectItem, { key: i, value: opt, className: "focus:bg-accent focus:text-accent-foreground" }, opt.charAt(0).toUpperCase() + opt.slice(1))); })))));
                } })) : (
            // Render Input or Select based on field
            react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(label_1.Label, { className: "text-foreground" }, field.label),
                field.name === "guestId" ? (react_1["default"].createElement(react_hook_form_1.Controller, { name: "guestId", control: control, defaultValue: ((_a = selected === null || selected === void 0 ? void 0 : selected.guestId) === null || _a === void 0 ? void 0 : _a.toString()) || "", disabled: availableRoomsLoading || availableRoomsPending, render: function (_a) {
                        var _b;
                        var f = _a.field;
                        return (react_1["default"].createElement(select_1.Select, { onValueChange: f.onChange, value: (_b = f.value) === null || _b === void 0 ? void 0 : _b.toString() },
                            react_1["default"].createElement(select_1.SelectTrigger, { className: "w-full bg-background border-border text-foreground" },
                                react_1["default"].createElement(select_1.SelectValue, { placeholder: ChooseGuest(f.value) })),
                            react_1["default"].createElement(select_1.SelectContent, { className: "bg-popover border-border text-foreground" }, guestOptions.map(function (opt) { return (react_1["default"].createElement(select_1.SelectItem, { key: opt.value, value: opt.value, className: "focus:bg-accent focus:text-accent-foreground" }, opt.label)); }))));
                    } })) : field.name === "roomId" ? (react_1["default"].createElement(react_hook_form_1.Controller, { name: "roomId", control: control, disabled: availableRoomsLoading || availableRoomsPending, defaultValue: (selected === null || selected === void 0 ? void 0 : selected.roomId) || "", render: function (_a) {
                        var _b;
                        var f = _a.field;
                        return (react_1["default"].createElement(select_1.Select, { onValueChange: f.onChange, value: (_b = f.value) === null || _b === void 0 ? void 0 : _b.toString() },
                            react_1["default"].createElement(select_1.SelectTrigger, { className: "w-full bg-background border-border text-foreground" }, ChooseRoom(f.value)),
                            react_1["default"].createElement(select_1.SelectContent, { className: "bg-popover border-border text-foreground" }, availableRooms === null || availableRooms === void 0 ? void 0 : availableRooms.map(function (room) { return (react_1["default"].createElement(select_1.SelectItem, { key: room.id, value: room.id.toString(), className: "focus:bg-accent focus:text-accent-foreground" },
                                "Room ",
                                room.id)); }))));
                    } })) : (react_1["default"].createElement(input_1.Input, __assign({ required: true, id: field.name, type: field.type, defaultValue: (selected === null || selected === void 0 ? void 0 : selected[field.name]) || "" }, register(field.name), { placeholder: "Enter " + field.label, className: "bg-background border-border text-foreground placeholder:text-muted-foreground" })))))));
        })),
        react_1["default"].createElement("div", { className: "flex flex-wrap gap-6 mt-6" },
            react_1["default"].createElement("div", { className: "w-full flex justify-between items-center p-3 rounded-lg border border-border bg-card" },
                react_1["default"].createElement(label_1.Label, { htmlFor: "Breakfast", className: "flex items-center gap-2 text-foreground" },
                    react_1["default"].createElement(lucide_react_1.Hamburger, { size: 16 }),
                    "Breakfast Included"),
                react_1["default"].createElement(react_hook_form_1.Controller, { name: "hasBreakfast", control: control, defaultValue: (selected === null || selected === void 0 ? void 0 : selected.hasBreakfast) || false, render: function (_a) {
                        var checkboxField = _a.field;
                        return (react_1["default"].createElement(checkbox_1.Checkbox, { checked: checkboxField.value, onCheckedChange: checkboxField.onChange, className: "border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" }));
                    } })),
            react_1["default"].createElement("div", { className: "w-full flex justify-between items-center p-3 rounded-lg border border-border bg-card" },
                react_1["default"].createElement(label_1.Label, { htmlFor: "isPaid", className: "flex items-center gap-2 text-foreground" },
                    react_1["default"].createElement(lucide_react_1.Wallet, { size: 16 }),
                    "Payment Completed"),
                react_1["default"].createElement(react_hook_form_1.Controller, { name: "isPaid", control: control, defaultValue: (selected === null || selected === void 0 ? void 0 : selected.isPaid) || false, render: function (_a) {
                        var checkboxField = _a.field;
                        return (react_1["default"].createElement(checkbox_1.Checkbox, { checked: checkboxField.value, onCheckedChange: checkboxField.onChange, className: "border-border data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" }));
                    } })))));
};
exports["default"] = BookingForm;
