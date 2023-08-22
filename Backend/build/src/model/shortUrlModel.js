"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var nanoid;
// Dynamically import nanoid
Promise.resolve().then(function () { return __importStar(require('nanoid')); }).then(function (module) {
    nanoid = module.customAlphabet('1234567890abcdefghijklmnopqrstuv', 6);
});
//create a mongoose schema
var shortUrlSchema = new mongoose_1.default.Schema({
    shortId: {
        type: String,
        unique: true,
        required: true,
        default: function () { return nanoid(); },
    },
    customId: {
        type: String,
        unique: true,
        required: true,
        default: function () { return nanoid(); },
    },
    destination: {
        type: String,
        required: true,
    },
    // analytics: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'analytics',
    //     required: true,
    // },
    // I want to see number of clicks.
    clickCount: {
        type: Number,
        required: true,
        default: 0,
    },
});
//create a mongoose model
var shortUrl = mongoose_1.default.model('shortUrl', shortUrlSchema);
exports.default = shortUrl;
// import mongoose from 'mongoose';
// interface ShortUrl extends mongoose.Document {
//   destination: string;
//   shortId: string;
// }
// const shortUrlSchema = new mongoose.Schema<ShortUrl>(
//   {
//     destination: {
//       type: String,
//       required: true,
//     },
//     shortId: {
//       type: String,
//       required: true,
//       unique: true,
//       default: () => {
//         let randomChars = '';
//         const possibleChars =
//           'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//         for (let i = 0; i < 6; i++) {
//           randomChars += possibleChars.charAt(
//             Math.floor(Math.random() * possibleChars.length)
//           );
//         }
//         return `https://slice.ly/${randomChars}`;
//       },
//     },
//   },
//   { timestamps: true }
// );
// export default mongoose.model<ShortUrl>('shortUrl', shortUrlSchema);
