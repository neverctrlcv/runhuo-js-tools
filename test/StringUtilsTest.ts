import StringUtils from "../src/StringUtils";
const stringUtils=new StringUtils();

// console.log(stringUtils.replace("asjkashBJKjjJKHb",["asj","KHb"],["123","678"]));
// console.log(stringUtils.replace("asjkashBJKjjJKHb",["asj","KHb"],["123"]));
// console.log(stringUtils.replace("asjkashBJKjjJKHb",["asj","KHb"],[]));
// console.log(stringUtils.toLowerCase("asjkashBJKjjJKHb"));
// console.log(stringUtils.toUpperCase("asjkashBJKjjJKHb"));
// console.log(stringUtils.trim(" asjk jsalk ",1));
// console.log(stringUtils.trim(" asjk jsalk ",2));
// console.log(stringUtils.trim(" asjk jsalk ",3));
// console.log(stringUtils.trim(" asjk jsalk ",4));
//
// console.log(stringUtils.isEmpty(" "))
// console.log(stringUtils.isEmpty(""))
// console.log(stringUtils.isEmpty(" 1 "))

//
// console.log(stringUtils.capitalize("abns"));
// console.log(stringUtils.capitalize("1abns"));
// console.log(stringUtils.capitalize("Abns"));

console.log(stringUtils.uncapitalize("ab1c"))
console.log(stringUtils.uncapitalize("Ab1c"))