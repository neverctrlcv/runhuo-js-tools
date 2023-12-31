export default class MathUtils {
    constructor() {
    }

    /**
     * 等差数列求和公式
     * @param arr
     */
    sumOfArithmetic(arr: Array<number>): number {
        if (arr.length === 0)
            return 0;
        return (arr[0] + arr[arr.length - 1]) * arr.length / 2;
    }

    /**
     * 等比数列求和公式
     * @param arr
     */
    sumOfGeometric(arr: Array<number>): number {
        if (arr.length === 0)
            return 0;
        if (arr.length === 1)
            return arr[0];
        const q = arr[1] / arr[0];
        return arr[0] * (1 - Math.pow(q, arr.length)) / (1 - q);
    }

    /**
     * 已知三角形三条边求面积
     * @param a
     * @param b
     * @param c
     */
    triangleArea(a: number, b: number, c: number): number {
        const p = (a + b + c) / 2;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }

    /**
     * 求两个数的最大公约数
     * @param a
     * @param b
     */
    gcd(a: number, b: number): number {
        let temp = 1;
        while (temp) {
            temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }

    /**
     * 求两个数的最小公倍数
     * @param a
     * @param b
     */
    lcm(a: number, b: number): number {
        const temp = this.gcd(a, b);
        return a * b / temp;
    }

}