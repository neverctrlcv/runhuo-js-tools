"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateUtils = /** @class */ (function () {
    function DateUtils() {
    }
    DateUtils.prototype.dateFormat = function (format, date) {
        var targetDate = typeof date === "number" ? new Date(date) : date;
        var year = targetDate.getFullYear();
        var month = targetDate.getMonth() + 1;
        var day = targetDate.getDate();
        var hours = targetDate.getHours();
        var minutes = targetDate.getMinutes();
        var seconds = targetDate.getSeconds();
        var result;
        switch (format) {
            case "HH-MM-DD HH:mm:ss":
                result = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
                break;
            case "HH-MM-DD HH:mm:ss C":
                result = "".concat(year, "\u5E74").concat(month, "\u6708").concat(day, "\u65E5 ").concat(hours, "\u65F6").concat(minutes, "\u5206").concat(seconds, "\u79D2");
                break;
            case "HH-MM-DD":
                result = "".concat(year, "-").concat(month, "-").concat(day);
                break;
            case "HH-MM-DD C":
                result = "".concat(year, "\u5E74").concat(month, "\u6708").concat(day, "\u65E5");
                break;
            case "HH:mm:ss":
                result = "".concat(hours, ":").concat(minutes, ":").concat(seconds);
                break;
            case "HH:mm:ss C":
                result = "".concat(hours, "\u65F6").concat(minutes, "\u5206").concat(seconds, "\u79D2");
                break;
            case "HH-MM-DD a HH:mm:ss":
                result = "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours - 12 > 0 ? 'pm' : 'am', " ").concat(hours - 12, ":").concat(minutes, ":").concat(seconds);
                break;
            case "HH-MM-DD a HH:mm:ss C":
                result = "".concat(year, "\u5E74").concat(month, "\u6708").concat(day, "\u65E5 ").concat(hours - 12 > 0 ? '下午' : '上午', " ").concat(hours - 12, "\u65F6").concat(minutes, "\u5206").concat(seconds, "\u79D2");
                break;
            case "a HH:mm:ss":
                result = "".concat(hours - 12 > 0 ? 'pm' : 'am', " ").concat(hours - 12, ":").concat(minutes, ":").concat(seconds);
                break;
            case "a HH:mm:ss C":
                result = "".concat(hours - 12 > 0 ? '下午' : '上午', " ").concat(hours - 12, "\u65F6").concat(minutes, "\u5206").concat(seconds, "\u79D2");
                break;
            default:
                throw new Error("The date format you set has an error. Please check it");
        }
        return result;
    };
    return DateUtils;
}());
exports.default = DateUtils;
