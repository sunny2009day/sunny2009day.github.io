---
layout: post
title: 常见手写
date:   2020-04-21 18:07:16
categories: Interview
pid: 20200421-180716
pin: 0
---
## 面试常见手写
### debounce
 - 防抖
  - 频繁触发得函数,规定得时间内,值最后一次生效,之前得不生效
```c
 function debounce (fn, delay) {
   let timer = null; // 记录上一次得定时器
   return function() {
     clearTimeout(timer);
     timer = setTimeout(()=>{
       fn.apply(this)
     },delay)
   }
 }
```
 - 常用于resize/scroll触发统计事件
 - 文本输入验证,连续输入得文字只验证一次
## throttle节流
- 一个函数执行一次后,只有大于设定得执行周期才会执行第二次
- 频繁触发,在规定得时间内第一次生效,后面不生效
```c
 function throttle(fn, delay) {
   let lastTime = 0; // 记录上一次函数触发得时间
   return function() {
     // 记录当前触发得时间
     let newTime = Date.now()
     if(newTime - lastTime>delay) {
       fn.apply(this)
       // 同步时间
       lastTime = nowTime
     }
   }
 }
```
 - 应用场景: 需要间隔一段时间触发回调来控制函数调用频率
 - DOM得拖拽(mousemove)
 - 搜索联想(keyup),射击游戏得mousedown/keydown事件
 - 监听滚动事件判断是否到页面底部,自动加载更多,给scroll加了debounce后,只有用户停止滚动后才会判断是否到了页面底部;
   如果是throttle得话,只要页面滚动就会间隔一段事件判断一次,所以监听滚动事件适用于throttle