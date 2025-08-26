"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useFetchRooms_1 = require("../_hooks/useFetchRooms");
var useUpdateRoom_1 = require("../_hooks/useUpdateRoom");
var useAddRoom_1 = require("../_hooks/useAddRoom");
var react_hook_form_1 = require("react-hook-form");
var RoomsForm_1 = require("./RoomsForm");
var button_1 = require("@/app/components/shared/ui/button");
var dashBoardContext_1 = require("@/app/context/dashBoardContext");
var Loading_1 = require("@/app/components/shared/ui/Loading");
var FormComponent = function () {
    var _a;
    var _b = useFetchRooms_1["default"](), Rooms = _b.Rooms, isPending = _b.isPending;
    var _c = useUpdateRoom_1["default"](), update = _c.update, isUpdating = _c.isUpdating;
    var _d = dashBoardContext_1.useDashBoard(), isEdit = _d.isEdit, id = _d.editId, setOpen = _d.setOpen;
    var _e = useAddRoom_1["default"](), AddRoom = _e.AddRoom, isAdding = _e.isAdding;
    var selected = ((_a = Rooms === null || Rooms === void 0 ? void 0 : Rooms.data) === null || _a === void 0 ? void 0 : _a.find(function (Room) { return (Room === null || Room === void 0 ? void 0 : Room.id) === Number(id); })) || null;
    var _f = react_hook_form_1.useForm(), register = _f.register, control = _f.control, handleSubmit = _f.handleSubmit, reset = _f.reset;
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
            update({ id: id, formData: updatedFields, tableName: "Rooms" });
            setOpen(false);
        }
        else {
            AddRoom({ formData: formData });
            setOpen(false);
        }
    };
    if (isPending)
        return react_1["default"].createElement(Loading_1["default"], null);
    return (react_1["default"].createElement("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-4" },
        react_1["default"].createElement(RoomsForm_1.RoomsForm, { register: register, control: control, Rooms: (Rooms === null || Rooms === void 0 ? void 0 : Rooms.data) || [], selected: selected, editId: id }),
        react_1["default"].createElement(button_1.Button, { disabled: isUpdating || isAdding, type: "submit", className: "btn btn-primary  w-full" }, isEdit ? "Update Rooms" : "Add Rooms")));
};
exports["default"] = FormComponent;
