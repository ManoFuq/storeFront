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
Object.defineProperty(exports, "__esModule", { value: true });
var orders_1 = require("../models/orders");
var auth_1 = require("./../middleware/auth");
// Set the class to a variable
var store = new orders_1.orderStore();
// The index function
var index = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orders, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, store.index()];
            case 1:
                orders = _a.sent();
                res.json(orders);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                throw new Error("Could not show all the orders ".concat(error_1));
            case 3: return [2 /*return*/];
        }
    });
}); };
// The show function
var show = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var singleOrder, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, store.show(_req.body.id)];
            case 1:
                singleOrder = _a.sent();
                res.json(singleOrder);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                throw new Error("Could not show the order ".concat(error_2));
            case 3: return [2 /*return*/];
        }
    });
}); };
// The create function
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order, newOrder, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                order = {
                    id: req.body.id,
                    user_id: req.body.user_id,
                    status: req.body.status,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, store.create(order)];
            case 2:
                newOrder = _a.sent();
                res.json(newOrder);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                throw new Error("Could not create the order ".concat(error_3));
            case 4: return [2 /*return*/];
        }
    });
}); };
// Get the active orders that user ordered by user id requires a token
var currentRecord = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.body.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, store.currentRecord(id)];
            case 2:
                result = _a.sent();
                res.send(result);
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                throw new Error("".concat(error_4));
            case 4: return [2 /*return*/];
        }
    });
}); };
//The cart function
var cart = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var quantity, orderId, productId, addedProduct, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                quantity = req.body.quantity;
                orderId = req.body.orderId;
                productId = req.body.productId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, store.cart(quantity, orderId, productId)];
            case 2:
                addedProduct = _a.sent();
                res.json(addedProduct);
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                res.status(400);
                throw new Error("".concat(error_5));
            case 4: return [2 /*return*/];
        }
    });
}); };
// Export the routes
var orderRoutes = function (app) {
    app.get("/orders", auth_1.auth, index);
    app.get("/orders/:id", auth_1.auth, show);
    app.post("/orders", auth_1.auth, create);
    app.post("/orders/:id/products", auth_1.auth, cart);
    app.get("/orders/current", auth_1.auth, currentRecord);
};
exports.default = orderRoutes;
