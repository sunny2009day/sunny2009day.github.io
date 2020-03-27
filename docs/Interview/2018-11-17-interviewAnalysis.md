---
layout: post
title:  一些函数执行题分析
date:   2018-11-17 18:07:16
categories: Interview
pid: 20181116-180716
pin: 0
---
> 
```c
/*
* 全局作用域下变量提升 var a;
* 全局作用域下声明a,相当于给window加了一个属性a,建立了映射机制
* in: 检测耨某一个属性是否隶属于这个对象(无论私有还是公有属性,只要有这个属性结果就是
* true)
**/
if(!("a" in window)) {
  var a =1;
}
console.log(a); //undefined
```
```c
/*变量提升
*var a ;
* b = aaafff000;
* arguments 函数内置实参集合，不管是否设置形参,传递的实参值都在这个集合中存在
*/
var a =4;
function b(x, y, a) {
  /*形参赋值: x=1 y =2 a =3;
  * 变量提升
  * arguments {
  *  0: 1, 1:2,2:3,length:3, callee: 函数本身 ...
  * },
  * js非严格模式（默认）下，函数中的形参变量和arguments存在映射机制(映射相互之间影响)
  * 如果arguments[1]的值变为100,那第二个形参变量Y的值也会跟着变为200
  */
  console.log(a);
  arguments[2] = 10;
  console.log(a);
}
a = b(1, 2, 3); //a = b, 没有return,undefined
console.log(a);
```
```c
function fn(x, y) {
/*
* 形参 x = 10; y = undefined ;arg 0: 10,length:1
*arg和形参之间的映射是以arg的索引为基础完成的，arg中有这个索引，浏览器会完成和对应形参变量中的映射机制搭建,如果形参比arg中个数多，那么多出来的形参是无法和arg对挺的索引关联的
*/
var arg = arguments;
arg[0] = 100;
console.log(x); //100
y = 200;
console.log(arg[1]); //undefined
arg[1] =300;
console.log(y)  //200
y = 400;
console.log(arg[1]);  //300 
/*
*arguments 映射机制是建立在形参传参一瞬间,函数执行后，能建立映射的建立，不能建立的，以后的操作都无法在建立
*/
}
fn(10);
```
> JS严格模式,在当前作用域第一行加上
"use strict";
贼真实项目中把所有JS文件合并压缩为一个导入页面中,(1.不在最外层写js,);

```c
/*
*多人开发中的私有作用域
*在严格模式下arguments和形参没有映射机制
*在严格模式下不允许给一个对象设置重复属性名
*/
~ function fn() {
  "use strict";
  console.log(arguments);
}();
```

>  普通函数,中this,看该方法前面有没有点xx.fn()中，fn中的this指向xx; 如果没有明确指定执行的主体(函数前面没有点,不在像非严格模式下一样，统一都交给window,而是让this指向undefined,即没有执行体;严格模式下需要有明确的执行体否则undefined;

> 逻辑与的优先级高于(&&)逻辑或(||)
a = 1&&2,a =2;逻辑为真返回后面的值

> 
 ```c
var a =9;
function fn(){
 a =0;
return function(b){
  return b+a++;
}
}
var f = fn();
console.log(f(5));
console.log(fn()(5));
console.log(f(5));
console.log(a);
```
> 私有作用域出现的变量都是私有变量 
> ```c
function fn(i) {
  /*第一次fn执行F(20)
  * i =20;
  * 20 + (i++)不管是否加小括号都先算20+i
  * i = 10; f(20) = 30;
  */
  /*第二次fn执行fn(20)
  * i =20;
  */
  return function(n) {
  /*
  *第二次执行小函数（40）
  * n=40; i =20 ==>60,i=21
  */
    console.log(n + (i++));
  } 
}
var f =fn(10);//=> f = fn(10) ====bbbff000,此时 i=10，被f引用不销毁
f(20);   ===> 30 , i=11;
fn(20)(40); ===> 60, 另开辟作用域,此域中 i = 21,执行完销毁
fn(30)(50); ===> 80, 另开辟作用域,此域中 i = 31,执行完销毁
f(30); ===> 41
```
**非严格模式下,自执行函数没有执行主体其中的this都指向window**
```c
var num = 10;
var obj = {num: 20};
obj.fn = (function(num) {
  /*形参赋值 num = obj.num == 20 
  * this.num = num * 3;
  */
 this.num = num*3;
 num++;
return function(n){
  this.num += n;
  console.log(num);
}})(obj.num);
var fn = obj.fn;
fn(5); //21
obj.fn(10); //21
console.log(num, onj.num); //65, 30
````

```c
var num =10;
obj = {num: 20};
obj.fn = (function(num){ //自执行函数
 num = this.num + 10; //=>num =20(21)
 this.num = num + 10; //=>window.num = 30;
return function() { //=>bbbfff000
/*
* fn() 
* this->window
* window.num += ++num;//=>obj.num = 42;
*/

/*
* obj.fn()
* this->obj
* obj.num+ =
***/
 this.num += ++num;
}
})(num);
var fn = obj.fn; //=>fn=bbbfff000
fn();
obj.fn();
console.log(num, obj.num);
```
> 构造函数和原型题
- 某一个类中的基本实例,1和Number(1)的区别
前者是一个基本数据类型值
后者是一个引用数据类型,相同点:都是Number类的一个实例
1. 函数类型
 - 普通函数
 - 构造函数(类: 内置类和自己创建的类)
2. 对象类型
 - 普通对象
 - Math\JSON ...
 - 类的实例(数组、正则、日期...)
 - prototype或者_proto_
 - arguments或者元素集合等类数组
 - 函数也是一种对象
 - ...
 => 万物皆对象
3. 每一个函数(类)都有一个prototype(原型)属性,属性值是一个对象;存储了当前类供实例调用使用的共有方法
4. 在浏览器默认给原型开辟的堆内存中有一个属性constructor;存储的是当前类的本身
5. 每个对象(实例)都有一个_proto_(原型链)属性,这个属性指向当前实例所属类的原型(不确定所属的类，都指向object.prototype)

```c
function fn() {
 this.x = 100;
 this.y = 200;
 this.getx = function() {
   console.log(this.x);
}}
fn.prototype.getx = function() {
  console.log(this.x);
};
fn.prototype.gety = function() {
 console.log(this.y)
};
var f1 = new fn;
var f2 = new fn;
console.log(f1.getx === f2.getx); //false,两者开辟不同的堆内存fn类中本身就有getx
console.log(f1.gety === f2.gety); //true, f1和f2都是fn的实例化,在原型中找到gety
console.log(f1.__proto__.gety === fn.prototype.gety); //true, f1.__proto__指向fn.prototype
console.log(f1.__proto__.getx === f2.getx); //false, f1.__proto__.getx找fn.prototype中的getx,但f2实例化的堆中私有就有getx属性，
console.log(f1.getx === fn.prototype.getx; //false, f1.getx是f1的私有属性,和fn原型链上不同
console.log(f1.constructor);//f1实例的私有属性没有constructor往上fn找fn
console.log(fn.prototype.__proto__.constructor); //Object
f1.getx(); // this:f1=>console.log(f1.x)=>100
f1.__proto__.getx();//undefined; this:f1.__proto__ ==>fn.prototype(没有x)=>O（）bject
     //基类型也找不到x属性
f2.gety(); // this:f2, console.log(f2.y)=> 200
fn.prototype.gety(); //this: fn.prototype, console.log(fn.prototype.y)=>undefined
```
> 私有作用域是栈内存
类的实例化每实例化一次，开辟一次不同的空间(堆内存,实例是对象)

> 事件绑定是异步编程,方法执行产生私有作用域;
 -> 自定义属性
 -> 闭包
 -> ES6

 ```C
 var inputs = document.getEelementByTagName('input');
 /*
 * 每一轮循环,都执行自定义函数形成一个私有作用域(不销毁),里面设定一个私有变量i，
 * 让i存储后期需要用到的索引
 * 第一个作用域i=0
 * 第二个作用域i=1...
 * 点击触发方法执行,用到变量i,向对应的上级作用域(没有销毁的那个)查找
 * 而上级作用域中存储的值就是我们需要的索引
 *
 * 利用闭包的机制，把后期需要的索引实现存储到自己的私有作用域中,闭包有保存作用
 */
 for(var i=0;i<inputs.length;i++){
   inputs[i].onclick = (function(){
     return function() {
       alert(i);
     }
   })(i);=>把每次循环时候(全局的)值传递给自执行函数
 }
/*
* es6和闭包的机制类似,es6中使用的let创建变量，会形成块级作用域,当前案例中
* 每一轮循环都有一个自己的块级作用域,把后续需要用到的索引实现存储到自己的作用域
*/
  for(let i=0;i<inputs.length;i++){
   inputs[i].onclick = (function(){
       alert(i);
   }
 }
 /*{
   let i=0;
   inputs[0].onclick = function() {
     alert(i);
   }
 }{
   ...
 }
 ...
 */

 ```

**基于闭包解决,非常的占用内存**

> 1. 元素绑定事件,方法中的this是当前操作的元素
  2. 方法名前面是否有点,有点,点前面是谁this就是谁,没有this,window(严格模式下是undefined)
  3. 构造函数执行,方法体中的this是当前类的一个实例

```c
var fullname = 'language';
var obj = {
  fullName: 'javascript',
  prop: {
    getFullName: function() {
    return this.fullName;
   }
 }
};
console.log(obj.prop.getFullName());
//->this:obj.prop->obj.prop.fullName = undefined;
var test = obj.prop.getFullName;
console.log(test()); =>this:window=>window.fullName = 'language';
```
> 在实际基于面向对象开发中(构造原型设置模式)
会重定向类的原型(让类的原型指向自己开辟的堆内存)
**存在问题**
1. 自己开辟的堆内存中没有constructor属性,导致类的原型构造函数确失;解决:自己手动在堆内存中增加constructor属性
2. 当原型重定向后,浏览器默认开辟的那个原型堆内存会被释放掉,如果之前已经存储了一些方法或者属性,这些东西都会丢失(所以内置类的原型不予许重定向到自己开辟的堆内存,避免自带的很多属性方法重定向之后丢失,这样不允许);
3. 当我们需要给类的原型批量设置属性和方法的时候,一般都是让原型重定向到自己创建的对象中;

```c
function Fn() {

}
Fn.prototype = {
  constructor:Fn,
  aa: function() {

  }
}
```
**私有属性: 自己堆内存中存储的属性相对自己来说是私有的**
**公有属性: 自己基于__proto__找到的属性相对自己来说是公有的**

```c
function fun() {
 this.a = 0;
 this.b = function() {
  console.log(this.a)
 }
}
 fun.prototype = {
    b: function() {
   this.a = 20;
   console.log(this.a);
},
  c: function() {
   this.a = 30;
   console.log(this.a);
 }
}
var my_fun = new fun();
my_fun.b(); //this:my_fun=>my_fun.a=>0;
my_fun.c(); //this:my_fun=>my_fun.a =30(设置私有属性值)
            //my_fun.__proto__.a = 30(设置公有属性)=>
            //fun.prototype.a = 30;
          
```
```C
function Fn() {
 var n =10;
 this.m = 20;
 this.aa = function() {
  console.log(this.m)
 }
}
Fn.prototype.bb = function() {
 console.log(this.n);
};
var f1 = new Fn;
Fn.prototype = {
 aa: function(){
 console.log(this.m + 10)
 }
}
var f2 = new Fn;  
console.log(f1.constructor); //Fn
console.log(f2.constructor); //在新开辟的堆内存往上查找指向Object对象
f1.bb();    //this:f1 => f1.n = undefined(实例中没有原型)
f1.aa();    //this:f1 => f1.m = 20
f2.bb();    //f2中没有bb方法报错
f2.aa();    //this:f2 => f2.m=20
f2.__proto__.aa(); //this:f2.__proto__ =>f2.__proto__.m+10=undefined+10 = NaN
```
> 基于内置类的原型扩展方法,供它的实例调取使用,(自己增加的方法最好设置前缀,防止把内置方法重写)
IE浏览器屏蔽了我们对_proto_的操作,_proto_直接找公有不找原型中的属性;

> js的链式写法保证每一个方法执行返回的结果依然是当前类的实例,可供继续调用方法使用;
内置原型的扩展方法,链式写法

```c
function unique(arr) {

var obj = {};
for(var i=0;i<arr.length;i++) {
 var item = arr[i];
 if(obj.hasOwnProperty(item)) {
  
 obj.hasOwnProperty(item)?(this[i] = this[this.length - 1], this.length--,i--):obj[item] = item; 
}
obj = null;
return this;
 
}
 return arr;
}

var arr = [1,2,3,4,2,3];
var max = unique(arr).sort(function(){
  return a - b;
}).pop();
```
> document.parentNode和document.parentnode的区别?
null, undefined;
> 怎样规避多人开发函数重名的问题?
基于单例设计模式实现模块开发,(实现当前模块的功能和属性全部放到同一个命名空间下)详情详聊

> bat interview summary 
```c
var x =10;
function fn() {
 console.log(x) //10,执行x,沿着作用域查找，和调用无关
}
function show(f) {
 var x =20;
 f()
}
show(fn)
```
> js,作用域预处理, 变量提升,先变量后函数
1. 收集 var声明的变量; 
2. 收集function声明的函数(函数名是引用值);

```c
隐蔽性,变量
/*
* 提升的顺序 
* var c = undefined;
* c = function c(c) {console.log(c); var c =3;}
* c = 1;
*/
var c =1;
function c(c) {
 console.log(c);
 var c = 3; 
}
console.log(c); //1
c(2); // c is not a function
```
> IIFE立即执行函数

```c
var F = function() {}
Object.prototype.a = function() {
 console.log('a()');
}
Function.prototype.b = function() {
 console.log('b()');
}
var f = new F();

F.a();
F.b();
f.a();
f.b();

```

