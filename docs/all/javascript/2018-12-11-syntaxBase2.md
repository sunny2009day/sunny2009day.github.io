---
layout: post
title: javascript的syntax基础2
date: 2018-12-11 18:07:16
categories: javascript
pid: 20181211-180716
pin: 0
---
## 哎，编程基础，要牢记啊
> js 执行

```c
<script>
   /* 
    1. 编译 -出现错误(3)
    2. 执行 -出现错误(3)
    3. 判断是否有下一个代码段 -是(1) -否(结束)
    */
    //编译错误和运行错误出错时，各自受各自的影响
    alert(i);
    var frist = 10;
    function display() {
      alert("hello");
    }
  </script>
  <script>
    alert(frist); //undefine
    display(); //alert("hello")
  </script>

```
>数组，属于对象引用类型
[]
new Array(1,2,3);
new Array(3); //创建一个数组长度为3
decodeURIComponent解码URL地址可以解空格

> 函数或方法由那个Object调用起来，函数内部this便指向谁,对象绑定事件，事件内的this便指向该对象
 对象,以下为动态绑定`A.onclick = a; function a() {//this为对象A}`

> 监听事件attachEvent(事件名,callback)适用于IE浏览器,
W3C浏览器,事件名没有"on"前缀,addEventListener(事件名, callback, 事件模型(true:捕获,false:冒泡))
无论IE或 W3C,默认冒泡false，IE不支持捕获;
IE8及以下,先绑定后触发；W3C先绑定先触发;
> 事件模型
DOM元素层级，body-div1-div2(click)
 1.冒泡，从里向外,触发顺序div2-div1-body,上升至最顶级元素;
 `window.event.cancelBubble = true;//IE中事件对象取消冒泡`;
 **W3C,event.stopPropagation();取消冒泡**
 2.捕获，从上向下, 触发顺序body-div1-div2(click),

> 默认行为
 submit,href,等都是dom元素的默认行为;
 ```c
 if(window.event) { //IE浏览器有event事件
   window.event.returnValue = false;
 } else {
   evt.prevenDefault();
 }
 ```
 > BOM模型，浏览器打开一个网页程序时，js会自动创建对象，首先会创建window,然后再为window创建它的子级对象，
 形成一个树状的模型;
   window对象是所有对象的顶级对象;
   创建的所有全局对象和全局函数都是存储在window对象下的;
 > 面向对象
  1. 面向机器-> 无法夸硬件平台结构
  2. 面向过程-> 将程序的执行分解成若干个步骤，
  3. 面向对象-> 将程序分解成若干个事物，类(代表某类事物，是抽象的)和对象(某个事物，是具体的)
  js 中的class, Function person -》person 类的同名构造函数；
  Function person 为person类的构造函数、
  var 对象 = new 类名();//开辟了新的内存空间,直接执行类的构造函数
  对象之间的赋值是按地址赋值;
  1. 对象的名称在栈
  2. 对象的值在堆

#### 变量放堆中，需要先在栈找名字，再在堆中找值，消耗性能
 null,空，不占用栈或堆得空间;所以有时用变量= null;释放空间；
 delete只能删除自定义对象的属性，不能删除系统定义对象的属性；
#### 成员方法
 在对象声明之后的,动态添加的方法;
####  object是所有类的父类
 通过构造器的到的对象和使用json创建的对象的区别：
 1. 省略构造器的定义
 2. 使用构造器简化属性的定义

#### 原型

```c
function Person(p_name) {
  this.name = p_name;
}
//可以为Person类下的所有对象添加属性
var p1 = new Person("zhangsan"); //p1是Person类的实例化,但是不继承Person类的prototype属性;
//对象的实例有{{prototype}},即_proto_;
Object.__proto__ === Person.__proto__;//true
Person.prototype === p1.__proto__; //true;


Person.prototype.age = 30; //Person.prototype.age和Person.age不同前者为实例属性，后者为静态属性
p1.__proto__.age = 40; //Person.prototype.age === 40;p1.age = 40;
p1.age = 50;
console.log(p1);//p1.age=50;
```
**当程序加载Person函数时，会为Person构造函数创建Person原型对象,他们是独立存在的;构造器中有一个prototype属性指向了原型对象,原型对象中有一个constructor属性指向构造器,当Person类的实例在使用一个不存在的属性时，会自动到Person构造器的原型对象中去找**

#### prototype和__proto__

> _Object类_静态属性_函数闭包
- 使用Object避免了对构造器的定义
1. 因为所有的类在被系统加载之后,都会创建这个类的原型对象 `prototype = new Object`;
2. javascript 可以模拟一些面向对象语言中 static关键字定义的类的静态属性或方法
  - 类名 属性名
  - 类名 属性名 = function() {};
3. '闭包',一个拥有很多变量和绑定这些变量的环境表达式,这些变量也是该表达式的一部门;
   - 在全局中不能访问局部变量，因为作用域不同，函数执行完毕后，局部变量会被回收;
   - 闭包的作用
   1. 访问局部变量;
   2. 使变量所占内存不被释放;

   ```c
   //使用一个函数包含变量i,这样局部变量i的内存不会被回收
   //i的内存不回收每次调fn2,i的值都会增加
   function fn1() {
     var i =10;
     function fn2() {
       console.log(i++)
       console.log(i) //10
     }
     return fn2;//返回函数fn2的首地址
   }
   var test = fn1(); //test也指向了fn2函数的首地址
   test();
   ```
   **编程语言中指向的对象,不能被回收,内存不能被回收,勾住指向**

  > 私有属性
  在面向对象的思想中，有些属性不想公开可以定义为私有的，在js中可以模拟这个功能
  1. 语法
  ```c
  function Person(P_name) {
    var name = p_name; //私有属性
    this.age;
  }
  ```
  **this永远指向的是最后调用它的对象**
  2. 访问私有属性可以设置set,get方法，只有set为只写属性，只有get为只读属性
  3. 使用call,apply
   - 使用指定的对象调用当前的函数
   Js内部的this会随着程序的运行指向不同的对象可使用call,apply改变指向
  
  > JS模拟继承，子类拥有父类的属性和方法
  1. 扩展Object方法
   - `Object.prototype.ext = function() {}`
  2. 使用call,apply方法
   - 父类构造器.call(this...);
  3. 原型继承(推荐，JS默认的继承)
  子类.prototype = new 父类();
   ```c
   function Person(p_name,p_age) {
     this.name = p_name;
     this.age = p_age;
     this.speak = function() {
       console.log(this.name+this.age);
     }
   }
   function Student(p_no) {
     this.no=p_no;
     this.say = function() {
       console.log(this.no + this.name+this.age);
     }
   }
   Student.prototype = new Person('wang', 21);
   var stu = new Student(10);
   stu.speak();
   stu.say();
   ```
   以上代码原理可查看 
   ![原型继承](/images/prototypeExrenr.png "prototypeExrenr")

   > js中的函是由对象调用起来的，全局函数是window.函数,函数中的this即指向调用它的对象
  
   > 正则对象
   1. 隐式创建
    - var 对象 = /匹配模式/匹配标志
   2. 直接实例化
    - var 对象 = new RegExp("匹配模式", "匹配标志");

  **区别**
   1. 如果使用直接实例化,那么像"\d"这样的字符,需要转义"\\d";
    - RegExp类
     test(str): 匹配指定的模式是否出现在字符串中
     exec(str): 返回匹配模式的字符串
   2. String类
     serach: 匹配符合模式的字符串出现的位置
     match: 以数组形式返回匹配的字符串,没有匹配到的则返回null
     replace: 使用指定的内容替换匹配模式的字符串
     split: 使用匹配模式的字符串作为分隔符对字符串进行分隔,返回数组
   3. 子表达式
    - 在正则表达式中,使用一对括号括起来的内容是一个子表达式;
    在正则匹配模式中，子表达式匹配到的内容会被系统捕获至系统的缓冲区中反向引用；
    捕获之后，可以在匹配模式中，使用\n(n:数字)来引用系统的第n号缓冲区内容;

    - 匹配多个字符后面是123,,后面的内容和前面的多个字符相同,如abc123abc;

     reg = /(\w+)\d\d\d\1/gi; //\1捕获子表达式(\w+)
      1. 查找连续的相同的四个数子，如: 1111
      var reg = /(\d)\1\1\1/gi;或  /(\d)\1{3}/; //限定符出现3次
      2. 查1221,3443等
      reg = /(\d)(\d)\2\1/gi;
      3. 查AABB,TTMM等
      reg = /(\w)\1(\w)\2/gi;
      4. 查找连续相同的四个数字或四个字符
      reg = /(\w)\1\1\1/gi;
      5. 查HTML标记，中间的内容
      reg = /<(\w+)>.+<\/\1>/gi; //+,一个或多个

 > 正则语法细节 
      1. 普通字符: a,b,c,d 1234
      2. 特殊字符(元字符): \d\D\w,...
      - 需求分析
       1. 查什么
       2. 从哪查
       3. 查多少

   -   1. 限定符
      限定符可以指定正则表达式的一个给定组件必须要出现多少次才能才能满足匹配
      满 ;
      * 0~n次 === {0,}
      + 1~n次 === {1,}
      ？0~1次 === {0,1}
      {n} 匹配确定的n次
      {n,} 至少匹配n次
      {n,m} 最少匹配n次且最多匹配m次

### 代码

reg = /\d{3}/gi; //匹配三个数字
reg = /\d{3,}/gi; //最少匹配三个数字
reg = /\d{3,5}/gi; //最多匹配5个,那么在正则表达式中会自动匹配多的哪一种,这在正则中贪婪匹配原则；

 2. 字符串匹配符
 字符匹配符用于匹配某个或某些字符
 \D: 匹配一个非数字字符 [^0-9];
 \w: 匹配包括下划线的任何单词字符. [0-9a-zA-Z_]
 \W: 匹配任何非单词字符; [^\w]
 \s: 匹配任何空白字符; 空格、制表符、换行符
 \S: 匹配任何非空白字符;
 .: 匹配除"\n"之外的任何单个字符,如果想匹配任
 意字符[.\n]

 > 定位符
 
 定位符可以将一个正则表达式固定在一行的开始或结束,也可以创建只在单词内或只在单词的考试或结尾处出现的正则表达式

 ^ : 匹配输入字符串的开始位置
 $ : 匹配输入字符串的结束位置
 \b: 匹配一个单词的边界
 \B: 匹配非单词边界

 > 关于正则表达式的几种特殊用法
 1. (?=)
 正向预查
  - 查 '好人'前面的名字
  var str = '张三超好人,张三超大侠';
  reg = /张三超(?=好人)/gi; //输出 '张三超'
 2. (?!)
 负向预查
 - 查不是'好人'前面的名字
  var str = '张三超好人,张三超大侠';
  reg = /张三超(?！好人)/gi; //输出 '张三超',RegExp.lastIndex
 3. (?:)
 结果不被捕获
 ```c
 var str = 'hellojavascript.hellophp.hellojava.helloajax';
 var reg = /hello(?:javascript|php)/gi;
 var result;
 while(result = reg.exex(str)) {
   alert(result);
 }
 ```
 (javascript|php)会被当做子表达式来处理，内容会被捕获,但在程序中,捕获的内容没有任何用途,这种情况下，,可以
使用(?:),让系统不去捕获子表达式匹配的内容;

> DucumentFragment: 文档碎片(高效批量更新多个节点)
1. document: 对应显示的页面,包含n个elment, 一旦更新document内部的某个元素，界面更新
2. documentFragment: 内存中保存n个element的容器对象(不与界面关联),如果更新fragment中的某个element,界面不变

> 发布者-订阅者模式（backbone.js）
脏值检查（angular.js） 
数据劫持（vue.js）

> dom.nodeType == 1,为元素节点

> JS中的全局作用域下的变量提升只是针对变量,全局变量未声明的
比如`a = 2`,在这之前调用a会报错ReferenceError; 
  函数的执行会形成私有作用域,私有作用域进入
   - 先判断有无形参复制
   - 变量提升
   - 不管条件是否成立,都要进行变量提升,新浏览器中对于判断体中只是提前声明;

    ```c
    /*
    * 变量提升 var foo;
    */
    var foo =1;
    function bar() { //私有作用域
      if(!foo){ //=> !undefined
      var foo = 10;
     }
     console.log(foo);
    }
    bar();
    ```
> ES6 let 没有变量提升

> javascript中的with语法
```c
function foo(obj) {
    with (obj) {
        a = 2;
    }
}
var o1 = {
    a: 3
};
var o2 = {
    b: 3
}
foo(o1);
console.log(o1.a);  //2

foo(o2);
console.log(o2.a);  //underfined
console.log(a);     //不好，a被泄漏到全局作用域上了
```
1. with 所声明的作用域是 o2, 从这个作用域开始对 a 进行 LHS查询。o2 的作用域、foo(…) 的作用域和全局作用域中都没有找到标识符 a，因此在非严格模式下，会自动在全局作用域创建一个全局变量），在严格模式下，会抛出ReferenceError 异常。
2. (with和eval性能下降)JavaScript 引擎会在编译阶段进行数项的性能优化。
其中有些优化依赖于能够根据代码的词法进行静态分析，并预先确定所有变量和函数的定义位置，才能在执行过程中快速找到标识符。 
  但如果引擎在代码中发现了 with，它只能简单地假设关于标识符位置的判断都是无效的，因为无法知道传递给 with 用来创建新词法作用域的对象的内容到底是什么。 
  最悲观的情况是如果出现了 with ，所有的优化都可能是无意义的。因此引擎会采取最简单的做法就是完全不做任何优化。如果代码大量使用 with 或者 eval()，那么运行起来一定会变得非常慢。无论引擎多聪明，试图将这些悲观情况的副作用限制在最小范围内，也无法避免如果没有这些优化，代码会运行得更慢的事实。

> es6 语法记录

变量的引用 export {<变量>} 
值拷贝 CommonJs输出,export default
CommonJs运行在服务器上,运行时加载，代码执行到哪一行才回去加载模块;第一次加载的时候运行一次，之后加载返回的都是第一次的结果，具有缓存效果
es6 Module 是静态的输出一个接口,发生在编译的阶段;没有缓存结果

es6的函数默认参数没有变量提升，作用域在函数内部代码执行前,形成一个单独的作用域
```c
let w =1,z =2;
//形成一个单独的作用域
{
  let x = w+1
  if(x!=undefined) x = /*传入的参数*/
  let y = x+1
  if(y!=undefined) y = /*传入的参数*/
  let z = z+1
  if(z!=undefined) z = /*传入的参数*/

}
```


 



  




      




  
  



 




 
