"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var customRoutes_1 = __importDefault(require("./routes/customRoutes"));
var shortUrlRoutes_1 = __importDefault(require("./routes/shortUrlRoutes"));
var db_1 = __importDefault(require("../config/db"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
var corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};
app.use((0, cors_1.default)(corsOptions));
// Add a middleware to set the "Access-Control-Allow-Origin" header
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); 
//   next();
// });
(0, db_1.default)();
(0, shortUrlRoutes_1.default)(app);
(0, customRoutes_1.default)(app);
exports.default = app;
