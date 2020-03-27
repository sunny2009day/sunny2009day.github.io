---
layout: post
title: Event-loop
categories: js
date: 2019-11-06 12:38:11
pid: 20191106-123811
pin: 100
---
## JavaScript 的运行机制
- 代码是`CPU`执行的,js是一种解释型的动态**单线程**语言,跨平台,即时编译,也不会有目标代码生成。这个过程通常由宿主环境（如浏览器、Node.js）包办。
- 浏览器进程(进程process计算机分配任务和调度的最先单位)，一个进程可以包括多个线程,js是线程执行的,并且**JavaScript 是单线程语言**，Web-Worker 还是 node 里面的cluster创造多线程环境,内部都是单线程执行，而且 cluster 还是进程管理相关；
- 单线程模型,即所有任务只能在一个线程上完成,前面的任务没做完,后面的任务只能等着;`js`的单线程形成了一个浏览器事件环, 主线程只有一个 `setTimeout`, `ajax`, `setInterval`, `requestFrameAnimation`事件， 事件环来实现任务的调度
- js 基本分组成 ： (BOM DOM) ECMAScript (es6模块) 模块的特性 api包 帮你实现文件操作服务器端的创建
- 单线程的优点
1> 高并发
2> 适合i/o密集
3> 解决切换上下文时间,锁的问题,节省内存
- 单线程的缺点
1> 不适合cpu密集
2> 易阻塞
## 进程和线程的区别
- 一个进程中可以有多个线程，比如渲染线程、JS 引擎线程、HTTP 请求线程等等,进程表示一个程序，线程是进程中的单位 ,主线程只有一个
- 1个进程可以占用1核cpu ，node可以（开 4 - 32个子进程）
- 多线程在单核cpu中其实也是顺序执行的，不过系统可以帮你切换那个执行而已，没有提高速度
- 多个cpu的话就可以在多个cpu中同时执行
## nodejs的应用
- nodejs 是runtime可以让js运行在服务端上,单线程
1. 写脚本,中间层,服务端渲染(vue, react)可以实现前后端分离，例如服务端的eggs,nest
2. 实现高性能的web服务

## 浏览器进程
> 浏览器是计算机应用程序,每一个tab页都会启动新的主进程和GPU进程;
![image.png](https://upload-images.jianshu.io/upload_images/14983171-fe6f56706aa61140.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> js线程执行的事件huan
**event loop**
 
![1573232016(1).jpg](https://upload-images.jianshu.io/upload_images/14983171-da38087f03e05551.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 同步任务和异步任务是广义的定义,更精细的是
微任务： promise.then ，MutationObserver(监视对DOM树所做更改)，process.nextTick
宏任务：script ，ajax ， 事件，requestFrameAnimation， setTimeout ，setInterval ，setImmediate （ie下），MessageChannel ，I/O ，UI rendering。
- 同一event table下,微任务会比宏任务快，js中会先执行script脚本
#### vue.nextTick(vue dom渲染都是异步的),dom渲染原生的是同步的,vue中把dom渲染变成异步，nextTick放到异步回调之后
可在[https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
执行异步同步事件有详细的讲解：如图:
![640.gif](https://upload-images.jianshu.io/upload_images/14983171-dd37f135328b1793.gif?imageMogr2/auto-orient/strip)

## node事件执行机制
- Node 和浏览器的Event Loop是两个有明确区分的事物。nodejs的event是基于libuv，而浏览器的event loop则在html5的规范中明确定义。
![image.png](https://upload-images.jianshu.io/upload_images/14983171-9830cd70b975328f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Node 的 Event Loop 分为 6 个阶段：
1. timers：定时器,执行setTimeout() 和 setInterval()中到期的callback。
2. pending callback: 上一轮循环中有少数的I/O callback会被延迟到这一轮的这一阶段执行
3 .idle, prepare：内部的一些准备操作
4 .poll: 最为重要的阶段，执行I/O callback，在适当的条件下会阻塞在这个阶段
5. check: 执行setImmediate的callback,检查阶段
6. close callbacks: 执行close事件的callback，例如socket.on('close'[,fn])、http.server.on('close, fn)
**poll 的i/o操作,如果没有check会阻塞在这里等定时器到达*时间，如果有check会在轮训完毕后立即执行**
- process.nextTick拥有一个自己的队列,是优先于promise.then的微任务,当前promise微任务完成之后处理nextTickQueue,如果存在 nextTickQueue，就会清空队列中的所有回调函数(then,catch)，并且优先于其他 microtask 执行(执行一次微任务处理一次回调)。
- setImmediate() 和 setTimeout()非常的相似执行时序受进程性能的限制;

## node与浏览器的event loop差异
**浏览器环境下，microtask的任务队列是每个macrotask执行完之后执行。而在Node.js中，microtask会在事件循环的各个阶段之间执行，也就是一个阶段执行完毕，就会去执行microtask队列的任务。**
 ![1573301160(1).jpg](https://upload-images.jianshu.io/upload_images/14983171-730829ffff64b37a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![1573303078(1).jpg](https://upload-images.jianshu.io/upload_images/14983171-e6b4252c0399f5b6.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)






