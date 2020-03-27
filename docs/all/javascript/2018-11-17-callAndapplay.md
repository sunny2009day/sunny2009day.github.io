---
layout: post
title:  call和applay
date:   2018-11-17 18:07:16
categories: javascript
pid: 20181117-180716
pin: 0
---
 
 > 详解 JavaScript的 call() 和 apply()
 ECMAScript规范为所有函数都包含两个方法(这两个方法非继承而来), `call`和 `apply` 。这两个函数都是在特定的作用域中调用函数,能改变函数的作用域，实际上是改变函数体内 this 的值 。

> 定义

语法|定义	|说明
- | :-: | -:  
call(thisObj，Object)|	调用一个对象的一个方法，以另一个对象替换当前对象。|	call 方法可以用来代替另一个对象调用一个方法。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象.如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj
apply(thisObj，[argArray])	|应用某一对象的一个方法，用另一个对象替换当前对象。	|如果 argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。如果没有提供 argArray 和 thisObj 任何一个参数，那么 Global 对象将被用作 thisObj， 并且无法被传递任何参数

**第一个参数是指定执行函数中的this的上下文**
> 用法，调用函数，传递参数

```c
     //定义一个add 方法
    function add(x, y) {
        return x + y;
    }

    //用call 来调用 add 方法
    function myAddCall(x, y) {
        //改变add方法中的this指向为当前作用域，即myAddCall,并传参
        return add.call(this, x, y);
    }

    //apply 来调用 add 方法
    function myAddApply(x, y) {
        return add.apply(this, [x, y]);
    }

    console.log(myAddCall);    //输出结果30
  
    console.log(myAddApply(20, 20));  //输出结果40
```
**我们看到通过方法本身的call 和 apply 执行了该函数。**

> 改变函数作用域
```c
    var name = 'aaa';
    var obj = {name:'bbb'};
    function sayName() {
        return this.name;
    }
    console.log(sayName.call(this));    //输出aaa
    console.log(sayName. call(obj));    //输入bbb
```
**改变了函数运行的作用域， 通过绑定不同的对象，函数内部 `this` 也不同。最终输入结果才会这样。**

> 实现 js 继承

```c
    function Person() {
        this.sayName = function() {
            return this.name;
        }
    }
    //子类 Chinese
    function Chinese(name) {
        //借助 call 实现继承Person类中的实例
        Person.call(this);
        this.name = name;

        this.ch = function() {
            alert('我是中国人');
        }
    }
    //子类 America
    function America(name) {
        //借助 call 实现继承
        Person.call(this);//America的this指向Person对象
        this.name = name;

        this.am = function() {
            alert('我是美国人');
        }
    }
    //测试
    var chinese = new Chinese('成龙');
    //调用 父类方法
    console.log(chinese.sayName());   //输出 成龙

    var america = new America('America');
    //调用 父类方法
    console.log(america.sayName());   //输出 America
```
> 区别
参数不同, apply 传入的是一个参数数组，也就是将多个参数组合成一个参数数组， call 从第二个参数开始依次传入.
apply 可以直接将当前函数的arguments对象作为apply的第二个参数传入，面向对象程序

> bind 方法
 JavaScript 中bind()最简单的用法是创建一个函数，使这个函数不论怎么调用都有同样的this值。常见的错误，将方法从对象中拿出来调用并希望this指向原来的对象，如不做特殊的处理，一般会丢失原来的对象使用bind()方法能很漂亮的解决这个问题。

```c
**var foo =  fun.bind(thisArr[,arg1[args[,...]]]);**
//他不会执行函数，而是返回一个新的函数，这个新的函数被指定了this的上下文，后面的参数是执行函数需要传入的参数


  this.num = 9;
  var moudle = {
      num: 81,
      getNum: function() {
          console.log(this.num)
      }
  };
  module.getNum();//this->module
  var getNum = module.getNum;
  getNum();//this->window or global

  var boundGetNum = getNum.bind(module); //getNum继承module,getNum的this指向指向moudle
  boundGetNum();//
```
  > 偏函数
   使用bind(),我们可以设定函数的预定义参数，然后调用的时候传入其他参数即可

   ```c
   function list() {

       return Array.prototype.slice.call(arguments);
   }
   var list1 = list(1,2,3);
   console.log(list1); //[1,2,3]

   //预定义参数
   var leadingThirtysevenList = list.bind(undefined, 37);
   var list2 = leadingThirtysevenList();
   console.log(list2); //[37]
   var list3 = leadingThirtysevenList(1,2,3);
   console.log(list3);//[37,1,2,3]
   ```
   > 和setTimeout or setInterval一起使用
   一般情况下setTimeout()的this指向window或global对象，当时用类的方法时需要this指向类实现，
   就可以使用bind()将this绑定到回调函数来管理实例.

   ```c
   function Bloomer() {
       this.patalCount = Math.ceil(Math.random()*12) + 1;// 向上求正大于整数，入一个整数
   }
   //1秒后调用declare函数
   Bloomer.prototype.bloom = function() {
       window.setTimeout(this.declare.bind(this), 1000);
   }
   Bloomer.prototype.declare = function() {
       console.log('我有' + this.patalCount + '花');
   }
   var test = new Bloomer();
   test.bloom();
   ```
   >绑定函数作为构造函数
   绑定函数也适用于使用new操作符来构造目标函数的实例。当时用绑定函数来构造实例，
   **注意：this会被忽略，**但是传入的参数仍然可用.

   ```c
   function Point(x, y) {
       this.x = x;
       this.y = y;
   }
   Point.prototype.toString = function() {
       console.log(this.x + ',' + this.y);
   }
   var p = new Point(1,2);
   p.toString();//1,2

   var YAxisPoint = Point.bind(null, 10);
   var axisPoint = new YAxisPoint(5);
   axisPoint.toString();//10, 5
   console.log(axisPoint instanceof Point);//true
   console.log(axisPoint instanceof YAxisPoint);//true
   console.log(YAxisPoint instanceof Point);//false
   console.log(new Point(17, 42) instanceof YAxisPoint);//true
   ```
   上列Point和YAxisPoint共享原型，因此使用 instanceof 运算符判断为true

   >伪数组的转化
   bind()有很多的使用场景，但是bind()函数实在ECMA-262第五版才被加入;它可能无法在所有浏览器上运行，需要我们自己实现bind()函数了。
   **首先我们可以通过给目标函数指定作用域来简单实现bind()方法：
   
   ```c
   Function.prototype.bind = 
    function(context) {
      self = this; // 保存this,及调用bind方法的目标函数
        return function() {
          return self.apply(context.arguments);
        }
    }
 ```

 >考虑到函数[柯里化](/2018/11/21/Currying.html)的情况，我们可以构建一个更加健壮的bind();函数柯里化具有这样的特性：它能够"积累"函数的参数,并且延迟执行。可以将多个参数积累到一个数组中，在最后一步执行求和。

 ```c
    Function.prototype.bind = 
     function(context) {
       var args = Array.prototype.slice.call(arguments, 1), self = this;
       retun function() {
         var innerArgs = Array.prototype.slice.call(arguments);
         var finalArgs = args.concat(innerArgs);
         return self.apply(context, finalArgs);
       }
     }
   ```
   **以上的bind()方法可以绑定对象，也支持在绑定的时候传参。**
   **Javascript的函数还可以作为构造函数，绑定后的函数用这种方式调用时，需要涉及到原型链的传递**
   ```c
    Function.prototype.bind = 
     function(context) {
       var args = Array.prototype.slice(arguments, 1), F = function() {}, self = this, bound = function() {
         var innerArgs = Array.prototype.slice.call(arguments);
         var finalArgs = args.concat(innerArgs);
         return self.apply((this instanceof F? this: context), finalArgs);
       }
        F.prototype = self.prototype;
        bound.prototype = new F();
        return bound;
     }
   ```
   **通过设置一个中转构造函数F,使绑定后的函数与调用bind()的函数处于同一原型链上，用new操作符调用绑定后的函数，返回的对象也能正常使用instanceof,因此这是最严谨的bind()实现。**

   >在浏览器中支持bind()函数，对上述函数稍微修改

   ```c
   Function.prototype.bind = function(oThis) {
     if(typeof this !=='function') {
       throw new TypeError("Function.prototype.bind - what is tring to be bound is not callable");
     }

       var aArgs = Array.prototype.slice(arguments, 1), fToBind = this, fNOP = function() {},  
       fBound = function() {
         return fToBind.apply(this instanceof fNOP &&oThis ? this: oThis || window,
           aArgs.concat(Array.prototype.slice.call(arguments)
           ));
       }
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();
        return fBound;
     }
   ```


      
   


