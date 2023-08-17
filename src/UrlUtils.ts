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

    /**
     * 获取url中的主机
     * @param url
     */
    getHost(url: string): string {
        const temp = url.split("//");
        const firstSlash = temp[1].indexOf("/");
        const host = temp[1].substring(0, firstSlash);
        return `${temp[0]}//${host}`;
    }

    /**
     * 获取url中的端口
     */
    getPort(url: string): string {
        const protocol = url.substring(0, url.indexOf("//"));
        const temp = url.split("//")[1];
        let index = temp.indexOf(':') + 1;
        let flag = true;
        let port = "";
        console.log(temp,index);
        while (flag) {
            const num = Number(temp.charAt(index));
            if (!isNaN(num) && num >= 0 || num <= 9) {
                port += num;
                index++;
            } else {
                flag = false;
            }
        }
        if (port === "") {
            port = protocol === "https:" ? "443" : "80";
        }
        return port;
    }

}