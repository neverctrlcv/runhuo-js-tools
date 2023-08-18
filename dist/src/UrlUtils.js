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
    /**
     * 获取url中的端口
     */
    UrlUtils.prototype.getPort = function (url) {
        var protocol = url.substring(0, url.indexOf("//"));
        var temp = url.split("//")[1];
        var index = temp.indexOf(':') + 1;
        var flag = true;
        var port = "";
        console.log(temp, index);
        while (flag) {
            var num = Number(temp.charAt(index));
            if (!isNaN(num) && num >= 0 || num <= 9) {
                port += num;
                index++;
            }
            else {
                flag = false;
            }
        }
        if (port === "") {
            port = protocol === "https:" ? "443" : "80";
        }
        return port;
    };
    return UrlUtils;
}());
exports.default = UrlUtils;
