# 常用的css

>上下的垂直外边距margin在同时存在时会发生外边距折叠。
这意味着当一个元素的下边缘接触到另一个元素的上边缘时，只会保留两个margin值中较大的那个; 
```c
.top {
 width: 100px;
margin-bottom:40px;
}
.bottom {
 width: 100px;
 margin-top:20px;
}
-----------------------------------
<div class="top">上</div>
<div class="bottom">下</div>
```
**块级元素只使用一个方向的margin**
>  css命名为何不推荐使用下划线_
 -  用下划线命名也是一种_hack，如使用"_style"这样的命名,可以让IE外的大部分浏览器忽略这个样式的定义,所以使用"_"作为命名时的分隔符号是不规范的,在做css检查时会出现错误提示,因此避免使用下划线命名
` document.getElementById("a").className="try-b"; `;
分别用了“~”、“$”、“`”、“&”和“－”去代替，结果只有“－”号是可以使用的，而且对JS的支持也正常
-  在CSS定义里，经常会用到ID选择符，如果在页面中的ID命名中使用了“_”，就免不了在CSS样式里出现下划线“_”了，所以在此还得注意在ID的命名上也要避免使用下划线。 
> CSS属性的值都是从DOM树中向上一级的元素继承的，因此才被命名为级联样式表,CSS中并不是所有的属性都是可继承的;
>  使用text-transform转换字母为大写
**大搜车的面试笔试题见过**
- 无继承性的属性
1. display: 规定元素应该生成的框的类型;
2. 文本属性:
vertical-align,text-decoration,text-shadow,white-space,unicode-bidi:设置文本的方向
3. 盒子模型的属性:  
width、height、margin、margin-top、margin-right、margin-bottom、margin-left、border、border-style、border-top-style、border-right-style、border-bottom-style、border-left-style、border-width、border-top-width、border-right-right、border-bottom-width、border-left-width、border-color、border-top-color、border-right-color、border-bottom-color、border-left-color、border-top、border-right、border-bottom、border-left、padding、padding-top、padding-right、padding-bottom、padding-left
4、 背景属性: 
background、background-color、background-image、background-repeat、background-position、background-attachment
5、 定位属性: float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index
6、生成内容属性：content、counter-reset、counter-increment
7、轮廓样式属性：outline-style、outline-width、outline-color、outline
8、页面样式属性：size、page-break-before、page-break-after
9、声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during
- 有继承性的属性
1. 字体系列属性
font,font-family,font-weight,font-size,font-style,font-variant,font-stretech,
font-size-adjust
2. 文本系列属性
text-indent,text-align,line-height,word-spacing,word-spacing,letter-spacing,text-transform,direction,color
3. 元素可见性
visibility
4. 表格布局属性
caption-side、border-collapse、border-spacing、empty-cells、table-layout
5、列表布局属性：list-style-type、list-style-image、list-style-position、list-style
6、生成内容属性：quotes
7、光标属性：cursor
8、页面样式属性：page、page-break-inside、windows、orphans
9、声音样式属性：speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、pitch、pitch-range、stress、richness、、azimuth、elevation
- 所有元素可以继承的属性
1、元素可见性：visibility
2、光标属性：cursor
- 内联元素可以继承的属性
1、字体系列属性
2、除text-indent、text-align之外的文本系列属性
- 块级元素可以继承的属性
1、text-indent、text-align
> 用transform()函数来创建元素的位移或大小动画 
transform发生在Composite Layer这一步，它所引起的paint也只是发生在单独的GraphicsLayer中，并不会引起整个页面的回流重绘。(有兴趣可以看看浏览器的渲染过程)
 > 选择器的尽量低权重, 行内的权重最重，内部的权重次之，写在外部css文件里面的样式权重最低
- ID (#id) > Class (.class) > Type (例如 header)>行内,权重也会叠加，于是a#button.active的权重要比a#button的高。一开始就使用高权重的选择器会导致你在后面的维护中不断的使用更高权重的选择器，最终选择使用!important
- 尽量不要使用!important ,导致大量的重写，唯一使用的!important的地方是当您想要覆盖HTML中的内联样式,当然也尽量避免内联样式;
> 使用AutoPrefixer达到更好的兼容性,适配更多的浏览器厂商
> 验证就像压缩和Autoprefixer一样，有免费的工具可以利用：
在线工具：W3 Validator, CSS Lint
文本编辑器插件：Sublime Text, Atom
代码库：stylelint (Node.js, PostCSS), css-validator (Node.js)
> css3新特性总结
- 圆角边框 
```c
border-radius: 5px;
```
- 多背景图
```bash
background: url(1.png) right bottom no-repeat, url(2.gif) left top repeat;
```
- 颜色识别透明度
```c
background: rgba(0,0,0,.6)
```
- 列布局和弹性盒模型
```c
display: grid;
display: flex;
```
- 盒子的变换(2d,3d)
```c
  transform: translate(50px,100px);//移动
  transform: rotate();//旋转
  transform: scale();//缩放
  transform: skew();//倾斜
```
- 过渡和动画
```c
transition: width 1s linear 2s;
 @keyframes animation{
  0%{}
100%{}
}
```
加强版的过渡效果，通过animation指定动画名和动画参数，@keyframes定义动画内容，根据参数自动触发。
- web字体
`@font-face`
- 媒体查询
- 阴影

