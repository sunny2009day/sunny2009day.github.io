---
title: 关于vue项目开发遇到问题
date: 2020-05-22 12:38:11
---

### vue项目部署在本地build,代理到另一个vue的本地项目,报'invalid Host header'
- 新版的webpack-dev-server出于安全考虑,默认检查hostname,如果host 不是配置内的将中断访问
解决
```c
devServer: {
  disableHostCheck: true
}
```
- 对于vue-cli版本3.0的情况修改vue-config.js的配置
```c
module.exports = {
  devServer: {
    disableHostCheck: true
  }
}
```

### definePlugin定义的全局变量只能在script中显示process,vue的template不能显示需要挂载到当前组件实例
- main.js的入口文件中,process挂载在vue.property上是空对象