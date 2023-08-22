export default class DateUtils {
    /**
     * 下面分别是一天、一小时、一分钟的秒数，数值都是计算过的，直接用即可；
     * 目的是减少相关秒数的计算，提高代码的执行效率
     */
    public readonly secondsOfDays = 86400000;//一天的秒数
    public readonly secondsOfHours = 3600000;//一小时的秒数
    public readonly secondsOfMinutes = 60000;//一分钟的秒数


    constructor() {
    }


    dateFormat(format: string, date: Date | number): string {
        let targetDate = typeof date === "number" ? new Date(date) : date;
        const year = targetDate.getFullYear();
        const month = this.timeFormat(targetDate.getMonth() + 1);
        const day = this.timeFormat(targetDate.getDate());
        const hours = this.timeFormat(targetDate.getHours());
        const minutes = this.timeFormat(targetDate.getMinutes());
        const seconds = this.timeFormat(targetDate.getSeconds());
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
                result = `${year}-${month}-${day} ${Number(hours) - 12 > 0 ? 'pm' : 'am'} ${Number(hours) - 12}:${minutes}:${seconds}`;
                break;
            case "HH-MM-DD a HH:mm:ss C":
                result = `${year}年${month}月${day}日 ${Number(hours) - 12 > 0 ? '下午' : '上午'} ${Number(hours) - 12}时${minutes}分${seconds}秒`;
                break;
            case "a HH:mm:ss":
                result = `${Number(hours) - 12 > 0 ? 'pm' : 'am'} ${this.timeFormat(Number(hours) - 12)}:${minutes}:${seconds}`;
                break;
            case "a HH:mm:ss C":
                result = `${Number(hours) - 12 > 0 ? '下午' : '上午'} ${Number(hours) - 12}时${minutes}分${seconds}秒`;
                break;
            default:
                throw new Error("The date format you set has an error. Please check it");
        }
        return result;
    }

    private timeFormat(time: number): string {
        return time < 10 ? '0' + time : time + "";
    }

    /**
     * 计算两个日期的时间差
     * @param start
     * @param end
     */
    dateDiff(start: Date, end: Date): Array<number> {
        let diff = Math.abs(start.getTime() - end.getTime());
        const dayGap = Math.floor(diff / this.secondsOfDays);
        diff = diff % this.secondsOfDays;
        const hourGap = Math.floor(diff / this.secondsOfHours);
        diff = diff % this.secondsOfHours;
        const minutes = Math.floor(diff / this.secondsOfMinutes);
        diff = diff % this.secondsOfMinutes;
        const seconds = Math.floor(diff / 1000);
        return [dayGap, hourGap, minutes, seconds, diff % 1000];
    }

    /**
     * 获取某一年的第一天
     */
    getFirstDayOfYear(time: Date | number): string {
        const date = typeof time === "number" ? new Date(time) : time;
        return date.getFullYear() + "-01-01 00:00:00";
    }

    getLastDayOfYear(time: Date | number): string {
        const date = typeof time === "number" ? new Date(time) : time;
        const nextYear = date.getFullYear() + 1;
        const secondsOfNextYear = new Date(`${nextYear}-01-01 00:00:00`).getTime();
        return this.dateFormat("HH-MM-DD HH:mm:ss", secondsOfNextYear - this.secondsOfDays);
    }

    /**
     * 获取某个日期是当年的第几天
     * @param time
     */
    getDayOfYear(time: Date | number): number {
        const firstDay = this.getFirstDayOfYear(time);
        const date = typeof time === "number" ? new Date(time) : time;
        let numSecond = date.getTime() - new Date(firstDay).getTime();
        return Math.ceil(numSecond / this.secondsOfDays)
    }

    /**
     * 获取某个日期是这一年中第几周
     * @param time
     */
    getDayOfYearWeek(time: Date | number): number {
        const numDays = this.getDayOfYear(time);
        return Math.ceil(numDays / 7);
    }

    /**
     * 获取某一年的天数
     * @param year
     */
    getYearOfDay(year: string | number): number {
        const current = typeof year === "number" ? year : Number(year);
        if (isNaN(current)) {
            throw Error(`String "${current}" cannot be converted to a number`);
        }
        const currentYear = `${current}-01-01 00:00:00`;
        const nextYear = `${current + 1}-01-01 00:00:00`;
        const second = new Date(nextYear).getTime() - new Date(currentYear).getTime();
        return second / this.secondsOfDays;
    }

    /**
     * 获取某个月有多少天
     */
    getMonthOfDay(year: string | number, month: string | number): number {
        const year1 = typeof year === "string" ? Number(year) : year;
        const month1 = typeof month === "string" ? Number(month) : month;
        let nextMonth: number;
        let nextYear: number;
        if (isNaN(year1) || isNaN(month1)) {
            throw Error(`String "${year}" or "${month}" cannot be converted to a number`);
        }
        nextMonth = month1 === 12 ? 1 : month1 + 1;
        nextYear = month1 === 12 ? year1 + 1 : year1;
        const firstDayOfMonth = new Date(`${year1}-${month1}-01 00:00:00`).getTime();
        const firstDayOfNextMonth = new Date(`${nextYear}-${nextMonth}-01 00:00:00`).getTime();
        return (firstDayOfNextMonth - firstDayOfMonth) / this.secondsOfDays;
    }

}

