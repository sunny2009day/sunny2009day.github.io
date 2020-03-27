---
layout: post
title: 数组扁平化
date: 2019-10-28 18:07:16
categories: javascript
pid: 20191028-180716
pin: 0
---
## 数组扁平化
> 数组扁平化是指将一个多维数组变为一维数组
`[1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]`

> 实现方式
- reduce 
遍历数组每一项,若值为数组则递归遍历,否则 concat;
```c 
function flatten(arr) {
  return arr.reduce((result, item)=> {
    return result.concat(Array.isArray(item)?flatten(item):item);
  })
}
```
reduce是数组的一种方法，它接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

reduce包含两个参数：回调函数，传给total的初始值
```c
// 求数组的各项值相加的和;
// total初始值为0
arr.reduce((total, item)=> {  // total为之前的计算结果，item为数组的各项值
    return total + item;
}, 0);
```
- 直接调用数组的flat方法,传参无线展开 arr.flat(Infinity);
- 使用
```c
json.stringify,
 console.log(JSON.stringify(arr).replace(/\[|\]\/g, '')
    .split(',').map(item => Number(item)))
```

- toString & split
调用数组的toString方法,将数组变为字符串然后再用split分隔还原为数组
```c
function flatten(arr) {
  return arr.toString().split(',').map(function(item){
    return Number(item);
  }) 
}
```
因为split分割后形成的数组的每一项值为字符串，所以需要用一个map方法遍历数组将其每一项转换为数值型

- join & split
上面的toString一样，join也可以将数组转换为字符串

```c
function flatten(arr) {
    return arr.join(',').split(',').map(function(item) {
        return parseInt(item);
    })
}
```
- concat 连接
  * concat可对数组展开一层，每此展开一个,while循环判断arr中是否还有数组,有就展开
```c
while(arr.some(item => Array.isArray(item))) {
  arr = [].concat(...arr)
}
```

- 递归
递归的遍历每一项,若为数组则继续遍历,否则concat
```c
function flatten(arr) {
  var res = [];
  arr.map(item => {
    if(Array.isArray(item)) {
      res = res.concat(flatten(item));
    } else {
      res.push(item);
    }
  })
  return res;
}
```
- 扩展运算符
es6的扩展运算符能将二维数组变为一维
`[].concat(...[1, 2, 3, [4, 5]]);  // [1, 2, 3, 4, 5]`

根据这个结果我们可以做一个遍历，若arr中含有数组则使用一次扩展运算符，直至没有为止。
```c
function flatten(arr) {
    while(arr.some(item=>Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
```
> 总结
- 数组flatten的核心是
遍历数组arr,若arr[i]为数组则递归遍历,直至arr[i]不为数组,然后与之前的结果concat

