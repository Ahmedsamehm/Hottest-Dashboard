"use strict";
exports.__esModule = true;
var react_1 = require("react");
var button_1 = require("@/app/components/shared/ui/button");
var react_hook_form_1 = require("react-hook-form");
var useUpdateBooking_1 = require("../_hooks/useUpdateBooking");
var useFetchAllBookings_1 = require("../_hooks/useFetchAllBookings");
var dashBoardContext_1 = require("@/app/context/dashBoardContext");
var useAddBooking_1 = require("../_hooks/useAddBooking");
var BookingForm_1 = require("./BookingForm");
var FormComponent = function () {
    var _a;
    var bookings = useFetchAllBookings_1["default"]().bookings;
    var _b = useUpdateBooking_1["default"](), isUpdating = _b.isUpdating, update = _b.update;
    var _c = dashBoardContext_1.useDashBoard(), isEdit = _c.isEdit, id = _c.editId, setOpen = _c.setOpen;
    var _d = useAddBooking_1["default"](), AddRoom = _d.AddRoom, isAdding = _d.isAdding;
    var selected = ((_a = bookings === null || bookings === void 0 ? void 0 : bookings.data) === null || _a === void 0 ? void 0 : _a.find(function (booking) { return (booking === null || booking === void 0 ? void 0 : booking.id) === Number(id); })) || null;
    var _e = react_hook_form_1.useForm(), register = _e.register, control = _e.control, handleSubmit = _e.handleSubmit, reset = _e.reset;
    react_1.useEffect(function () {
        if (isEdit && id) {
            reset(selected);
        }
        else {
            reset();
        }
    }, [id, reset, selected, isEdit]);
    var onSubmit = function (formData) {
        if (isEdit && id) {
            var updatedFields = Object.fromEntries(Object.entries(formData).filter(function (_a) {
                var key = _a[0], value = _a[1];
                return value !== selected[key];
            }));
            update({ id: id, formData: updatedFields, tableName: "Booking" });
            setOpen(false);
        }
        else {
            AddRoom({ formData: formData });
            setOpen(false);
        }
    };
    return (react_1["default"].createElement("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-6" },
        react_1["default"].createElement(BookingForm_1["default"], { register: register, control: control, selected: selected }),
        react_1["default"].createElement("div", { className: "flex gap-4 justify-end pt-4 border-t border-border" },
            react_1["default"].createElement(button_1.Button, { disabled: isUpdating || isAdding, type: "submit", className: "bg-primary text-primary-foreground hover:bg-primary/90 w-full" }, isEdit ? "Update" : "Create"))));
};
exports["default"] = FormComponent;
