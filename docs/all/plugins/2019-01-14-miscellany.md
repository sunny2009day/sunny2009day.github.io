---
layout: post
title:  前端组件库杂记
date:   2019-01-14 18:07:16
categories: plugins
pid: 20190114-180716
pin: 0
---

> 

```c
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
ReactDOM.render(<Hello name="孙文杰">
    123
    </Hello>
)
```


```c
export default function Hello(prop) {
    //返回合法的jsx虚拟dom元素
    return <div> {prop.name}</div>
}
 
function person(nmae, page){
    this.name = name;
    this.page = page;
}
new person('王多多', '111');
```

```c
//class关键字内部，还是用原来的配方实现，把class关键字称坐语法糖
class Animal{
    //每个类中都有一个构造器
    //如果没有指定，每个类有隐形的构造器
    //每当new这个类的时候，必先执行该构造器代码 
   constructor(nmae, page){
       //实力属性
    this.name = name;
    this.page = page;
   }

   //class内部的{}内，只能出写静态方法,静态属性，实例方法构造器，

   //在class内部，通过static修饰的属性，就是静态属性
   static info = 'dsfdsf';


  jiao() {
      //Animal的实例方法，挂载在原型对象上的
  }

  static show() {
      //静态方法
  }
};

console.log(Animal.show());
//创建dom类
const p1 = new Animal("孙文", 12);
//通过new实例访问的属性，实例属性
//通过构造函数，直接访问的属性，叫静态属性
console.log(p1.name);

p1.info = "23123";//静态属性



function person () {}

person.prototype.say = function() {
    console.log('person的实例方法')
}
person.say();
```

```c
//静态方法
person.show = function() {
    console.log()
}
```

```c
//extend 继承

//父类，直接父类理解成原型对象
class Persons {
    constructor(name, age){
        this.name =name;
        this.age = age;
    }

    //实例方法
    sayHello() {
        console.log('qqqq')
    }
}

const p2 = new Persons('孙', '1');


//子类
//在class类中用extend实现子类继承父类
class Chinese {
    
    constructor(name, age, IDNumber){
        // this.name =name;
        // this.age = age;
   //IDNumber独有的属性不适合挂在父类上
  //在子类中this 只能在super之后使用
        super(name, age);
        //实例初始化时传参数,super中也需要传
      this.IDNumber = IDNumber;
      //如果所有子类都共享的，便放在父类上

    }

    //一定要在constructor 中要调用super,如果一个子类，通过extends
    //关键字继承了父类，那么在子类的constructor 必须优先第一行调用super()

    //super是一个函数，父类的构造器，子类中的super其实是父类构造函数的引用
    //调用了super之后，al实例的new和age都变成了undefine


}
```
```c
class Chinese extends Persons {
    sayHello() {
        console.log('qqqq')
    }
    //实例添加到父方法，子类可继承
}

const al = new Chinese('name', 2);


//使用class定义组件，必须继承React.Compont
class 组件名称 extends React.Compont {
    //在组件内部必须有render函数
    //渲染当前组件对应的虚拟dom结构


    constructor() {
        //自定义的构造器中必须调用super
        super()
        //先调用super才可以使用this
        this.state = {};//相当于vue中的 data(){return {}}
    }
    render() {//是class的实例方法

        //在class创建的组件中想使用通过props外地传入的参数不需要接受，
        //直接this.props.XX

        //无论class还是function创建的组件props都为只读，不可以该
        //使用function创建的组件没有自己的私有属性和生命周期，class有
        return <div>{this.state.name}这是class创建的组件</div>;
    }
   
}
```
```c
//class创建的组件叫有状态组件，本质是有无state属性和生命周期函数
//用构造函数创建的组件为无状态组件
//无状态组件运行效率较高

//props中的数据是外界传入，data是组件私有，ajax调用或自定义



class ComtList extends ReactDOM() {
    constructor() {
        super()
    }
    
    render() {
        return <div >
            <h1>这是评论列表组件</h1>
            {this.state.CompengList.map(item=><div key={item.id}></div>)}
            </div>
    }
}


import ConItem from './'

export default class ConIterm extends React.age 
//暴露出去


//在组建中使用style行内样式

{/*在jsx中写行内样式不能为style设置字符串的值，应该style={{color: 'red'}}
  行内样式中数值可以不用引号包围，字符串类型必须用引号包围*/}


  const itemStyle = {
      boder: '1px dashed #ccc',padding: '10px'
  }

  //演示react中使用普通css样式的作用域冲突
  //使用localIdentName自定义生成的类名样式，可选的参数有
  //【path】表示样式表，相对于项目根目录所在路径
  //[name]表示样式表文件名
  //[local]表示样式的类名定义名称
  //[hash:lwngth]默认32位，：加长度


//不想让某类模块化,被:global包裹的类名会变成全局对象
// :global(.test){ font-style: italic;}
//{/*<h1 className={cssobj.title + 'test'}>这是</h1>*/}
//{/*<h1 className={[cssobj.title, 'test'].join('')}>这是</h1>*/}
  
//被local()包裹起来的类名，会被模块化，默认情况下，所有类名和DID都被模块化了

//第三方样式表问题
//import bootcss from 'bootstrap/dist/bootstrap.css'
//如果在引用某个包的时候。这个包被安装在了node_moudle这一层目录，直接以包名开始引入自己的模块或样式表
//把自己的样式表和第三方样式表进行区分，可以把自己的定义为.scss,第三方css还是css
```




```c
import cssobj from '@/css/cmtlist.css'
//属性绑定的形式加类名
 export default class BindEvent extends React.Component(
    constructor() {
        super()
        //私有数据
        this.state = {}
    }
    render() { 
        //render属于生命周期函数
        return 
    <div  className={cssobj.title} 
      onClick={this.methodHandler}
    >
    {/**onClick 只接受function作为处理函数*
        箭头函数本身就是一个匿名的函数,箭头函数内部永远指向外界的this,不指向调用者
       
    */}
    <button className={bootcss.btn,bootcss['btn-primary']}>按钮</button>
    {/*bootcss 第三方样式已经启用模块化了*/}
    </div>
    }
    //和render评级可写点击处理函数
    //实例方法
    methodHandler(){
      show = (arg)=>{

      }
    }
   
)

//css 模块化只针对类选择器和id选择器，不会将标签选择模块化
//直接导入的css表在整个项目生效 react中没有指令概念
//VUE组件中的样式表，也有冲突 可使用scoped 

//React中的事件,第二个字母的首字母必须大写,有一套自己的事件绑定机制，小驼峰命名
//onClick = {function(){console.log('123')}}

//React中不要直接使用this.state改变其值，用this.setState({}, callback)修改
//在setstate中只会把对应的state状态更新，不会覆盖其他的state状态
//this.setState方法执行是异步的
//如果需要在this.setState之后，又想立即拿到最新的函数值
//通过回调函数
//想修改调那个


//#region，绑定事件并在事件函数中处理
 之间的代码可以折叠
//#endregion


{/*如果我们只把文本的value属性，绑定到了state状态
，但是不提供onChange处理函数，得到的文本框将是一个只读的文本框
当为文本绑定一个value值以后，要么同时提供一个readOnly,
要么提供一个onChange处理函数*/}

{/**如果想把页面中的state值传到react,需要手动监听onchange事件、
调用this.setState***/}




//Vue的new 初始化可以先创建后 .$mout('#app'),挂赞dom元素
//当魔板在内存中编译完成会立即创建beforeMount,此时dom内容还没有在页面上显示
//此时用户看到的只是模板页面

//mounted组件创建阶段最后生命周期函数，此时页面已经真正渲染好了，组件离开创建进入运行阶段

//第三方UI插件这个插件还需要被初始化，最好在mount中

    )
{/*这里的movie标签其实就是movie类的实例对象*/}

//vue 先拿到最新data数据，根据最新数据在内存中重新渲染dom树在并把渲染好的模板结构替换到界面上，
//当beforeDestroy时组件即将销毁，但数据仍然正常可用
//生命周期特定时候执行的特定的函数



//uodated,渲染完毕，数据和页面都是最新的



//react的生命周期钩子函数

//创建阶段 ，执行第一个函数时constract构造
//shoudComponentUpdate,compontWillUnmount

 
> webpack

 
module.export = {
    plugins: [
      htmlPlugin
    ],
module : { //所有第三方模块的配置规则

    rules: [
        {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},//exclude排除项
       
       //第三方样式表，都是以.css结尾，提供模块化和非模块化打包需要区分
        {test: /\.css$/, use:['style-loader',
        'css-loader?mdules&localIdentName=[path][name]-[local]-[hash:5]']},
        //打包处理css样式表的第三方loader，****-loader后缀名不能省略
        //loader从右向左调用一下,在css,loader之后通过问号加参数，启用css模块化
        //为样式表打包模糊其中的类名
        {test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader'}//打包处理字体文件
    ]
    
},
    resolv: {
       extensions: ['js', 'jsx', 'json'] ,//表示，这几个文件的后缀名可以不写
       alias: { //别名
         '@': path.join(_dirname, '/src')//@表示src层的绝对路径
       }
    }
} 

```







