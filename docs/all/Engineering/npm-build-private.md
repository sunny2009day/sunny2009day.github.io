---
title: npm 搭建私有仓库
categories: Engineering
date: 2019-11-06 12:38:11
pid: 20191106-123811
pin: 100
---
**有些规模的前端团队都需要构建自己的npm**
- 基本上面试有些规模的公司,都会这样，多么痛的领悟
- 查找相关资料
1> Sinopia ，据说sinoipa不支持包命名空间,sinopia在代理到npmjs.org公有库时将@符号转码为%40，致使在公有库中找不到对应的包，返回404 ，简单点说就是 @angular/core 代理请求的时候被转换成了 %40angular/core，所以需要在代理请求发出之前将其转回 @angular/core,且作者已经不更新未尝试直接放弃，
2> verdaccio

## 操作
> 使用npm 全局安装
`pm install –global verdaccio`
> 运行
- 安装完成后直接输入 verdaccio 命令即可运行
![1573486032(1).jpg](https://upload-images.jianshu.io/upload_images/14983171-d127565f4321b609.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 修改verdaccio的配置文件
```c
# #号后面是注释
# 所有包的缓存目录
storage: ./storage
# 插件目录
plugins: ./plugins

#开启web 服务,能够通过web 访问
web:
  # WebUI is enabled as default, if you want disable it, just uncomment this line
  #enable: false
  title: Verdaccio
#验证信息
auth:
  htpasswd:
    #  用户信息存储目录
    file: ./htpasswd
    # Maximum amount of users allowed to register, defaults to "+inf".
    # You can set this to -1 to disable registration.
    #max_users: 1000

# a list of other known repositories we can talk to
#公有仓库配置
uplinks:
  npmjs:
    url: https://registry.npmjs.org/

packages:
  '@*/*':
    # scoped packages
    access: $all
    publish: $authenticated

    #代理 表示没有的仓库会去这个npmjs 里面去找 ,
    #npmjs 又指向  https://registry.npmjs.org/ ,就是上面的 uplinks 配置
    proxy: npmjs

  '**':
    # 三种身份,所有人,匿名用户,认证(登陆)用户
    # "$all", "$anonymous", "$authenticated"

    #是否可访问所需要的权限
    access: $all

    #发布package 的权限
    publish: $authenticated

    # 如果package 不存在,就向代理的上游服务发起请求
    proxy: npmjs

# To use `npm audit` uncomment the following section
middlewares:
  audit:
    enabled: true
# 监听的端口 ,重点, 不配置这个,只能本机能访问
listen: 0.0.0.0:4873
# log settings
logs:
  - {type: stdout, format: pretty, level: http}
  #- {type: file, path: verdaccio.log, level: info}
```
可在线查看verdaccio的全部配置
[verdaccio的全部配置](https://github.com/verdaccio/verdaccio/blob/master/conf/full.yaml)

- 在网页上打开http://localhost:4873
. 相当于在本地搭建一个类似npm的仓库,不过只能在能连接到127.0.0.1:4873的内网使用;
> 常用配置
- storage： 仓库保存的地址，也是发布组件（npm publish）时仓库保存的地址 。
- auth： htpasswd file：账号密码的文件地址，初始化时不存在，可指定需要手动创建。
- max_users：默认1000，为允许用户注册的数量。
为-1时，不允许用户通过npm adduser注册。但是，当为-1时，可以通过直接编写htpasswd file内容的方式添加用户。有且只有一个用户
- uplinks: 配置上游的npm服务器，主要用于请求的仓库不存在时到上游服务器去拉取。
- packages: 配置模块。access访问下载权限,publish包的发布权限。
> 具体使用
- 当前npm 服务指向 本地 
`npm set registry http://localhost:4873`
- 注册用户 
`npm adduser –registry http://localhost:4873`
- 按照提示输入userName 和 password,email
  输入后就注册完成
- 可检查当前是否是注册用户
`npm who am i`
- 按照npm publish 的标准格式发布包
```c
npm publish
```
- 待控制台执行成功就可以打开http://localhost:4873,此时,如下图,显示刚刚publis的包

 ![image.png](https://upload-images.jianshu.io/upload_images/14983171-f5611617d8885991.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 项目中使用
**注意此时npm 的registry指向http://localhost:4873/"的本地地址,只能内网访问**;
`nrm current`查看不到当前的镜像情况
- npm i 其他公共的包也是可以的,因为她默认从本地安装,如果本地没有,就从config.yaml配置的上游的npm服务器，主要用于请求的仓库不存在时到上游服务器去拉取。


![image.png](https://upload-images.jianshu.io/upload_images/14983171-039aa1f8c4b6c425.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 此时可使用`npm i <自定义的包名>`便可安装到新项目的node_modules中
- 在下图中如果自定义的包执行了bin命令，可直接在package.json 的script中通过包名执行包对应的命令,如下会启动包`pack-sun`的pack-sun的bin命令;

![image.png](https://upload-images.jianshu.io/upload_images/14983171-6d3147ae2d2d68a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> 发布以@开头命名的作用域包
- 为了便于包管理和认证可以发布@开头的cluster
- 初始化npm包
`npm init --scope=<命名空间>`
进行操作之后,publish
`npm publish --access public`,在publish时添加--access public参数告知npm这不是一个私有包
- 可以设置 `npm config set scope <your_scope>`指定npm init --scope的域名(尝试在verdaccio上无效)
 
