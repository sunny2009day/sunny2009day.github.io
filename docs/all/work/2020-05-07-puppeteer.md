---
title: puppeteer初步使用遇到的问题
date: 2020-05-77 12:38:11
---
## 本地环境win10
 - 工作中有node端截图的需求,可以从canvas生成，但想渲染图表最方便其实是浏览器,尝试使用pupeteer
 - win10安装没有大问题，主要内置chromium,100多兆需要翻墙,使用公司vpn可以翻墙
 - 如果不能,先避免下载chromium,手动下载,或切换淘宝镜像源,有内置chromium包

## dockerfile部署到content os 7的容器云上
- 报错
```c
/node_modules/puppeteer/.local-chromium/linux-543305/chrome-linux/chrome: error while loading shared libraries: libXss.so.1: cannot open shared object file: No such file or directory
```
找了一堆文档,主要是chromium没有launch起来,容器中查看puppeteer中有.local-chromium的文件夹,
执行 
`ldd node_modules/puppeteer/.local-chromium/linux-737027/chrome-linux/chrome`动态列出依赖列表
如下:
```c
libpangocairo-1.0.so.0 => not found
libpango-1.0.so.0 => not found
libcairo.so.2 => not found
...
```
缺少很多依赖。。。 
坑啊
- 对于这种大型的库,看issue会有很多收货,比盲目网上找文章要快很多
- 甚至有人说,直接转phantomjs,在dockerfile中一股脑安装
`RUN yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 -y`
可以截图了,但是截图中的中文乱码~
- linux中缺少字体库,不管那个终端的库,截图都需要字体啊
# 安装仿宋体,容器是content os
`RUN yum -y install bitmap-fonts bitmap-fonts-cjk `
# ubuntu 安装
`apt-get install xfonts-wqy`
- 一般微软用雅黑字体比较多
  - 在微软 `c:\Windows\Fonts`中找到微软雅黑字体,拷贝到docker目录中
  - 每次build都copy
  ```c
  # 拷贝本地/data/app目录下src下微软雅黑到容器
   COPY src/assets/Fonts/msyh.ttc /usr/share/fonts/msyh.ttc
  ```