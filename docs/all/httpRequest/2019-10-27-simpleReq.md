---
layout: post
title: 简单请求和非简单请求
categories: simpleReq
date: 2019-10-27 12:38:11
pid: 20191027-123811
pin: 100
---
## 跨域资源共享 CORS 详解
> CORS允许浏览器向夸源服务器,发出XMLHttpRequest请求,从而克服了AJAX只能同源的使用的限制;

> 浏览器一旦发现ajax请求夸源,就是自动添加一些附加的头信息,有时还会多出一次附加的请求,但用户不会有感觉
 - CORS通信的关键是服务器,只要服务器实现了CORS接口,就可以夸源通信;

> CORS分简单请求(simple request)和非简单请求(not-so-simple request)

> 同时满足以下两大条件,属于简单请求
> 
（1) 请求方法是以下三种方法之一：
  HEAD  (只请求页面的首部,检查超链接的有效性,检查网页是否被修改,多用于自动搜索机器人获取网页的标志信息，获取rss种子信息，或者传递安全认证信息等)
  GET
  POST
（2）HTTP的头信息不超出以下几种字段：
  Accept
  Accept-Language
  Content-Language
  Last-Event-ID
  Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

> 基本流程
- 简单请求，浏览器直接发出CORS请求,头信息中，增加一个Origin字段;
- `Origin` 说明(协议+域名+端口)
- Origin指定的源不在许可范围内,服务器返回的头信息没有包含Access-Control-Allow-Origin字段,会被XMLHttpRequest的onerror回调函数捕获;反之,服务器返回的响应会多出几个头信息字段;
. `Access-Control-Allow-Origin:` // required *接收任意域名
. `Access-Control-Allow-Credentials`  // boolean 是否允许发送Cookie
. `Access-Control-Expose-Headers`   // 

> withCredentials 属性
- CORS默认不发送Cookie和HTTP认证信息,如果要把Cookie发到服务器,一方面要服务器同意,指定`Access-Control-Allow-Credentials`,另一方面，开发者必须在AJAX请求中打开withCredentials属性。

```c
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
```
否则，即使服务器同意发送Cookie，浏览器也不会发送。或者，服务器要求设置Cookie，浏览器也不会处理。

**需要注意的是，如果要发送Cookie，Access-Control-Allow-Origin就不能设为星号，必须指定明确的、与请求网页一致的域名服务器设置的域名才可以传Cookie,其他域名的Cookie并不会上传,且夸源原网页代码中的document.cookie也无法读取服务器域名下的Cookie。**

> 非简单请求
- 预检请求
 1. 请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json
 2. 非简单请求的CORS请求,会在正式通信之前增加一次HTTP查询请求，称为'预检'请求(preflight).
 3. client---(域名是否许可,可使用的HTTP动词和头信息字段)---肯定答复后,浏览器发送XMLHttpRequest;
- 预检请求的方法是OPTIONS,表示该请求用来询问,头信息关键字是Origin;特殊字段 `Access-Control-Request-Method` 和
`Access-Control-Request-Headers`(浏览器CORS请求会额外发送的头信息字段);

- 预检请求的回应
1. 服务器收到"预检"请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。
2. 服务器否定预检请求,触发XMLHttpRequest对象的onerror回调函数;
服务器回应的其他CORS相关字段如下:
`Access-Control-Allow-Methods`
`Access-Control-Allow-Headers`
`Access-Control-Allow-Credentials`
`Access-Control-Max-Age` ,预检有效期单位为妙;
3. 浏览器的正常请求和回应;
一旦服务器通过了"预检"请求，以后每次浏览器正常的CORS请求，就都跟简单请求一样，会有一个Origin头信息字段。服务器的回应，也都会有一个Access-Control-Allow-Origin头信息字段。

> 与JSONP比较
JSONP只支持GET请求，CORS支持所有类型的HTTP请求。JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。

> 请求常见的方式

HEAD： 只请求页面的首部。
POST： 请求服务器接受所指定的文档作为对所标识的URI的新的从属实体。
PUT： 从客户端向服务器传送的数据取代指定的文档的内容。
DELETE： 请求服务器删除指定的页面。
OPTIONS： 允许客户端查看服务器的性能。
TRACE： 请求服务器在响应中的实体主体部分返回所得到的内容。
PATCH： 实体中包含一个表，表中说明与该URI所表示的原内容的区别。
MOVE： 请求服务器将指定的页面移至另一个网络地址。
COPY： 请求服务器将指定的页面拷贝至另一个网络地址。
LINK： 请求服务器建立链接关系。
UNLINK： 断开链接关系。
WRAPPED： 允许客户端发送经过封装的请求。
Extension-mothed：在不改动协议的前提下，可增加另外的方法。


> 参考<http://www.ruanyifeng.com/blog/2016/04/cors.html>