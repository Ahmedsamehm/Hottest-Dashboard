"use strict";
exports.__esModule = true;
var react_1 = require("react");
var card_1 = require("./shared/ui/card");
var StatsCards = function (_a) {
    "use memo";
    var stats = _a.stats;
    var isEven = stats.length === 2;
    return isEven ? (react_1["default"].createElement("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-2" }, stats.map(function (stat) { return (react_1["default"].createElement(card_1.Card, { key: stat.title, className: "border-border shadow-sm bg-card rounded-lg transition-all duration-300 hover:shadow-xs shadow-gray-100" },
        react_1["default"].createElement(card_1.CardContent, { className: "p-6" },
            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-4" },
                react_1["default"].createElement("div", { className: "p-3 rounded-lg " + stat.bgColor },
                    react_1["default"].createElement(stat.icon, { className: "size-5 " + stat.color }))),
            react_1["default"].createElement("div", { className: "space-y-1" },
                react_1["default"].createElement("p", { className: "text-sm font-medium text-muted-foreground" }, stat.title),
                react_1["default"].createElement("p", { className: "text-2xl font-bold text-foreground" }, stat.value),
                stat.subtitle && react_1["default"].createElement("p", { className: "text-xs text-muted-foreground" }, stat.subtitle))))); }))) : (react_1["default"].createElement("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4" }, stats.map(function (stat) { return (react_1["default"].createElement(card_1.Card, { key: stat.title, className: "border-border shadow-sm bg-card rounded-lg transition-all duration-300  hover:shadow-xs shadow-gray-100" },
        react_1["default"].createElement(card_1.CardContent, { className: "p-6" },
            react_1["default"].createElement("div", { className: "flex items-center justify-between mb-4" },
                react_1["default"].createElement("div", { className: "p-3 rounded-lg " + stat.bgColor },
                    react_1["default"].createElement(stat.icon, { className: "size-5 " + stat.color }))),
            react_1["default"].createElement("div", { className: "space-y-1" },
                react_1["default"].createElement("p", { className: "text-sm font-medium text-muted-foreground" }, stat.title),
                react_1["default"].createElement("p", { className: "text-2xl font-bold text-foreground" }, Math.floor(stat === null || stat === void 0 ? void 0 : stat.value)),
                stat.subtitle && react_1["default"].createElement("p", { className: "text-xs text-muted-foreground" }, stat.subtitle))))); })));
};
exports["default"] = StatsCards;
