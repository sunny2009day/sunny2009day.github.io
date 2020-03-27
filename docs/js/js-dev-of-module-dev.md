---
layout: post
title: js-模块化开发的发展
categories: js
date: 2019-11-06 12:38:11
pid: 20191106-123811
pin: 100
---

# 模块化发展历程

早期编写javascript时,只需在script标签内写入javascript的代码就可以满足对页面交互的需要。但是之间的简粗暴的编写会带来逻辑混乱,文件依赖管理问题,全局变量暴露,开发效率低,等问题;为了解决这些问题，提出了很多的解决方案,其中javascript模块化编程是目前最有效的一种方式.
![image.png](https://upload-images.jianshu.io/upload_images/14983171-554aab5a0116e339.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

先驱者Commonjs

09年nodejs问世之后,主要用于服务器编程,服务器端必须要有模块化开发的方式，因此commonjs社区制定了一个与社区同名的关于模块化的规范-commonjs.

Commonjs规范分为三部分:

module(模块标识) require(模块引用) exports(模块定义）

module变量在每个模块内部，就代表当前模块；

exports属性是对外的接口，用于导出当前模块的方法或变量；

require()用来加载外部模块，读取并执行js文件，返回该模块的exports对象；

根据CommonJS规范的规定，每个文件就是一个模块，有自己的作用域，也就是在一个文件里面定义的变量、函数、类，都是私有的，对其他文件是不可见的。
```c
// a.js

constname="max";

constgetName=function()

{returnname;}
```
上面代码中，变量name和函数getName，是当前文件a.js私有的，其他文件不可见。如要在其他的文件中访问变量name，最好的方式是输出模块对象module.exports:
```c
// a.js
const name = "max";
const getName = function() {
  return name;
}
module.exports.getName = getName;
```
如上通过module.exports对象扩展了一个方法，该方法就是模块外部与内部通信的桥梁。加载模块需使用require方法，该方法读取一个文件并执行，最后返回require加载文件内部的module.exports对象。
```c
var object = require('./a.js');
console.log(object.getName());  //max
```
commonjs加载模块的同步的,从本地硬盘加载,每个文件就是一个模块,但是浏览器端文件与网速有关，前面的文件如果没有加载完成,浏览器会失去响应,不适合同步加载,但模块化开发管理势在必行,针对这个需求浏览器的模块化规范就产生了 ——AMD!
![image.png](https://upload-images.jianshu.io/upload_images/14983171-69f7da55f5cdfa6a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## AMD(Asynchronous Module Definition)异步模块定义
AMD采用异步方式加载模块,回调函数中执行主逻辑,因此模块的加载不影响它后面的模块的运行.
```c
define(id?, deps?, factory);
```
**规范如下：**
用全局函数define来定义模块;
id为模块标识;
deps为依赖的模块数组;
如果factory为函数，模块对外暴漏API的方法有三种：return任意类型的数据;
如果factory为对象，则该对象即为模块的返回值
在加载模块方面，AMD和CommonJs都是使用require。
```c
require([module]);
```
参数[module]是一个c数组,里面的成员就是需要加载的模块
```c
// 启动程序
requirejs([module], callback);
```
虽然require.js实现了异步的模块化，解决了命名冲突，文件依赖，增加文件的独立性降低了耦合度，但它仍然有一些不足的地方，在使用require.js的时候，我们必须要提前加载所有的依赖，然后才可以使用，而不是需要使用时再加载，使得初次加载其他模块的速度较慢，提高了开发成本。
由此赖加载方式(异步加载),用到谁就加载谁而生;
![image.png](https://upload-images.jianshu.io/upload_images/14983171-f1f7271a870228ca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
**对于AMD模块的依赖加载**
```c
Ajs 依赖了b。js
b.js 依赖了c.js 

解析: a依赖b，b依赖c,c是否还有依赖?no, 加载c文件，返回加载b,返回加载a
所以依赖关系 a-b-c,但实际的加载顺序c-b-a
```
**对于amd依赖的解析**
```c
// a,js ，书写同步，加载异步
define(function(require,  exports, module) {
  var b = require(“b,js”);
 // 逻辑代码
   exports.a = xxx;
   b.xxxx
});
```
先静态化,正则解析require(b.js)，提取，放入deps[“b.js”],看是否是依赖
```c
parseDependencies（factory.toString()）;
var require = /\brequire\s*\*”([“])(,+?)\1\s*\)/g/;

\b 边界符
require\s([“’](.+?)\1)    可单引号或双引号
\s* 一个或多个的空格
\1 反向引用
```

![image.png](https://upload-images.jianshu.io/upload_images/14983171-68c3713c26102d43.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**如果面试中遇到模块化开发的时候,可以从最开始的立即执行函数,adm,cmd，到es6的module,傥傥而谈**

## es6的模块化
1. export 对其进行暴露（输出）
2. import的形式将这个变量进行引入
```c
export let myName="laowang";  // 导出

import {myName} from "./test.js"; // 引入
console.log(myName);//laowang
···
如果要输出多个变量可以将这些变量包装成对象进行模块化输出：
```c
let myName="sun";
let myAge=20;
let myfn=function(){
    return "我是"+myName+"！今年"+myAge+"岁了"
}
export {
    myName,
    myAge,
    myfn
}
/******************************接收的代码调整为**********************/
import {myfn,myAge,myName} from "./test.js";
console.log(myfn()); // 我是sun！今年20岁了
console.log(myAge); // 20
console.log(myName); // sun
```
如果你不想暴露模块当中的变量名字，可以通过as来进行操作:
```c
export {
myName as name }
import * as info from "./test.js";//通过*来批量接收，as 来指定接收的名字
```
也可以默认导出（default export）
```c
export default function(){
    return "默认导出一个方法"
}
```
**一个模块只能有一个默认导出，对于默认导出，导入的名称可以和导出的名称不一致。**
可以将所有需要导出的变量放入一个对象中，然后通过default export进行导出,也支持混合导出
```c
export default {
    myFn(){
        return "默认导出一个方法"
    },
    myName:"111"
}
export var myName="111";
```
**重命名export和import**
导入多个文件中,变量名字相同,会产生命名冲突,es6提供了重命名的方法,导入时可以如下:
```c
export let myName="我来自test1.js";
 
export let myName="我来自test2.js";
import {myName as name1} from "./test1.js";
import {myName as name2} from "./test2.js";
console.log(name1);//我来自test1.js
console.log(name2);//我来自test1.js
```





