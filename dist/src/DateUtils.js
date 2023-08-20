"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateUtils = /** @class */ (function () {
    function DateUtils() {
        /**
         * 下面分别是一天、一小时、一分钟的秒数，数值都是计算过的，直接用即可；
         * 目的是减少相关秒数的计算，提高代码的执行效率
         */
        this.secondsOfDays = 86400000; //一天的秒数
        this.secondsOfHours = 3600000; //一小时的秒数
        this.secondsOfMinutes = 60000; //一分钟的秒数
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
    /**
     * 计算两个日期的时间差
     * @param start
     * @param end
     */
    DateUtils.prototype.dateDiff = function (start, end) {
        var diff = Math.abs(start.getTime() - end.getTime());
        var dayGap = Math.floor(diff / this.secondsOfDays);
        diff = diff % this.secondsOfDays;
        var hourGap = Math.floor(diff / this.secondsOfHours);
        diff = diff % this.secondsOfHours;
        var minutes = Math.floor(diff / this.secondsOfMinutes);
        diff = diff % this.secondsOfMinutes;
        var seconds = Math.floor(diff / 1000);
        return [dayGap, hourGap, minutes, seconds, diff % 1000];
    };
    /**
     * 获取某一年的第一天
     */
    DateUtils.prototype.getFirstDayOfYear = function (time) {
        var date = typeof time === "number" ? new Date(time) : time;
        return date.getFullYear() + "-01-01 00:00:00";
    };
    /**
     * 获取某个日期是当年的第几天
     * @param time
     */
    DateUtils.prototype.getDayOfYear = function (time) {
        var firstDay = this.getFirstDayOfYear(time);
        var date = typeof time === "number" ? new Date(time) : time;
        var numSecond = date.getTime() - new Date(firstDay).getTime();
        return Math.ceil(numSecond / this.secondsOfDays);
    };
    /**
     * 获取某个日期是这一年中第几周
     * @param time
     */
    DateUtils.prototype.getDayOfYearWeek = function (time) {
        var numDays = this.getDayOfYear(time);
        return Math.ceil(numDays / 7);
    };
    DateUtils.prototype.getYearOfDay = function (year) {
        var current = typeof year === "number" ? year : Number(year);
        if (isNaN(current)) {
            throw Error("String \"".concat(current, "\" cannot be converted to a number"));
        }
        var currentYear = "".concat(current, "-01-01 00:00:00");
        var nextYear = "".concat(current + 1, "-01-01 00:00:00");
        var second = new Date(nextYear).getTime() - new Date(currentYear).getTime();
        return second / this.secondsOfDays;
    };
    return DateUtils;
}());
exports.default = DateUtils;
