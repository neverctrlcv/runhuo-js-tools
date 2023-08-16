import UrlUtils from '../src/UrlUtils';

const urlUtils=new UrlUtils();
// console.log(new Date().getTime());
console.log(urlUtils.getUrlParams("https://localhost:8080?a=111&b=23323&password=122121112"))