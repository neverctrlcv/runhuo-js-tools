/**
 * 字符串工具类
 */
export default class StringUtils {
    constructor() {
    }

    /**
     * 实现多个字符串的替换
     * @param str
     * @param rep1
     * @param rep2
     */
    replace(str: string, rep1: Array<string>, rep2: Array<string>): string {
        if (rep2.length > 1 && rep1.length === rep2.length) {
            for (let i = 0; i < rep2.length; i++) {
                str = str.replace(rep1[i], rep2[i])
            }
        } else if (rep2.length === 1) {
            for (let i = 0; i < rep1.length; i++) {
                str = str.replace(rep1[i], rep2[0])
            }
        }
        return str;
    }

    /**
     * 将字符串中字母转成大写
     * @param args
     */
    toUpperCase(args: string): string {
        return args.toUpperCase();
    }

    /**
     * 将字符串中的字母转成小写
     * @param args
     */
    toLowerCase(args: string): string {
        return args.toLowerCase();
    }

    /**
     * 去除字符串中的空格
     * @param str
     * @param type
     */
    trim(str: string, type: number): string {
        let result: string = "";
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
                for (let i = 0; i < str.length; i++) {
                    const ch = str.charAt(i);
                    if (ch !== " ") {
                        result = result + ch;
                    }
                }
                break;
            default:
                throw Error("Error in parameter passed by method StringUtils. trim");
        }
        return result;
    }

    /**
     * 判断两个字符串是否相等
     * @param str1
     * @param str2
     */
    equals(str1: string, str2: string): boolean {
        if (str1.length !== str2.length) {
            return false;
        }
        for (let i = 0; i < str1.length; i++) {
            const ch1 = str1.charAt(i);
            const ch2 = str2.charAt(i);
            if (ch2 !== ch1) {
                return false
            }
        }
        return true;
    }

    /**
     * 判断字符串是否为空（trim后判断）
     * @param str
     */
    isBlank(str: string | null): boolean {
        if (str === null || str.length === 0 && str === "")
            return true;
        const str1 = this.trim(str, 1);
        return (str1.length === 0 && str1 === "");
    }

    /**
     * 判断字符串是否为空（不trim后判断）
     * @param str
     */
    isEmpty(str: string | null): boolean {
        return (str === null || str.length === 0 && str === "");
    }

    /**
     * 将字符串首字符进行大写
     * @param str
     */
    capitalize(str: string): string {
        if (str === "") {
            return str;
        }
        const char = this.toUpperCase(str.charAt(0));
        return char + str.substring(1);
    }

    /**
     * 将字符串首字符进行小写
     * @param str
     */
    uncapitalize(str: string): string {
        if (str === "") {
            return str;
        }
        const char = this.toLowerCase(str.charAt(0));
        return char + str.substring(1);
    }

}