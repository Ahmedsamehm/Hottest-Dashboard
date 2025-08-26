"use strict";
exports.__esModule = true;
exports.useDeleteData = exports.useUpdateData = exports.useAddData = exports.useGetData = void 0;
var react_query_1 = require("@tanstack/react-query");
var sonner_1 = require("sonner");
exports.useGetData = function (_a) {
    var queryKey = _a.queryKey, getFun = _a.getFun, tableName = _a.tableName;
    var _b = react_query_1.useQuery({
        queryKey: queryKey,
        queryFn: function () {
            return getFun(tableName);
        },
        staleTime: 60 * 1000,
        cacheTime: 5 * 60 * 1000
    }), data = _b.data, isLoading = _b.isLoading, isError = _b.isError, isPending = _b.isPending;
    return { data: data, isLoading: isLoading, isError: isError, isPending: isPending };
};
exports.useAddData = function (_a) {
    var mutationKey = _a.mutationKey, addFun = _a.addFun, queryKey = _a.queryKey, tableName = _a.tableName, message = _a.message;
    var queryClient = react_query_1.useQueryClient();
    var _b = react_query_1.useMutation({
        mutationKey: [mutationKey],
        mutationFn: function (_a) {
            var formData = _a.formData;
            return addFun({ formData: formData, tableName: tableName });
        },
        onError: function () {
            sonner_1.toast.error(message.onError);
        },
        onSuccess: function () {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
            sonner_1.toast.success(message.onSuccess);
        }
    }), add = _b.mutate, addAsync = _b.mutateAsync, isAdding = _b.isPending, addError = _b.error, isAddError = _b.isError, resetAdd = _b.reset;
    return { add: add, addAsync: addAsync, isAdding: isAdding, addError: addError, isAddError: isAddError, resetAdd: resetAdd };
};
exports.useUpdateData = function (_a) {
    var mutationKey = _a.mutationKey, updateFun = _a.updateFun, queryKey = _a.queryKey, message = _a.message;
    var queryClient = react_query_1.useQueryClient();
    var _b = react_query_1.useMutation({
        mutationKey: [mutationKey],
        mutationFn: function (_a) {
            var id = _a.id, formData = _a.formData;
            return updateFun({ tableName: queryKey, id: id, formData: formData });
        },
        onSuccess: function () {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
            sonner_1.toast.success(message.onSuccessUpdate);
        }
    }), update = _b.mutate, updateAsync = _b.mutateAsync, isUpdating = _b.isPending, updateError = _b.error, isUpdateError = _b.isError, resetUpdate = _b.reset;
    return { update: update, updateAsync: updateAsync, isUpdating: isUpdating, updateError: updateError, isUpdateError: isUpdateError, resetUpdate: resetUpdate };
};
exports.useDeleteData = function (_a) {
    var mutationKey = _a.mutationKey, deleteFun = _a.deleteFun, queryKey = _a.queryKey, tableName = _a.tableName, message = _a.message;
    var queryClient = react_query_1.useQueryClient();
    var _b = react_query_1.useMutation({
        mutationKey: [mutationKey],
        mutationFn: function (id) { return deleteFun({ tableName: tableName, id: id }); },
        onSuccess: function () {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
            sonner_1.toast.success(message.onSuccessDelete);
        }
    }), deleteItem = _b.mutate, isDeleting = _b.isPending, deleteError = _b.error, isDeleteError = _b.isError, resetDelete = _b.reset;
    return { deleteItem: deleteItem, isDeleting: isDeleting, deleteError: deleteError, isDeleteError: isDeleteError, resetDelete: resetDelete };
};
