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

}