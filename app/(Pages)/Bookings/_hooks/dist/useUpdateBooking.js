"use strict";
exports.__esModule = true;
var crudService_1 = require("@/hooks/crudService");
var useQuery_1 = require("@/hooks/useQuery");
var useUpdateBooking = function () {
    var message = { onSuccessUpdate: "Booking updated successfully" };
    var _a = useQuery_1.useUpdateData({
        mutationKey: "Booking",
        updateFun: function (_a) {
            var tableName = _a.tableName, id = _a.id, formData = _a.formData;
            return crudService_1.UpdateData({ id: id, formData: formData, tableName: tableName });
        },
        queryKey: "Booking",
        message: message
    }), update = _a.update, isUpdating = _a.isUpdating;
    return { update: update, isUpdating: isUpdating };
};
exports["default"] = useUpdateBooking;
