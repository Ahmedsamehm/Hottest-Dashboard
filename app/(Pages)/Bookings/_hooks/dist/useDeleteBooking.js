"use strict";
exports.__esModule = true;
var crudService_1 = require("@/hooks/crudService");
var useQuery_1 = require("@/hooks/useQuery");
var useDeleteBooking = function () {
    var _a = useQuery_1.useDeleteData({
        mutationKey: "Booking",
        deleteFun: function (id) { return crudService_1.DeleteData(id, "Booking"); },
        queryKey: "Booking",
        tableName: "Booking",
        message: { onSuccessDelete: "Booking deleted successfully" }
    }), deleteItem = _a.deleteItem, isDeleting = _a.isDeleting;
    return { deleteItem: deleteItem, isDeleting: isDeleting };
};
exports["default"] = useDeleteBooking;
