---
title: vuePress 搭建博客并部署到github
---

# 之前是jekyll,转vuePress
- 使用vuePress开发新的文档系统或修改现有markdown为vuePress在官网上有详细部署
- 关于主题和nav(头部导航),侧栏
  > nav中一级目录需要和sidebar中一致,可参考管网主题配置
- docs里创建.vuepress文件夹,public 用于存放静态文件包扣ico或网站用到的图片等
- 可以使用插件,相关如下
```c
plugins: [
      ['@vuepress/back-to-top', true],
      [
        'vuepress-plugin-mygitalk', {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 是否开启首页评论(default: true)
          home: true,
          // Gitalk配置
          gitalk: {
```
具体参考插件说明

## 主要是部署
- 整个项目的源码是md的需要,vuePress会生成html的静态文件githubPage才能识别
- 在GitHub创建一个 以GitHub用户名开头以github.io结尾的库,*不要初始化库*。
- 在package.json同级目录创建deploy.sh
- 在package.json中添加
```c
"scripts": {
    "deploy": "bash deploy.sh"
  },
```
- 直接运行

## 缺点
- 源码和build之后需要两个仓库或分支了
- 回到项目根目录,初始化git,添加remote为githubPage仓库的remote,新建分支`src`,提交
- `git init`
- `git remote add origin <ssh的仓库地址>`
- `git checkout -b <本地分支> origin/<远程分支>`
- 线上没有分支,可以先设置推送流,push自动会建立分支,gitBash会有提示

*以后每次更改,需要提交一下src分支,在deploy一下*
