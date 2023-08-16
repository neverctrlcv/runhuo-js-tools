"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UrlUtils = /** @class */ (function () {
    function UrlUtils() {
    }
    /**
     * 解析url中的参数
     * @param url
     */
    UrlUtils.prototype.getUrlParam = function (url) {
        var result = {};
        var params = url.split("?")[1].split("&");
        for (var i = 0; i < params.length; i++) {
            var temp = params[i].split("=");
            result[temp[0]] = temp[1];
        }
        return result;
    };
    return UrlUtils;
}());
exports.default = UrlUtils;
