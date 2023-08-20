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
        if (arr.length === 0)
            return 0;
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
     * 求平均值
     * @param arr
     */
    ArrayUtils.prototype.average = function (arr) {
        var sum = this.sum(arr);
        return sum / arr.length;
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
    /**
     * 判断数组中是否含有某个元素
     * @param arr
     * @param value
     */
    ArrayUtils.prototype.contains = function (arr, value) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === value) {
                return i;
            }
        }
        return -1;
    };
    /**
     * 截取数组
     * @param arr
     * @param start
     * @param end
     */
    ArrayUtils.prototype.subArray = function (arr, start, end) {
        end = end ? end : arr.length - 1;
        if (end > arr.length - 1 || start < 0) {
            throw Error("Array subscript out of bounds");
        }
        var arr1 = [];
        for (var i = start; i <= end; i++) {
            arr1.push(arr[i]);
        }
        return arr1;
    };
    ArrayUtils.prototype.isEmpty = function (arr) {
        if (!arr) {
            return true;
        }
        return arr.length === 0;
    };
    /**
     * 浅度克隆
     * @param arr
     */
    ArrayUtils.prototype.clone = function (arr) {
        var res = [];
        arr.forEach(function (item) {
            res.push(item);
        });
        return res;
    };
    return ArrayUtils;
}());
exports.default = ArrayUtils;
