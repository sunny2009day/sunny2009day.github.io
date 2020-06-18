---
title: 浏览器兼容问题
date: 2020-03-27 12:38:11
---
# 记录,业务用到

## script得标签相关
- HTMLScriptElement即script标签的加载,默认是**获取脚本立即执行,阻塞页面加载**
 - async 立即请求文件，异步执行,不阻塞按顺的加载,当script加载完后阻塞渲染引擎,并立即执行文件内容
 - defer  立即请求,不阻塞渲染引擎,解析完HTML之后在执行文件内容
 - HTML5标准type属性,对应值'module',浏览器按ECMA Script6标准将文件当作模块进行解析,默认阻塞效果同`defer`,也可以配合`async`在请求完成后立即执行
 ------------------------
 - 渲染引擎解析html遇到script标签,会立即进行一次渲染，所以`script`要放在body
## link预处理

dns-prefetch | perconnect | prefetch/preload | prerender 
- | :-: | -: 
浏览器域名预解析并缓存,请求同域,省去查ip	| HTTP请求正式发给服务器之前预先执行操作,包括DNS,TSL协商,TCP握手,消除往返延迟 |	预先下载并缓存某个资源,prefetch浏览器忙被忽略,preload一定会被预先下载 | 不仅会加载资源,还会解析执行页面,预渲染
writable |	是否可修改属性的值；true：可修改属性的值；false：不可修改属性的值	|false　　
enumerable| 是否可枚举属性；true：可枚举，可通过for/in语句枚举属性；false：不可枚举	|false
configurable| 是否可修改属性的特性；|true：可修改属性的特性(如把writable从false改为true)；false：不可修改属性的特性 | false