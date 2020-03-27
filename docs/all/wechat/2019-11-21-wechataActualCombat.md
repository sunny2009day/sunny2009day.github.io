---
layout: post
title:  微信小程序实战问题总结
date:   2018-11-21 18:07:16
categories: wechat
pid: 20181121-180716
pin: 0
---

### app.json中的window.navigationBarTextStyle 的值,导航栏标题颜色，仅支持 black/white
### wxml中已支持基本的dom标签

> 微信小程序js运行环境既不是Browser也不是Nodejs,运行在微信的App的上下文(不要纠结this指向了);不能操作Browser context 下的DOM,也不能通过Nodejs相关接口访问操作系统API,严格意义上,微信小程序并不是h5;

> 微信不能操作DOM 

> 微信部署用webpack打包，在打包过程中把以下变量屏蔽 Window.document.frame.self.location.navigator.localStorage.history.Caches.screen.alert.confirm.prompt.XMLHttpRequest.WebSocket

> 微信API中用AMD(asynchronous module definition),异步模块定义
> wePY小程序组件化开发框架
> 自定义组件的properties中可以使show:{type: String, value:''},或show: String,必须要写出type的类型