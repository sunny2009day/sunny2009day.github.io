(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{310:function(t,s,n){"use strict";n.r(s);var a=n(5),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("一 非父子兄弟关系的组件之间传值bus总线机制")])]),t._v(" "),n("ul",[n("li",[t._v("1、新建空vue")])]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("var Bus "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nBus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'事件名字'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'数据'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nBus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'事件名字'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" content "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可进行回调")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("经过webpack打包后可能会出现Bus局部作用域的情况，即引用的是两个不同的Bus，导致不能正常通信")])]),t._v(" "),n("ul",[n("li",[t._v("2、直接将Bus注入到Vue根对象中，")])]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Bus "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nvar app"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   el"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n　　 data"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n　　　　Bus\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("　　\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在子组件中通过this.$root.Bus.$on(),this.$root.Bus.$emit()来调用")]),t._v("\n")])])]),n("ul",[n("li",[t._v("3、将bus挂载到vue.prototype上（这里用了插件的写法）")])]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v(" import Bus from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// plugin/index.js")]),t._v("\n let install "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" function "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置eventBus")]),t._v("\n   Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bus "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Bus")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n export "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("install"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n import Vue from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n import plugin from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./plugin/index'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n Vue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("在子组件中通过  this.bus.$on();this.bus.$emit;来调用")]),t._v(" "),n("blockquote",[n("p",[t._v("注意：注册的总线事件要在组件销毁时卸载，否则会多次挂载，造成触发一次但多个响应的情况")])]),t._v(" "),n("blockquote",[n("p",[t._v("self check source code\nvue中generate可生成ref.render的匿名函数, with (this) 中包裹着组件的DOM树结构")])]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("function "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("anonymous")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   with "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("this"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_c")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           attrs"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n               "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_c")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           class"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("calcClass")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("_v")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"哈哈哈哈"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("二. VUE就算是多页面入口，项目编译失败，也会影响其他入口也页面")])]),t._v(" "),n("blockquote",[n("p",[t._v("三. toLocaleString，方法可根据本地时间把 Date 对象转换为字符串，并返回结果\n"),n("code",[t._v("1234.toLocaleString = 1,234")])])]),t._v(" "),n("blockquote",[n("p",[t._v("四. js的dom操作，removeChild删除节点从索引最大值开始删除，采用递减的方法，这样索引便不会移动改变了。均不能完全的删除所有的子节点（FireFox中把空白区域也\n当成节点，所以删除结点的结果会不一样的）")])]),t._v(" "),n("blockquote",[n("p",[t._v("六. vue form-item,必须有el-form在外面包含")])]),t._v(" "),n("blockquote",[n("p",[t._v("七. 在script中调用组件的$el，可以使用VUE的render函数,调用子组件,每更改一次数据，重新获得$el")])]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[t._v("import RenderCtrl from "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./RenderCtrl"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//子组件 renderCtrl.js")]),t._v("\nRenderCtrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("newInstace "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" properties "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" props "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" properties "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//实例化一个组件，然后挂载到body上")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Instance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Vue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RenderCtrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        props"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" props\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" component "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Instance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("  component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlet RenderCtrlInstance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" initInstance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  RenderCtrlInstance "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" RenderCtrl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newInstace")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//每次加载组件等于重新渲染~'~都是泪")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" RenderCtrlInstance"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对外暴露的方法")]),t._v("\nexport "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  getComponent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("initInstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//js 调用renderCtrl.js的getComponent 即可获得子组件RenderCtrl")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v('八 webpack多页面入口层级太深，HtmlWebpackPlugin定义inject,生成的静态文件插入位置不好控制\n九 vue.$set修改的对象也是浅拷贝\n十 vue中深层数据的数组改变,需要$set更改到最高一级\n十一 vue中等于号赋予的对象后添加，无法v-model实现双向数据绑定,需要$set赋值\n十二 电脑在之前设置了npm全局安装的目录，后来又更改，npm install -g 全局更新修改目录之前安装插件仍旧是旧版本,需要在c:\\Users\\admin\\AppData\\Roaming\\npm中重新安装\n十三 使用Vue.extend实例化的vue子类属于独立个体,他就相当于直接使用vue进行实例化！和引用他们的组件毫无关联,即使他们是在某个组件内通过Vue.extend实例化的，也不会和该组件有任何关联\nwebpack --dll.conf.js报错Error: invalid "instanceof" keyword value Promise,全局webpack和webpack-cli版本兼容问题')])]),t._v(" "),n("blockquote",[n("p",[t._v("vue动态更改标签的属性,v-bind={属性名: 属性值}")])]),t._v(" "),n("blockquote",[n("p",[t._v("VUE 中Dep 和Watcher\nDep"),n("br"),t._v("\n实例初始化时给Data的属性进行数据劫持时创建;\n与data中的属性一一对应\nid: 标识\nsubd: [],n个相关的watcher容器")])]),t._v(" "),n("p",[t._v("Watcher\n它的实例什么时候创建\n与模板中表达式(不包含事件指令) --对应")]),t._v(" "),n("ul",[n("li",[t._v("watcher的结构")]),t._v(" "),n("li",[t._v("this.cb = cb;//用于更新界面的回调")]),t._v(" "),n("li",[t._v("this.vm = vm; //vm")]),t._v(" "),n("li",[t._v("this.exp = exp; //对应的表达式")]),t._v(" "),n("li",[t._v("this.depIds = {};//相关的n个dep的容器对象")]),t._v(" "),n("li",[t._v("this.value = this.get(); //当前表达式对应的value")])]),t._v(" "),n("p",[t._v("Dep与Watcher之间的关系\n什么关系?\n多对多的关系\n如何建立的？")]),t._v(" "),n("ul",[n("li",[t._v("vm.name = 'abc'--\x3edata中的name属性值变化--\x3ename的set()调用--\x3edep--\x3e\n相关的所有watcher --\x3e cb() --\x3e updater")]),t._v(" "),n("li",[t._v("name --\x3eDep--\x3en个watcher (属性在模板中多次被使用)\n表达式 --\x3e Watcher --\x3e n个Dep(多层表达式: a,b,c)")])]),t._v(" "),n("h2",{attrs:{id:"vue-cli3打包后路由无效"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli3打包后路由无效"}},[t._v("#")]),t._v(" vue-cli3打包后路由无效")]),t._v(" "),n("ul",[n("li",[t._v("本地起http-server 如何指定入口页面(不必指定)")]),t._v(" "),n("li",[t._v("vue多页面入口index页面没有加入路由插件vue,vue-router,进入其他页面不跳转")]),t._v(" "),n("li",[t._v("npm install 安装失败或特别卡顿，检查淘宝源,并且删除package.json文件")])]),t._v(" "),n("ul",[n("li",[t._v("在一个模块(组件)中，只能有一个export default,同时还可以使用export")]),t._v(" "),n("li",[t._v("无论小程序还是vue都有类名穿透的问题，scoped每个样式的权重加重了：理论上我们要去修改这个样式，需要更高的权重去覆盖这个样式,scoped三条渲染规则:给HTML的DOM节点加一个不重复data属性(形如：data-v-2311c06a)来表示他的唯一性\n在每句css选择器的末尾（编译后的生成的css语句）加一个当前组件的data属性选择器（如[data-v-2311c06a]）来私有化样式\n如果组件内部包含有其他组件，只会给其他组件的最外层标签加上当前组件的data属性")]),t._v(" "),n("li",[t._v("scoped穿透方式:\n"),n("code",[t._v("外层 >>> 第三方组件 {   样式  }")])]),t._v(" "),n("li",[t._v("项目结构中多个vue页面，利用webpack打包（热更新）非常慢，在.babelrc中添加\n"),n("code",[t._v('"env": { "development":{ "plugins": ["dynamic-import-node"] } }')])])]),t._v(" "),n("blockquote",[n("p",[t._v("Symbol可以达到私有化效果\n静态方法,静态方法被设计为只能被创建它们的构造器使用,并且不能传递给实例,静态方法不能被实例使用, 因此抛出了 TypeError 错误。")])]),t._v(" "),n("blockquote",[n("p",[t._v("vue中")])]),t._v(" "),n("ul",[n("li",[t._v("@click.stop与@click.prevent")]),t._v(" "),n("li",[t._v("@click.stop 阻止事件冒泡")]),t._v(" "),n("li",[t._v("@click.prevent 阻止事件的默认行为`")])]),t._v(" "),n("blockquote",[n("p",[t._v("eslint 提示Symbol not defined no-undef ，是因为")])]),t._v(" "),n("ul",[n("li",[t._v('.eslintrc中parserOptions{"ecmaversion": 6}只支持es6语法，但不支持新的ES6全局（例如，新类型，如SET）,')]),t._v(" "),n("li",[t._v("对于ES6语法，使用{“parseroptions”：{“ecmaversion”：6}；")]),t._v(" "),n("li",[t._v("对于新的ES6全局变量，使用{“env”：{“es6”：true}。{“env”：{“es6”：true}自动启用es6语法，但{“parseroptions”：{“ecmaversion”：6}不自动启用es6全局参数。")])]),t._v(" "),n("blockquote",[n("p",[t._v("VUE项目run dev 的时候报\n"),n("code",[t._v("No parser and no filepath given, using 'babylon' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred.")])])]),t._v(" "),n("p",[t._v("可能原因是vue-loader的版本没跟上其他包的版本导致解析器不运行，\n把vue-loader包全都更新到14.2.3之后即可")]),t._v(" "),n("blockquote",[n("p",[t._v("vue-charts,gitHub 3.5k， 只是对echarts做了简单的封装,完全兼容各种echats的本身的扩展, 可定制化比较强，配置仍旧繁琐;")])]),t._v(" "),n("ul",[n("li",[t._v("v-charts图表，ele团队以echarts为基础封装, 主题样式比较固定，仍可定制，但动态渲染，加载较繁琐，基本满足需求，少了很多的配置,可以使用，目前仍在更新,热度超vue-charts\n"),n("strong",[t._v("使用注意事项")])])]),t._v(" "),n("ol",[n("li",[t._v(":data 绑定基本数据")]),t._v(" "),n("li",[t._v(":settings 绑定基本配置")]),t._v(" "),n("li",[t._v(":legend 图例")]),t._v(" "),n("li",[t._v('v-charts 其他属性,如果某属性加上去之后没有生效，很可能是没有引入相应的模块, 如:title, 需要在引入v-charts之前\n引用import "echarts/lib/component/title";')])]),t._v(" "),n("blockquote",[n("p",[t._v("vuex $store.commit('同步的mutations');\nvuex $store.dispatch('异步的actions'),比如数据请求")])]),t._v(" "),n("blockquote",[n("p",[t._v("vue中父子组件的生命周期\n父beforeCreate->父created->父beforeMount->子beforeCreate->子created->\n子mounted->父mounted->子beforeUpdate->子updated->")])]),t._v(" "),n("blockquote",[n("p",[t._v("sass 官方目前主力推dart-sass 最新的特性都会在这个上面先实现\nnode-sass是自动编译实时的，dart-sass需要保存后才会生效")])]),t._v(" "),n("blockquote",[n("p",[t._v("vue-router路由实现的原理,web api window.onpopstate")])]),t._v(" "),n("blockquote"),t._v(" "),n("div",{staticClass:"language-C extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//TODO")]),t._v("\n公司电脑的vue"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cli初始化的都是webpack3，vue "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.5")]),t._v("的版本"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("vue 使用template绑定v-html，不渲染,div上v-html可以渲染\n谷歌的插件proxySwitch会拦截vue中iframe的请求，而且不能重定向,要是node服务起的请求,尽量用dev-server配置吧")])]),t._v(" "),n("blockquote",[n("p",[t._v("Vue关于watch里调用方法的坑")])]),t._v(" "),n("ul",[n("li",[t._v("因为我调用的函数是用了箭头")]),t._v(" "),n("li",[t._v("参考官网,不应该使用箭头函数来定义 method 函数,理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例")])])])}),[],!1,null,null,null);s.default=e.exports}}]);