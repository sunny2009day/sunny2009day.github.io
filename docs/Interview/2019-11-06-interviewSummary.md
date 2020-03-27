---
layout: post
title: 一些面试问题记录
date:   2019-11-06 18:07:16
categories: Interview
pid: 20191106-180716
pin: 0
---
> 
1. 原型链，每个构造函数都有一个prototype;
2. object中有__defineGetter__,vue2.x没有做兼容;
3. cookie怎么实现;
4. typeof 和 instanceof 的原理;
5. 页面速度优化;
6. 确保界面js加载完成; 
7. 前端自动化测试和提取公共组件发布公共插件; 
8. nodeJs的应用场景，优缺点;
9. 正则表单时查找一行语句的html标签; 
10. 原生js怎样调样式的添加浏览器厂商兼容,-o-transform,style.OTransform ; 
11. ie,其他浏览器的内核和差异，主要的兼容问题
12. opacity和visibility和display的区别
13. 事件BOM,vue-router和vuex的原理

> ie,其他浏览器的内核和差异，主要的兼容问题
- ie9启用新的js引擎chakra查克拉,ie内接trident,基于Trident内核的浏览器有
ie6,ie7,ie8(Trident 4.0) , ie9(trident 5.0) , ie10(trident6.0);
 世界之窗，360安全浏览器， 遨游2.0（3.0以上版本开始采用webkit内核），搜狗浏览器，腾讯TT；其中部分版本的浏览器是双核浏览器，甚至是多核，
- 火狐 gecko
- KDE开发的内核khtml,浏览器konqueror
- webkit由khtml发展而来,最常见的基于webkit内核的浏览器主要有:
apple的safari(win/mac/iphone/ipad),google的chrome,目前谷歌使用blink内核
、塞班手机浏览器,andriod手机默认的浏览器
- Presto(夸平台),opera内核,opera7.0及以后的版本采用的内核，之前的版本采用的内核是elektra,Presto内核对w3c的支持也很良好，presto对页面文字的解析方面的性能比webkit还要高，对页面有较高的阅读性,opera目前也适用内核是blink；
- 几个与浏览器有关的测试项目
1、V8引擎  现在很多双核浏览器都是用它来测试javascript引擎，分数越高越好
2、Acid3 这个主要是对网页标准的兼容性测试，分数越高表示越符合网页的开发标准，满分是100分
3、html5 测试对htm5标准的支持，分数越高越好
- 市场上还有很多
　  搜狗浏览器：兼容模式（IE：Trident）和高速模式（webkit）；
　　遨游浏览器：兼容模式（IE：Trident）和高速模式（webkit）；
　　QQ浏览器：普通模式（IE：Trident）和极速模式（webkit）；
　　360极速浏览器：基于谷歌（Chromium）和IE内核；
　　360安全浏览器：IE内核。
> display:none,visibility:hidden和opacity:0之间的区别
- display会引起重绘和回流，并不占据dom空间，其他只会引起重绘;
- display不会被子元素继承事件动画不复存在,而其他两个属性会被子元素继承，但visibility可设置子元素显示,opacity子元素不能设置opacity: 1重新显示，
- visibility事件和动画不可以触发,opacity可以触发

> 将带有子父级关系的数组,转成树形结构(经常用怎么可以不熟练,你是傻的吗)
