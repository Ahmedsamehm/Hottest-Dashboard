"use strict";
exports.__esModule = true;
var react_1 = require("react");
var dialog_1 = require("./shared/ui/dialog");
var dashBoardContext_1 = require("../context/dashBoardContext");
var DialogModule = function (_a) {
    "use memo";
    var tableName = _a.tableName, formComponent = _a.formComponent;
    var _b = dashBoardContext_1.useDashBoard(), isEdit = _b.isEdit, open = _b.open, setOpen = _b.setOpen;
    return (react_1["default"].createElement(dialog_1.Dialog, { open: open, onOpenChange: setOpen },
        react_1["default"].createElement(dialog_1.DialogContent, null,
            react_1["default"].createElement(dialog_1.DialogHeader, null,
                react_1["default"].createElement(dialog_1.DialogTitle, null,
                    isEdit ? "Edit" : "Add",
                    " ",
                    tableName),
                react_1["default"].createElement(dialog_1.DialogDescription, null, isEdit ? "Update the selected " + tableName.toLowerCase() + " information" : "Create a new " + tableName.toLowerCase() + " entry"),
                formComponent))));
};
exports["default"] = DialogModule;
