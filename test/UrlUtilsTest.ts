import UrlUtils from '../src/UrlUtils';

const urlUtils=new UrlUtils();
// console.log(new Date().getTime());
console.log(urlUtils.getPort("http://localhost?a=111&b=23323&password=122121112"))