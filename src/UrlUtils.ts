interface obj {
    [key: string]: any
}

export default class UrlUtils {
    constructor() {
    }

    /**
     * 解析url中的参数
     * @param url
     */
    getUrlParams(url: string): obj {
        let result: obj = {};
        let params = url.split("?")[1].split("&");
        for (let i = 0; i < params.length; i++) {
            let temp = params[i].split("=");
            result[temp[0]] = temp[1];
        }
        return result;
    }

}