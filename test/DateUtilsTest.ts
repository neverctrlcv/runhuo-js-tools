import DateUtils from "../src/DateUtils";
import {fdatasync} from "fs";

const dateUtils = new DateUtils();
// console.log(dateUtils.dateFormat("HH-MM-DD HH:mm:ss", new Date()));
// console.log(dateUtils.dateFormat("HH-MM-DD HH:mm:ss C", new Date()));
// console.log(dateUtils.dateFormat("HH-MM-DD", new Date()));
// console.log(dateUtils.dateFormat("HH-MM-DD C", new Date()));
// console.log(dateUtils.dateFormat("HH:mm:ss", new Date()));
// console.log(dateUtils.dateFormat("HH:mm:ss C", new Date()));
// console.log(dateUtils.dateFormat("HH-MM-DD a HH:mm:ss", new Date()));
// console.log(dateUtils.dateFormat("HH-MM-DD a HH:mm:ss C", new Date()));
// console.log(dateUtils.dateFormat("a HH:mm:ss", new Date()));
// console.log(dateUtils.dateFormat("a HH:mm:ss C", 1692192621932));

// const a=new Date();
// let b:Date;
// setTimeout(()=>{
//    b=new Date();
//    console.log(a.getTime());
//     console.log(b.getTime());
//     console.log(dateUtils.dateDiff(a,b));
// },3850);

console.log(dateUtils.getYearOfDay("2023"));