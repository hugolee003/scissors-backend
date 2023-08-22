"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateQRCode = void 0;
var qrcode_1 = __importDefault(require("qrcode"));
// With async/await
// export const generateQrCode = async (text: string) => {
//     try {
//       console.log(await QRCode.toDataURL('text', {errorCorrectionLevel: 'M'}))
//     } catch (err) {
//       console.error(err)
//     }
//   }
var generateQRCode = function (text) {
    return new Promise(function (resolve, reject) {
        qrcode_1.default.toBuffer(text, function (error, buffer) {
            if (error) {
                reject(error);
            }
            else {
                resolve(buffer);
            }
        });
    });
};
exports.generateQRCode = generateQRCode;
