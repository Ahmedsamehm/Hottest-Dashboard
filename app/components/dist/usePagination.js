"use strict";
exports.__esModule = true;
var useCalculation_1 = require("@/hooks/useCalculation");
var navigation_1 = require("next/navigation");
var usePagination = function (fetchAction, path) {
    "use memo";
    var total = useCalculation_1["default"](fetchAction !== null && fetchAction !== void 0 ? fetchAction : []).total;
    var searchParams = navigation_1.useSearchParams();
    var router = navigation_1.useRouter();
    var page = Math.max(1, Number(searchParams.get("page")) || 1);
    var pageSize = 20;
    var totalPages = Math.ceil(total / pageSize);
    var handleIncrement = function () {
        if (page >= totalPages)
            return;
        var nextPage = page + 1;
        router.push("/" + path + "?page=" + nextPage);
    };
    var handleDecrement = function () {
        if (page <= 1)
            return;
        var prevPage = page - 1;
        if (prevPage === 1) {
            router.push("" + path);
        }
        else {
            router.push(path + "?page=" + prevPage);
        }
    };
    return { page: page, pageSize: pageSize, handleIncrement: handleIncrement, handleDecrement: handleDecrement, totalPages: totalPages };
};
exports["default"] = usePagination;
