---
layout: post
title: 暂存死区和变量提升
categories: js
date: 2019-11-06 12:38:11
pid: 20191106-123811
pin: 100
---

**暂存死区**
与通过  `var` 变量声明的有初始化值 `undefined` 的变量不同，通过 `let` 声明的变量直到它们的定义被执行时才初始化。在变量初始化前访问该变量会导致`ReferenceError`。该变量处在一个自块顶部到初始化处理的“暂存死区”中。
```c
function do_something() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2;
}
```
![image.png](https://upload-images.jianshu.io/upload_images/14983171-42dba982958404a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**暂存死区与 typeof**
与var声明未赋值的变量不同的是,如果使用typeof检测在暂存死区中的变量, 会抛出ReferenceError异常;
```c
// prints out 'undefined'
console.log(typeof undeclaredVariable);

// results in a 'ReferenceError'
console.log(typeof i);
let i = 10;
```
**暂存死区和静态作用域/詞法作用域的相关例子**
```c
function test(){
   var foo = 33;
   {
      let foo = (foo + 55); // ReferenceError,赋值语句，foo依然存在于死区
   }
}
test();
```
由于词法作用域，表达式(foo + 55)内的标识符foo被认为是语法块的foo变量，而不是值为33的块外面的变量foo。
在同一行，这个语法块中的foo已经在词法环境中被创建了，但是还没有到达（或者终止）它的初始化（这是语句本身的一部分）。
这个语法块里的foo还依旧在暂存死区里。

- 在没有执行到它的初始化语句之前，它仍旧存在于暂存死区中。
```c
function go(n) {
  // n here is defined!
  console.log(n); // Object {a: [1,2,3]}
  // let n of n.a已经在for循环块的私有范围内。因此，标识符n.a被解析为位于指令本身("let n")中的“ n”对象的属性“ a”。
  for (let n of n.a) { // ReferenceError
    console.log(n);
  }
}

go({a: [1, 2, 3]});
```
** 用在块级作用域中时, let将变量的作用域限制在块内, 而var声明的变量的作用域是在函数内.**
```c
var a = 1;
var b = 2;

if (a === 1) {
  var a = 11; // the scope is global
  let b = 22; // the scope is inside the if-block

  console.log(a);  // 11
  console.log(b);  // 22
} 
console.log(a); // 11
console.log(b); // 2
```
`**var**` 与 **`let`**合并的声明方式会报`SyntaxError`错误, 因为`**var**`会将变量提升至块的顶部至整个封闭函数, 这会导致隐式地重复声明变量,let声明的变量只在其声明的块或子块中可用.
```c
let x = 1;
{
  var x = 2; // SyntaxError for re-declaration,Identifier 'x' has already been declared
}
```
## 经典面试题
```c
function a(){
for(var i =0;i<3;i++) {
 setTimeout(function(){
    console.log(i)
  },0)
}
}
a();
```
- 以上会输出3个3
- 为什么把`var i =0`改成`let i =0`,就可以正确输出`1，2，3`?
- var会将变量提升至块的顶部至整个封闭函数，只有一个作用域，每次i自增的时候都修改了全局的i，最后会变为3, 而let声明的变量只在其声明的块或子块中可用.
 ![1573238741(1).jpg](https://upload-images.jianshu.io/upload_images/14983171-c03352e031bd5f62.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)










