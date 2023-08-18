"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    /**
     * 等差数列求和公式
     * @param arr
     */
    MathUtils.prototype.sumOfArithmetic = function (arr) {
        if (arr.length === 0)
            return 0;
        return (arr[0] + arr[arr.length - 1]) * arr.length / 2;
    };
    /**
     * 等比数列求和公式
     * @param arr
     */
    MathUtils.prototype.sumOfGeometric = function (arr) {
        if (arr.length === 0)
            return 0;
        if (arr.length === 1)
            return arr[0];
        var q = arr[1] / arr[0];
        return arr[0] * (1 - Math.pow(q, arr.length)) / (1 - q);
    };
    /**
     * 已知三角形三条边求面积
     * @param a
     * @param b
     * @param c
     */
    MathUtils.prototype.triangleArea = function (a, b, c) {
        var p = (a + b + c) / 2;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    };
    /**
     * 求两个数的最大公约数
     * @param a
     * @param b
     */
    MathUtils.prototype.gcd = function (a, b) {
        var temp = 1;
        while (temp) {
            temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    };
    /**
     * 求两个数的最小公倍数
     * @param a
     * @param b
     */
    MathUtils.prototype.lcm = function (a, b) {
        var temp = this.gcd(a, b);
        return a * b / temp;
    };
    return MathUtils;
}());
exports.default = MathUtils;
