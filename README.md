# 润火js工具库

基于TypeScript开发的js工具库，包括日期格式化、字符串处理、数组操作……

## API介绍

### DateUtils
| API        | 参数及类型                       | 参数说明   | 返回类型 |
|:-----------|-------------------------------|------|-----|
| dateFormat | format:string , date:Date \| number | format：需要将时间转换的格式，取值范围有（a表示12小时制，C表示中文）： **HH-MM-DD HH:mm:ss**、**HH-MM-DD HH:mm:ss C**、 **HH-MM-DD**、**HH-MM-DD C**、**HH:mm:ss**、**HH:mm:ss C**、**HH-MM-DD a HH:mm:ss**、 **HH-MM-DD a HH:mm:ss C**、**a HH:mm:ss** **a HH:mm:ss C**<br/>date：需要转换的日期或时间戳 |string|


### StringUtils
| API  | 参数及类型 | 参数说明 | 返回类型     |
| ---- | ---------- | ---------------- | ---- |
| replace | str:string , rep1:[string] , rep2:[string] | str：需要操作的字符串<br/>rep1：字符串中被代替的内容<br/>rep2：用来代替的内容<br/>注：当数组rep2的长度小于等于1时，将用该字符串代替rep1中的内容，否则rep1的长度必须与rep2的长度一一对应，即一一替换 | string |
| toUpperCase | args: string | args：需要操作的字符串 | string |
| toLowerCase | args: string | args：需要操作的字符串 | string |
| trim | str: string , type: number | str：需要操作的字符串<br/>type：操作的方式，取值范围为1、2、3、4<br/>1：表示去除字符串开头和结尾空格<br/>2：去除字符串开头的空格<br/>3：去除字符串结尾的空格<br/>4：去除字符串中所有的空格 | string |

