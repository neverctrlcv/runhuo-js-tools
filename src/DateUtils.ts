export default class DateUtils {
    constructor() {
    }

    dateFormat(format: string, date: Date | number): string {
        let targetDate = typeof date === "number" ? new Date(date) : date;
        const year = targetDate.getFullYear();
        const month = targetDate.getMonth() + 1;
        const day = targetDate.getDate();
        const hours = targetDate.getHours();
        const minutes = targetDate.getMinutes();
        const seconds = targetDate.getSeconds();
        let result: string;
        switch (format) {
            case "HH-MM-DD HH:mm:ss":
                result = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
                break;
            case "HH-MM-DD HH:mm:ss C":
                result = `${year}年${month}月${day}日 ${hours}时${minutes}分${seconds}秒`;
                break;
            case "HH-MM-DD":
                result = `${year}-${month}-${day}`;
                break;
            case "HH-MM-DD C":
                result = `${year}年${month}月${day}日`;
                break;
            case "HH:mm:ss":
                result = `${hours}:${minutes}:${seconds}`;
                break;
            case "HH:mm:ss C":
                result = `${hours}时${minutes}分${seconds}秒`;
                break;
            case "HH-MM-DD a HH:mm:ss":
                result = `${year}-${month}-${day} ${hours - 12 > 0 ? 'pm' : 'am'} ${hours - 12}:${minutes}:${seconds}`;
                break;
            case "HH-MM-DD a HH:mm:ss C":
                result = `${year}年${month}月${day}日 ${hours - 12 > 0 ? '下午' : '上午'} ${hours - 12}时${minutes}分${seconds}秒`;
                break;
            case "a HH:mm:ss":
                result = `${hours - 12 > 0 ? 'pm' : 'am'} ${hours - 12}:${minutes}:${seconds}`;
                break;
            case "a HH:mm:ss C":
                result = `${hours - 12 > 0 ? '下午' : '上午'} ${hours - 12}时${minutes}分${seconds}秒`;
                break;
            default:
                throw new Error("The date format you set has an error. Please check it");
        }
        return result;
    }

    /**
     * 计算两个日期的时间差
     * @param start
     * @param end
     */
    dateDiff(start: Date, end: Date): Array<number> {
        let diff = Math.abs(start.getTime() - end.getTime());
        const dayGap = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff = diff % (1000 * 60 * 60 * 24);
        const hourGap = Math.floor(diff / (1000 * 60 * 60));
        diff = diff % (1000 * 60 * 60);
        const minutes = Math.floor(diff / (1000 * 60));
        diff = diff % (1000 * 60);
        const seconds = Math.floor(diff / 1000);
        return [dayGap, hourGap, minutes, seconds, diff % 1000];
    }
}

