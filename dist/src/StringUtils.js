"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 字符串工具类
 */
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * 实现多个字符串的替换
     * @param str
     * @param rep1
     * @param rep2
     */
    StringUtils.prototype.replace = function (str, rep1, rep2) {
        if (rep2.length > 1 && rep1.length === rep2.length) {
            for (var i = 0; i < rep2.length; i++) {
                str = str.replace(rep1[i], rep2[i]);
            }
        }
        else if (rep2.length === 1) {
            for (var i = 0; i < rep1.length; i++) {
                str = str.replace(rep1[i], rep2[0]);
            }
        }
        return str;
    };
    /**
     * 将字符串中字母转成大写
     * @param args
     */
    StringUtils.prototype.toUpperCase = function (args) {
        return args.toUpperCase();
    };
    /**
     * 将字符串中的字母转成小写
     * @param args
     */
    StringUtils.prototype.toLowerCase = function (args) {
        return args.toLowerCase();
    };
    /**
     * 去除字符串中的空格
     * @param str
     * @param type
     */
    StringUtils.prototype.trim = function (str, type) {
        var result = "";
        switch (type) {
            case 1:
                result = str.trim();
                break;
            case 2:
                result = str.substring(1);
                break;
            case 3:
                result = str.substring(0, str.length - 1);
                break;
            case 4:
                for (var i = 0; i < str.length; i++) {
                    var ch = str.charAt(i);
                    if (ch !== " ") {
                        result = result + ch;
                    }
                }
                break;
            default:
                throw Error("Error in parameter passed by method StringUtils. trim");
        }
        return result;
    };
    return StringUtils;
}());
exports.default = StringUtils;
