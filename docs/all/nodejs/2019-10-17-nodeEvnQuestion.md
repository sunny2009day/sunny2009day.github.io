---
layout: post
title: nodejs环境相关遇到的问题
date:   2019-10-17 18:07:16
categories: nodejs
pid: 20191017-180716
pin: 0
---

> nodeJs环境相关
 
- chalk是一个nodejs 控制台的颜色的插件
- process.cwd() 是当前执行node命令时候的文件夹地址 ——工作目录,保证了文件在不同的目录下执行时，路径始终不变

> package.json 中的bin，许多包有一个或多个可执行文件希望被安装到系统路径。在npm下要这么做非常容易(事实上，npm就是这么运行的)。
这需要在你的package.json中提供一个bin字段，它是一个命令名和本地文件名的映射。在安装时，如果是全局安装，npm将会使用符号链接把这些文件链接到prefix/bin，如果是本地安装，会链接到 **./node_modules/.bin/**。
比如，要使用myapp作为命令时可以这么做：
`{ "bin" : { "myapp" : "./cli.js" } }`
这么一来，当你安装myapp，npm会从cli.js文件创建一个到/usr/local/bin/myapp的符号链接(这使你可以直接在命令行执行myapp)。
如果你只有一个可执行文件，那么它的名字应该和包名相同，此时只需要提供这个文件路径(字符串)，比如：

```c
{
    "name": "my-program",
    "version": "1.2.5",
    "bin": "./path/to/program"
}
```
- 这和以下这种写法相同：
```c
{
    "name": "my-program",
    "version": "1.2.5",
    "bin": {
        "my-program": "./path/to/program"
    }
}
```
> npx是一种在npm中安装工具，也可以被单独的下载使用

> 多线程技术在服务端技术中已经发展的很成熟了，而在Web端的应用中却一直是鸡肋
在新的标准中，提供的新的WebWork API，让前端的异步工作变得异常简单。
使用：创建一个Worker对象，指向一个js文件，然后通过Worker对象往js文件发送消息，js文件内部的处理逻辑，处理完毕后，再发送消息回到当前页面，纯异步方式，不影响当前主页面渲染。

> 在debug中使用npm启动
很多时候我们将很长的启动命令及配置写在了package.json的scripts中，比如
```c
"scripts": {
  "start": "NODE_ENV=production PORT=8080 babel-node ./bin/www",
  "dev": "nodemon --inspect --exec babel-node --presets env ./bin/www"
},
```
我们希望让vscode使用npm的方式启动并调试，这就需要如下的配置
```c
{
  "name": "Launch via NPM",
  "type": "node",
  "request": "launch",
  "runtimeExecutable": "npm",
  "runtimeArgs": [
    "run-script", "dev"    //这里的dev就对应package.json中的scripts中的dev
  ],
    "port": 9229    //这个端口是调试的端口，不是项目启动的端口
}
```
> npm install inspect --debug-brk 使用谷歌浏览器进行调试nodejs  node --inspect --debug-brk xxx.js, brk第一行添加断点

> bable 中 only 属性只对特定目录进行解析,
` only: [__dirname, `${process.cwd()}/core`]`，多加参数目录无效

> express中渲染内容用res.render()，将会根据views中的模板文件进行渲染。如果不想使用views文件夹，想自己设置文件夹名字，那么app.set("views","mb");

> react-dom/server模块;
- ReactDOMServer 对象使你能够将组件渲染为静态标记。 通常，它在 Node 服务器上使用; 
- Nodejs Error: Can't set headers after they are sent,在一次请求后服务器返回两次或者两次以上的响应,解决:  一旦服务器返回,及时的使用return,避免一次请求后,返回多次响应；
- react-dom/server，服务端静态标记渲染，丢失绑定事件...,在React 15中，实现服务端渲染主要靠的是 ReactDOMServer 的 renderToString 和 renderToStaticMarkup方法。

> nodemone监测js修改自动重启

> `Error: Cannot find module 'lodash/cloneDeep'`    ，nodejs报错, 删node_modules,npm cache verfiy 重新yarn 问题解决，npm 和yarn混装容易出问题..

> nodejs 中npm 执行cd /目录或cd..虽然控制台没有变化，但是process中已经改变了

> npm 同时执行两条监听命令，使用 && 链接的话，会停留在第一个命令执行监听，第二个命令就得不到执行，&并行启动，使用 |连接,可以开启两条监听命令
> nvm不支持Windows,使用替代品,nvm-windows