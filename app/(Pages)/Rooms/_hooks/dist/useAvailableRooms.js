"use strict";
exports.__esModule = true;
var useQuery_1 = require("@/hooks/useQuery");
var crudService_1 = require("../_services/crudService");
var useAvailableRooms = function () {
    "use memo";
    var queryKey = ["available_rooms"];
    var _a = useQuery_1.useGetData({
        queryKey: queryKey,
        getFun: function () { return crudService_1.fetchAvailableRooms(); }
    }), availableRooms = _a.data, availableRoomsLoading = _a.isLoading, availableRoomsError = _a.isError, availableRoomsPending = _a.isPending;
    return { availableRooms: availableRooms, availableRoomsLoading: availableRoomsLoading, availableRoomsError: availableRoomsError, availableRoomsPending: availableRoomsPending };
};
exports["default"] = useAvailableRooms;
