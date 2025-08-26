"use client";
"use strict";
exports.__esModule = true;
exports.DropDownMenu = void 0;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var button_1 = require("./shared/ui/button");
var dropdown_menu_1 = require("./shared/ui/dropdown-menu");
var dashBoardContext_1 = require("@/app/context/dashBoardContext");
function DropDownMenu(_a) {
    "use memo";
    var Delete = _a.Delete, isDeleting = _a.isDeleting, id = _a.id;
    var _b = dashBoardContext_1.useDashBoard(), setIsEdit = _b.setIsEdit, setEditId = _b.setEditId, setOpen = _b.setOpen;
    var handleEdit = function () {
        setIsEdit(true);
        setOpen(true);
        setEditId(id);
    };
    return (react_1["default"].createElement(dropdown_menu_1.DropdownMenu, null,
        react_1["default"].createElement(dropdown_menu_1.DropdownMenuTrigger, { asChild: true },
            react_1["default"].createElement(button_1.Button, { variant: "ghost", size: "sm", disabled: isDeleting, className: "text-gray-400 hover:text-gray-600 border border-gray-400" },
                react_1["default"].createElement(lucide_react_1.MoreHorizontal, { className: "size-7" }))),
        react_1["default"].createElement(dropdown_menu_1.DropdownMenuContent, { className: "w-56", align: "start" },
            react_1["default"].createElement(dropdown_menu_1.DropdownMenuLabel, null,
                react_1["default"].createElement("p", { className: "text-sm font-medium " }, "Actions Menu")),
            react_1["default"].createElement(dropdown_menu_1.DropdownMenuGroup, null,
                react_1["default"].createElement(dropdown_menu_1.DropdownMenuItem, { onClick: handleEdit, className: "flex cursor-pointer hover:bg-blue-50" },
                    react_1["default"].createElement(lucide_react_1.Edit, { className: "size-4 mr-2" }),
                    "Edit Details"),
                react_1["default"].createElement(dropdown_menu_1.DropdownMenuSeparator, null),
                react_1["default"].createElement(dropdown_menu_1.DropdownMenuItem, { className: " text-destructive hover:!text-destructive hover:!bg-destructive/10 border flex cursor-pointer", onClick: Delete },
                    react_1["default"].createElement(lucide_react_1.Trash2, { className: "size-4 mr-2" }),
                    "Delete")))));
}
exports.DropDownMenu = DropDownMenu;
