---
layout: post
title: 面试提问记录
date:   2018-11-16 18:07:16
categories: Interview
pid: 20181116-180716
pin: 0
---
> 五个问题
1. react 子组件传值给父组件,
2. position 绝对定位相对于谁绝对，
3. jsonp的跨域的优势;
4. function和箭头函数的区别;
> 普通函数作为对象的一个函数被调用，this指向当前的obj
箭头函数作为对象的一个函数被调用，this指向window;

**特殊情况**
 - 结合定时器调用,若在对象的函数中，普通函数作为定时器延时执行的函数调用，this指向Window;箭头函数作为定时器延时执行的函数调用,this指向定义时所在的对象，也就是func中的this,即obj.
 - 箭头函数的this的值取决于该函数外部非箭头函数的this的值创造箭头函数的对象,且不能通过，call()`apply()和bind()方法来改变this的值;

 ```c
 function fn() {
   this.user = "sun";
   return undefined;
  // return {};  //this---->window
  // return function(){}; //this---->window
  //  return 1; //this--->fn;
  // return null; //this-->fn
 }
 var a = new fn;
  console.log(a);//{user:"sun"}
```
**this永远指向的是最后调用它的对象**
**如果返回值不是一个对象，那么this还是指向函数的实例**
```c 
var obj = {
  name: 'hh',
  func: ()=> {
    console.log(this)
  }
}
obj.func(); //window
```
```c
var obj = {
  name: 'hh',
  func: function() {
    console.log(this)
  }
}
obj.func(); //obj
```
```c
var obj = {
  name: 'hh',
  func: function() {
   setTimeout(function() {
    console.log(this);
   },0);
  }
}
obj.func(); //window
```
```c
var obj = {
  name: 'hh',
  func: function() {
   setTimeout(()=>{
    console.log(this); //此时箭头函数的this取值于函数外部费非箭头函数func的this值
   },0);
  }
}
obj.func(); //obj
```
**箭头函数时没有自己的执行期间上下文的,this,arguments都是从他们的父函数继承而来的**
**箭头函数具有与创建它的函数完全相同的函数上下文**

```c
const test = { //const定义的变量无法改变，test名字在栈中无法改变，在堆中的值可变
  names: 'test object',
  func1: function() {
    return function() {
      console.log(this.names);//this-->window,当前匿名函数，最终是window所调用，有自己的函数上下文
      console.log(arguments);
    }
  },
  func2: function() { //func2中this指向test对象
    return() => {
      console.log(this.names); //箭头函数中的this指向创建它的函数
      console.log(arguments);
    }
  }
};
test.func1('function')(); //undefined,Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
test.func2('arrow')();//test object, Arguments ["arrow", callee: ƒ, Symbol(Symbol.iterator): ƒ]
```



5. const常量属性;
> **const用于声明常量，一旦声明，必须立即赋值，且以后不可更改。**

#### 使用const声明对象的时候，只能保证对象的引用地址不被更改，并非此对象不被修改。
 1.const定义的对象，当对象改变了之后，const定义的值也会跟着改变。

 2.cosnt定义的变量是一个对象的一个属性值，但是当对象属性值改变了以后，const定义的这个值并不会改变。

 7. readonly 和 disable的区别
 > Readonly和Disabled禁止更改表单域中的内容。微小的差别，总结如下：
  - Readonly只针对input(text / password)和textarea等文本输入框类有效,且仍可聚集焦点
  - 而disabled对于所有的表单元素都有效，
    但是表单元素在使用了disabled后，当我们将表单以POST或GET的方式提交的话，这个元素的值不会被传递出去,而readonly会将该值传递出去（readonly接受值更改可以回传，disable接受改但不回传数据）。

8. return 返回函数体而非for循环,直接在浏览器的console面板中返回return 会报错:Uncaught SyntaxError: Illegal return statement
 
