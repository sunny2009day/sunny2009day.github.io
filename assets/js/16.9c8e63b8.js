(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{276:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"之前是jekyll-转vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#之前是jekyll-转vuepress"}},[t._v("#")]),t._v(" 之前是jekyll,转vuePress")]),t._v(" "),a("ul",[a("li",[t._v("使用vuePress开发新的文档系统或修改现有markdown为vuePress在官网上有详细部署")]),t._v(" "),a("li",[t._v("关于主题和nav(头部导航),侧栏\n"),a("blockquote",[a("p",[t._v("nav中一级目录需要和sidebar中一致,可参考管网主题配置")])])]),t._v(" "),a("li",[t._v("docs里创建.vuepress文件夹,public 用于存放静态文件包扣ico或网站用到的图片等")]),t._v(" "),a("li",[t._v("可以使用插件,相关如下")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/back-to-top'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-mygitalk'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否启用(关闭请设置为false)(default: true)")]),t._v("\n          enable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否开启首页评论(default: true)")]),t._v("\n          home"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Gitalk配置")]),t._v("\n          gitalk"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n")])])]),a("p",[t._v("具体参考插件说明")]),t._v(" "),a("h2",{attrs:{id:"使用gittalk-实现评论功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用gittalk-实现评论功能"}},[t._v("#")]),t._v(" 使用gitTalk,实现评论功能")]),t._v(" "),a("ul",[a("li",[t._v("主要是用了插件")])]),t._v(" "),a("h2",{attrs:{id:"主要是部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要是部署"}},[t._v("#")]),t._v(" 主要是部署")]),t._v(" "),a("ul",[a("li",[t._v("整个项目的源码是md的需要,vuePress会生成html的静态文件githubPage才能识别")]),t._v(" "),a("li",[t._v("在GitHub创建一个 以GitHub用户名开头以github.io结尾的库,"),a("em",[t._v("不要初始化库")]),t._v("。")]),t._v(" "),a("li",[t._v("在package.json同级目录创建deploy.sh")]),t._v(" "),a("li",[t._v("在package.json中添加")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bash deploy.sh"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("ul",[a("li",[t._v("直接运行")])]),t._v(" "),a("h2",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ul",[a("li",[t._v("源码和build之后需要两个仓库或分支了")]),t._v(" "),a("li",[t._v("回到项目根目录,初始化git,添加remote为githubPage仓库的remote,新建分支"),a("code",[t._v("src")]),t._v(",提交")]),t._v(" "),a("li",[a("code",[t._v("git init")])]),t._v(" "),a("li",[a("code",[t._v("git remote add origin <ssh的仓库地址>")])]),t._v(" "),a("li",[a("code",[t._v("git checkout -b <本地分支> origin/<远程分支>")])]),t._v(" "),a("li",[t._v("线上没有分支,可以先设置推送流,push自动会建立分支,gitBash会有提示")])]),t._v(" "),a("p",[a("em",[t._v("以后每次更改,需要提交一下src分支,在deploy一下")])])])}),[],!1,null,null,null);s.default=n.exports}}]);