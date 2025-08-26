"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AddData = exports.UpdateData = exports.DeleteData = exports.GetAllData = void 0;
var axios_1 = require("axios");
exports.GetAllData = function (_a) {
    var tableName = _a.tableName, page = _a.page, pageSize = _a.pageSize, search = _a.search, filter = _a.filter;
    return __awaiter(void 0, void 0, Promise, function () {
        var data, data, data, e_1, message;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 7, , 8]);
                    if (!(page && pageSize && page > 0 && pageSize > 0 && filter === "")) return [3 /*break*/, 2];
                    return [4 /*yield*/, axios_1["default"].get("/apis/" + tableName + "?page=" + page + "&pageSize=" + pageSize + "&search=" + (search !== null && search !== void 0 ? search : "") + "&filter=")];
                case 1:
                    data = (_d.sent()).data;
                    return [2 /*return*/, data !== null && data !== void 0 ? data : []];
                case 2:
                    if (!(filter && page && pageSize)) return [3 /*break*/, 4];
                    return [4 /*yield*/, axios_1["default"].get("/apis/" + tableName + "?page=" + page + "&pageSize=" + pageSize + "&filter=" + filter + "&search=" + (search !== null && search !== void 0 ? search : ""))];
                case 3:
                    data = (_d.sent()).data;
                    return [2 /*return*/, data !== null && data !== void 0 ? data : []];
                case 4:
                    if (!tableName) return [3 /*break*/, 6];
                    return [4 /*yield*/, axios_1["default"].get("/apis/" + tableName)];
                case 5:
                    data = (_d.sent()).data;
                    return [2 /*return*/, data !== null && data !== void 0 ? data : []];
                case 6: return [3 /*break*/, 8];
                case 7:
                    e_1 = _d.sent();
                    message = ((_c = (_b = e_1 === null || e_1 === void 0 ? void 0 : e_1.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.error) || (e_1 === null || e_1 === void 0 ? void 0 : e_1.message) || "Failed to get record";
                    throw new Error(message);
                case 8: return [2 /*return*/];
            }
        });
    });
};
exports.DeleteData = function (_a) {
    var tableName = _a.tableName, id = _a.id;
    return __awaiter(void 0, void 0, Promise, function () {
        var data, e_2, message;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"]["delete"]("/apis/" + tableName, {
                            data: { id: id }
                        })];
                case 1:
                    data = (_d.sent()).data;
                    return [2 /*return*/, data];
                case 2:
                    e_2 = _d.sent();
                    message = ((_c = (_b = e_2 === null || e_2 === void 0 ? void 0 : e_2.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.error) || (e_2 === null || e_2 === void 0 ? void 0 : e_2.message) || "Failed to delete record";
                    throw new Error(message);
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.UpdateData = function (_a) {
    var tableName = _a.tableName, id = _a.id, formData = _a.formData;
    return __awaiter(void 0, void 0, Promise, function () {
        var data, e_3, message;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].put("/apis/" + tableName, { id: id, formData: formData })];
                case 1:
                    data = (_d.sent()).data;
                    return [2 /*return*/, data !== null && data !== void 0 ? data : []];
                case 2:
                    e_3 = _d.sent();
                    message = ((_c = (_b = e_3 === null || e_3 === void 0 ? void 0 : e_3.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.error) || (e_3 === null || e_3 === void 0 ? void 0 : e_3.message) || "Failed to update record";
                    throw new Error(message);
                case 3: return [2 /*return*/];
            }
        });
    });
};
exports.AddData = function (_a) {
    var tableName = _a.tableName, formData = _a.formData;
    return __awaiter(void 0, void 0, Promise, function () {
        var data, e_4, message;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].post("/apis/" + tableName, { formData: formData })];
                case 1:
                    data = (_d.sent()).data;
                    return [2 /*return*/, data !== null && data !== void 0 ? data : []];
                case 2:
                    e_4 = _d.sent();
                    message = ((_c = (_b = e_4 === null || e_4 === void 0 ? void 0 : e_4.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.error) || (e_4 === null || e_4 === void 0 ? void 0 : e_4.message) || "Failed to add record";
                    throw new Error(message);
                case 3: return [2 /*return*/];
            }
        });
    });
};
