"use strict";
exports.__esModule = true;
exports.useDeleteData = exports.useUpdateData = exports.useAddData = exports.useGetData = void 0;
var react_query_1 = require("@tanstack/react-query");
exports.useGetData = function (_a) {
    var queryKey = _a.queryKey, getFun = _a.getFun;
    var _b = react_query_1.useQuery({
        queryKey: [queryKey],
        queryFn: function () { return getFun(); },
        refetchOnWindowFocus: false,
        // staleTime: 5000,
        // refetchInterval: 5000,
        retry: 1
    }), data = _b.data, isLoading = _b.isLoading, isError = _b.isError;
    return { data: data, isLoading: isLoading, isError: isError };
};
exports.useAddData = function (_a) {
    var mutationKey = _a.mutationKey, addFun = _a.addFun, queryKey = _a.queryKey;
    var queryClient = react_query_1.useQueryClient();
    var _b = react_query_1.useMutation({
        mutationKey: [mutationKey],
        mutationFn: function (_a) {
            var formData = _a.formData;
            return addFun(formData);
        },
        onSuccess: function () {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
        }
    }), add = _b.mutate, isAdding = _b.isPending;
    return { add: add, isAdding: isAdding };
};
exports.useUpdateData = function (_a) {
    var mutationKey = _a.mutationKey, updateFun = _a.updateFun, queryKey = _a.queryKey;
    var queryClient = react_query_1.useQueryClient();
    var _b = react_query_1.useMutation({
        mutationKey: [mutationKey],
        mutationFn: function (_a) {
            var id = _a.id, formData = _a.formData;
            return updateFun({ tableName: queryKey, id: id, formData: formData });
        },
        onSuccess: function () {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
        }
    }), update = _b.mutate, isUpdating = _b.isPending;
    return { update: update, isUpdating: isUpdating };
};
exports.useDeleteData = function (_a) {
    var mutationKey = _a.mutationKey, deleteFun = _a.deleteFun, queryKey = _a.queryKey, tableName = _a.tableName;
    var queryClient = react_query_1.useQueryClient();
    var _b = react_query_1.useMutation({
        mutationKey: [mutationKey],
        mutationFn: function (id) { return deleteFun(tableName, id); },
        onSuccess: function () {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
        }
    }), deleteItem = _b.mutate, isDeleting = _b.isPending;
    return { deleteItem: deleteItem, isDeleting: isDeleting };
};
