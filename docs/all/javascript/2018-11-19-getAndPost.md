---
layout: post
title: get和post的区别
date: 2018-11-19 18:07:16
categories: javascript
pid: 20181119-180716
pin: 0
---
>谈一下get和post的区别

#### 最直观的区别就是GET把参数包含在URL中，POST通过request body传递参数。


>GET在浏览器回退时是无害的，而POST会再次提交请求。

>GET产生的URL地址可以被Bookmark,而POST不可以。

>GET请求会被浏览器主动cache,而POST不会,除非手动设置

>GET请求只能进行URL编码，而POST支持多种编码方式.

>GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会保留。

>GET请求在URL中传送的参数是长度限制，而POST没有

>对数据的数据类型，GET只接受ASCLL字符，而POST没有限制.

>GET比POST更不安全，因为参数直接暴露在URL上，最好不要传递敏感信息.

>GET参数通过URL传递，POST放在Request body中.

### GET和POST根本上是HTTP协议中的两种发送请求的方法.
### HTTP是基于TCP/IP的关于数据如何在万维网中如何通信的协议。

> HTTP是底层的TCP/IP.所以GET和POST的底层也是TCP/IP,也就是说，
GET/POST都是TCP链接。GET和POST能做的事情是一样一样的。
你要给GET加上request body,给POST带上url参数，技术上可行.

> HTTP只是一个行为标准,而TCP才是GET和POST怎么实现的基本


> 不同的浏览器和服务器会限制单次运输量来控制，(大多数)浏览器会限制URL的长度在2K个字节，
而(大多数)服务器最多处理64k大小的url。

> GET和POST还有一个重大区别，GET产生一个TCP数据包；POST产生两个TCP数据包；

>对于GET方式，浏览器会把http header和data一并发送出去，服务器响应200；
 而POST,浏览器先发送header,服务器响应100 continue，浏览器再发送data,服务器响应200 ok

  也就是说，GET只需要汽车跑一趟就把货送到了，而POST得跑两趟，第一趟，先去和服务器打个招呼“嗨，我等下要送一批货来，你们打开门迎接我”，然后再回头把货送过去。

###  1.GET与POST都有自己的语义，不能随便混用。
###  2.据研究，在网络环境好的情况下，发一次包的时间和发两次报的时间差别基本可以无视。而在网络环境差的情况下，两次包的TCP在验证数据包完整性上，有非常大的优点。
###  3.并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次。