import DateUtils from "../src/DateUtils";

const dateUtils = new DateUtils();
console.log(dateUtils.dateFormat("HH-MM-DD HH:mm:ss", new Date()));
console.log(dateUtils.dateFormat("HH-MM-DD HH:mm:ss C", new Date()));
console.log(dateUtils.dateFormat("HH-MM-DD", new Date()));
console.log(dateUtils.dateFormat("HH-MM-DD C", new Date()));
console.log(dateUtils.dateFormat("HH:mm:ss", new Date()));
console.log(dateUtils.dateFormat("HH:mm:ss C", new Date()));
console.log(dateUtils.dateFormat("HH-MM-DD a HH:mm:ss", new Date()));
console.log(dateUtils.dateFormat("HH-MM-DD a HH:mm:ss C", new Date()));
console.log(dateUtils.dateFormat("a HH:mm:ss", new Date()));
console.log(dateUtils.dateFormat("a HH:mm:ss C", 1692192621932));