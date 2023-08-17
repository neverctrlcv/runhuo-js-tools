export default class ArrayUtils {
    constructor() {
    }

    /**
     * 对数组进行求和
     * @param arr
     */
    sum(arr: Array<string> | Array<number> | Array<number | string>): number {
        if (arr.length===0)
            return 0;
        let result: number = 0;
        for (let i = 0; i < arr.length; i++) {
            let temp = arr[i];
            if (typeof temp === "string") {
                let num = Number(temp);
                if (isNaN(num)) {
                    throw Error(`String "${temp}" cannot be converted to a number`)
                }
                result += num;
                continue;
            }
            result += temp;
        }
        return result;
    }

    /**
     * 获取数组中的最值
     * 当数组的长度为0时，直接返回null
     * 当数组的长度为1时，直接返回下标为0的数据
     * 当数组的长度大于等于2时，遍历数组找出最值，最后再返回
     * @param arr
     * @param type
     */
    getMaximum(arr: Array<number>, type: boolean): number | null {
        if (arr.length === 0) {
            return null;
        }
        if (arr.length === 1) {
            return arr[0];
        }
        let maximum = arr[0];
        for (let i = 1; i < arr.length; i++) {
            let temp = arr[i];
            if (type && temp > maximum) {
                maximum = temp;
            } else if (!type && temp < maximum) {
                maximum = temp;
            }
        }
        return maximum;
    }


}