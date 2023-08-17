"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UrlUtils = /** @class */ (function () {
    function UrlUtils() {
    }
    /**
     * 解析url中的参数
     * @param url
     */
    UrlUtils.prototype.getUrlParams = function (url) {
        var result = {};
        var params = url.split("?")[1].split("&");
        for (var i = 0; i < params.length; i++) {
            var temp = params[i].split("=");
            result[temp[0]] = temp[1];
        }
        return result;
    };
    /**
     * 获取url中的主机
     * @param url
     */
    UrlUtils.prototype.getHost = function (url) {
        var temp = url.split("//");
        var firstSlash = temp[1].indexOf("/");
        var host = temp[1].substring(0, firstSlash);
        return "".concat(temp[0], "//").concat(host);
    };
    return UrlUtils;
}());
exports.default = UrlUtils;
