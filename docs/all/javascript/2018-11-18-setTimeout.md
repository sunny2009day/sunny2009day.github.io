---
layout: post
title: setTimeout执行机制
date:   2018-11-18 18:07:16
categories: javascript
pid: 20181118-180716
pin: 0
---

    <title>setTimeout</title>
    <script type="text/javascript" >
        (function(){
            setTimeout(function(){
                  console.log('init')
                    }, 0);

            function get(id){
                return document.getElementById(id);
            }

            window.onload = function(){
                get('makeinput').onmousedown = function(){
                    var input = document.createElement('input');
                    input.setAttribute('type', 'text');
                    input.setAttribute('value', 'test1');
                    get('inpwrapper').appendChild(input);
                    input.focus();
                    input.select();
                }
                get('makeinput2').onmousedown = function(){
                    var input = document.createElement('input');
                    input.setAttribute('type', 'text');
                    input.setAttribute('value', 'test1');
                    get('inpwrapper2').appendChild(input);
                    setTimeout(function(){
                        input.focus();
                        input.select();
                    }, 0);
                }
                get('input1').onkeypress = function(){
                    get('preview1').innerHTML = this.value;
                }
                get('input2').onkeypress = function(){
                    setTimeout(function(){
                        get('preview2').innerHTML = get('input2').value;
                    },0 );
                }
            }
            console.log('end')
        })();

    </script>

</head>

<body>
<h1>setInerval和setTimeout的回调函数中this的执行都是window,因为JS的定时器
  方法是定义在Window下的
<h1>
<h2>
  setInterval('snake.move()', 100);//执行多次,可以传参数，但是需要时调用setInterval的this指向的作用域参数,
  //如此时this-->window,传递的变量需要时全局的window.变量,snake.move中的this为snake;

  setInterval(snake.move, 100); //执行多次，但snake.move的函数中执行会变成window

  setInterval(snake.move(),100) // 调用函数调用时直接会只执行一次，
  //  因函数的调用需要有返回值，没有即undefined,setInterval只执行一次
</h2>

<h1><code>DEMO1</code></h1>
<h2>1、未使用 <code>setTimeout</code>（未选中文本框内容）</h2>
<button id="makeinput">生成 input</button>
<p id="inpwrapper"></p>
<h2>2、使用 <code>setTimeout</code>（立即选中文本框内容）</h2>
<button id="makeinput2">生成 input</button></h2>
<p id="inpwrapper2"></p>

--------------------------------------------------------------------------
<h1><code>DEMO2</code></h1>
<h2>1、未使用 <code>setTimeout</code>(只有输入第二个字符时，前一个字符才显示出来)</h2>
<input type="text" id="input1" value=""/><div id="preview1"></div>
<h2>2、使用 <code>setTimeout</code>(输入时，字符同时显示出来)</h2>

<input type="text" id="input2" value=""/><div id="preview2"></div>

</body>
</html>