"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    /**
     * 对数组进行求和
     * @param arr
     */
    ArrayUtils.prototype.sum = function (arr) {
        var result = 0;
        for (var i = 0; i < arr.length; i++) {
            var temp = arr[i];
            if (typeof temp === "string") {
                var num = Number(temp);
                if (isNaN(num)) {
                    throw Error("String \"".concat(temp, "\" cannot be converted to a number"));
                }
                result += num;
                continue;
            }
            result += temp;
        }
        return result;
    };
    /**
     * 获取数组中的最值
     * 当数组的长度为0时，直接返回null
     * 当数组的长度为1时，直接返回下标为0的数据
     * 当数组的长度大于等于2时，遍历数组找出最值，最后再返回
     * @param arr
     * @param type
     */
    ArrayUtils.prototype.getMaximum = function (arr, type) {
        if (arr.length === 0) {
            return null;
        }
        if (arr.length === 1) {
            return arr[0];
        }
        var maximum = arr[0];
        for (var i = 1; i < arr.length; i++) {
            var temp = arr[i];
            if (type && temp > maximum) {
                maximum = temp;
            }
            else if (!type && temp < maximum) {
                maximum = temp;
            }
        }
        return maximum;
    };
    return ArrayUtils;
}());
exports.default = ArrayUtils;
