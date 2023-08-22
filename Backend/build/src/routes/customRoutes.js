"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var customUrlCtrl_1 = require("../controllers/customUrlCtrl");
var validation_1 = __importDefault(require("../middleware/validation"));
var createUrlSchema_1 = __importDefault(require("../validationSchemas/createUrlSchema"));
var customUrlRoutes = function (app) {
    app.get('/api/customUrl/:customId', (0, validation_1.default)(createUrlSchema_1.default), customUrlCtrl_1.handleCustomRedirect);
    app.post('/api/customUrl/', customUrlCtrl_1.createCustomUrl);
    // app.get('api/shortUrl/:shortUrlId', get1Analytics)
};
exports.default = customUrlRoutes;
