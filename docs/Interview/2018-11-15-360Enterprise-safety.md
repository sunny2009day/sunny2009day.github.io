---
layout: post
title: 360Enterprise-safety
date:   2018-11-15 18:07:16
categories: Interview
pid: 20181115-180716
image: jekyll.jpg
pin: 0
---
> 360企业安全面试记录

**1. 谈一下盒子模型**
> 网页设计中常听到的：内容(content)、内边距(padding)、边框(border)、外边距(margin),css盒子模型都具有这些属性;
z这些属性可以用日常生活中的常见事物盒子来比喻，是网页设计中css所使用的一种思维模型;

>
### 扩展IE盒子模型和w3c盒子模型
**W3C盒子模型如下**
![W3C盒子](/images/w3c_box_model.png "w3c盒子")
元素的高度是content的高和宽度，不算padding,margin,border宽高;

<font color='#ff000'>&emsp;&nbsp;&ensp;&#8194;W3C模型中：</font>
&emsp;
<font color='#ff000'>　CSS中的宽（width）=内容（content）的宽</font>    
&emsp;
<font color='#ff000'>  CSS中的高（height）=内容（content）的高</font>
**如果给一个元素设高10，margin为2，padding为2，boder为2，那实际的高度占布局的高度即为10+2*2+2*2+2*2=22**


**IE盒子模型如下**
![IE盒子](/images/IE_box_model.png "IE盒子")
元素的宽高 是content的宽或高加上padding,border的宽高
<font color='#ff000'>&emsp;&nbsp;&ensp;&#8194;W3C模型中：</font>
&emsp;
<font color='#ff000'>　CSS中的宽（width）=内容（content）的宽 +（border+padding）*2</font>  
**不包括margin的宽高**  
&emsp;
<font color='#ff000'>  CSS中的高（height）=内容（content）的高 +（border+padding）*2</font>
**不包括margin的宽高** 

**如果给一个元素设高50,margin为2，padding为2，boder为1，那实际的内容的高度即为50 -（2+1）*2 = 44**
**实际的占布局的高度为 50+2*2 =  54**


 
**2. 实现已知或未知宽度的垂直水平居中**

```c
 //1
 .wraper {
   position: relative;
   .box {
     position: absolute;
     top: 50%;
     left: 50%;
     transfrom: translate(-50%, -50%);
   }
 }

 //2
 .wraper {
   position: relative;
   .box {
     position: absolute;
     top: 50%;
     left: 50%;
     width: 100px;
     height: 100px;
     margin:-50px 0 0 -50px;
   }
 }
  //3
 .wraper {
   .box {
     display: flex;
     justify-content:center;
     align-item: center;
     height: 100px;
   }
 }
 //4
 .wraper {
   display: table;
   .box {
     display: table-cell;
     vertical-align: middle;
   }
 }
```
**css画箭头**
>如下图形，css在展示的页面内引入
> 
<div class="inline-block  inline-block  arrow_left"></div>
<div class="inline-block  diamond"></div>
<div class="inline-block  echelon"></div>
<div class="inline-block  parallelogram"></div>
<div class="inline-block  star"></div>
<div class="inline-block  hexagram"></div>
<div class="inline-block  hexagon" style="margin-left: 120px;"></div>
<div class="inline-block  heart-shaped"></div>
<div class="inline-block  ogival"></div>
<div class="inline-block  infinite"></div>
<div class="inline-block  prompt"></div>

**Object.creat(), Object.new(), {},三者之间的区别**
>点击此链接，站内访问 [Object](/2018/11/16/Object.html).

**javascript数组去重**
```c
 let newArr = [], arr = [2,3,4,4,3], key = '';
 //1 获取没有重复的最右一值放入新数组
 for(let i = 0,arrLength = arr.length; i<arrLength; i++ ) {
   for(let j=i+1; j<arrLength; j++) {
     if(arr[i] === arr[j]) {
       j = ++i;
     }
   }
   newArr.push(arr[i]);
 }
 //2 es6
 Array.from(new Set([1, 1, 1, 2, 3, 2, 4]));
 或[...new Set(array)]
 //es6 Set数据结构类似于数组，成员值是唯一的，有重复的值会自动去重。
 //Set内部使用===来判断是否相等，类似'1'和1会两个都保存，NaN和NaN只会保存一个

 //3 用indexOf()判断值是否存在，已存在就不添加，
 newArr = arr => {
   let innerNewArr = [];
   arr.forEach(key => {
     if(innerNewArr.indexOf(key)<0) {
       newArr.push(key);
     }
   });
   return innerNewArr;
 }
 //4 遍历数组添加到一个对象属性名，给属性赋值
  newArr = arr => {
   let innerNewArr = [];
   arr.forEach(key => {
     innerNewArr[key] = 0;
   });
   return Object.keys[innerNewArr];
 }
```
**setTimeout执行机制**
> settimeout(function,0);console.log('11');会先执行11，在执行function;

## 更多实例详见 [settime演示](/2018/11/19/setTimeout.html)

> 11位的手机号码，第四五六位，替换成*

**'12345678910'.replace(/(\d{3})\d{4}(\d{4})/,'$1****$2')**
**tel.substr(0, 3) + '****' + tel.substr(7)**

> 带#的url,正则取路由 url.match(/#\S*\?+/)//以“#”开头的\S非空白字符，“?”出现0或一次;
url.match(/#\S*\?+/)[0].replace('#','').replace('?','');

> 正则获取url的name参数的值
 new RegExp("(^|&)" + name + "=([^&]*)(&|$)");

> 非捕获元是 ?= (正向预查，在任何开始匹配圆括号内的正则表达式模式的位置来匹配搜索字符串) 和
  ?! (负向预查，在任何开始不匹配该正则表达式模式的位置来匹配搜索字符串)
  格式化英文中的金额
  (/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),  匹配一个数字，其后紧跟3个数字的组合至少一次(+)。且数字集合后不是数字。

> ES6中for of 不能遍历json数据，没有iteroable迭代器的属性,一般可配合map对象使用
es6中有Number,String, Boolean, Null, Undefined, Symbol, Object,7中基本属性
prototype
> 判断数据类型最稳定的方法,Object.prototype.toString.call([]) //=== '[object Array]';
> VUE中对子组件的数据通过props属性传值,子组件对其进行v-model绑定，不能实现双向数据流;

 