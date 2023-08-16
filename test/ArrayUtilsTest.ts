import ArrayUtils from '../src/ArrayUtils';

const arrayUtils=new ArrayUtils();


const arr1:any[]=[100,"100","11",100];
const arr2=[100,100];
const arr3=["100","11"];
console.log(arrayUtils.sum(arr1));
console.log(arrayUtils.sum(arr2));
console.log(arrayUtils.sum(arr3));



const arr4=[100,100,80,10,200,140,0,-1];
console.log(arrayUtils.getMaximum(arr4,true));
console.log(arrayUtils.getMaximum(arr4,false));