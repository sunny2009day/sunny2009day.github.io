---
title: 记录一些算法
---

# 记录一些算法

> 算法很重要，要保持头脑清晰，清晰，清晰;

## 递归深拷贝
```c
function deepCopy(source) {
  let target = Array.isArray(source)?[]:{};
  for(var k in source) {
    if(typeof source[k] === 'object') {
      target[k] = deepCopy(source[k]);
    } else {
      target[k] = source[k];
    }
  }
  return target;
}
```

## 循环左移数组
```c
//逆序函数
function reverse(arr, left, right) {
  let temp;
  while(left < right) {
    //两数交换
    temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    //左下标+1,右下标-1
    left++;
    right--;
  }
}
//循环左移函数
//arr: 数组，n:左移位数
function loopLeft(arr, n) {
  if(arr === null ||arr.length === 0) return;
  //对左半部分进行逆序
  reverse(arr, 0, n-1);
  //对右半部分进行逆序
  reverse(arr, n, arr.length - 1);
  //对整个数组进行逆序
  reverse(arr, 0 , arr.length - 1);
  return arr;
}

```
## 背包问题
1. 0,1背包问题
```c
function knapsack(weights, values, w) {
    var n = weights.length - 1; //获取物品的个数
    var f = [[]];  //定义f矩阵
    for (var j = 0; j <= w; j++) {
        if (j < weights[0]) { //容量放不下物品0的重量,价值为0
            f[0][j] = 0;
        } else {
            f[0][j] = values[0]; //否则容量为物品0的价值
        }
    }
    for (var j = 0; j <= w; j++) {
        for (var i = 1; i <= n; i++) { //第一行，只能选一个物品，只有放不放0,1的选择
            if (!f[i]) { //创建新的一行
                f[i] = [];
            }
            if (j < weights[i]) {
                f[i][j] = f[i - 1][j]; //等于之前的最优值
            } else {
                f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weights[i]] + values[i])
            }
        }
    }

    return f[n][w];
}
console.log(knapsack([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10))
```
##  详解动态规划
- 示例：国王和金矿的问题
有5座金矿,每座金矿的黄金储量不同,需要参与挖掘的工人数也不同,参与挖矿工人的总数是10人,每座金矿要么全哇,要么不挖,不能派出一半人挖取一半金矿,用程序求解出,要想得到尽可能多的黄金,应该挖取那几座金矿?
 A:200金/3人, B:300金/4人, C:250金/3人, D:400金/5人, E:500金/5人
 - 最优子结构
  1> 4金矿10人最优
  2> 4金矿(10-5)工人的最优选择
 - 边界问题
 - 状态转移公式
  金矿数量为N,工人数为W,金矿的黄金量设为数组G[],金矿的用工量设为数组P[]:
  F(n,w) = 0 (n<=1,w<p[0])
  `F(n,w) = g[0] (n==1, w>=p[0])`
  `F(n,w) = F(n-1,w) (n>1, w<p[n-1])`
  `F(n,w) = max(F(n-1,w), F(n-1,w-p[n-1]+g[n-1]))  (n>1, w<p[n-1])`

```c
var max_n = 100;//程序支持的最多金矿数
var max_people = 10000;//程序支持的最多人数

var n = 5;//金矿数
var peopleTotal = 10;//可以用于挖金子的人数
var peopleNeed = [3,4,3,5,5];//每座金矿需要的人数
var gold = [200,300,350,400,500];//每座金矿能够挖出来的金子数
var maxGold = [] ; //maxGold[i][j]保存了i个人挖前j个金矿能够得到的最大金子数，等于-1时表示未知

//初始化数据 
function init() {

  for (var i = 0; i <=peopleTotal; i++){
    maxGold[i] = [];
    for (var j = 0; j < n; j++) {
      maxGold[i][j] = -1;//等于-1时表示未知 [对应动态规划中的“做备忘录”]
    }
  }
}

//获得在仅有people个人和前mineNum个金矿时能够得到的最大金子数，注意“前多少个”也是从0开始编号的
function GetMaxGold(people, mineNum) {
  //申明返回的最大金子数
  var retMaxGold;

  //如果这个问题曾经计算过  [对应动态规划中的“做备忘录”]
  if (maxGold[people][mineNum] != -1) {
    //获得保存起来的值
    retMaxGold = maxGold[people][mineNum];
  }
  else if (mineNum == 0)//如果仅有一个金矿时 [对应动态规划中的“边界”]
  {
    //当给出的人数足够开采这座金矿
    if (people >= peopleNeed[mineNum]) {
      //得到的最大值就是这座金矿的金子数
      retMaxGold = gold[mineNum];
    }
    else//否则这唯一的一座金矿也不能开采
    {
      //得到的最大值为0个金子
      retMaxGold = 0;
    }
  }
  else if (people >= peopleNeed[mineNum])//如果给出的人够开采这座金矿 [对应动态规划中的“最优子结构”]
  {
    //考虑开采与不开采两种情况，取最大值
    retMaxGold = Math.max(GetMaxGold(people - peopleNeed[mineNum], mineNum - 1) + gold[mineNum],
      GetMaxGold(people, mineNum - 1));
  }
  else//否则给出的人不够开采这座金矿 [对应动态规划中的“最优子结构”]
  {
    //仅考虑不开采的情况
    retMaxGold = GetMaxGold(people, mineNum - 1);
  }

  //做备忘录    
  maxGold[people][mineNum] = retMaxGold;
  return retMaxGold;
}

function _tmain(argc, argv) {
  //初始化数据
  init();
  //输出给定peopleTotal个人和n个金矿能够获得的最大金子数，再次提醒编号从0开始，所以最后一个金矿编号为n-1
  console.log(GetMaxGold(peopleTotal, n - 1));
  return 0;
}
_tmain();
```
##  BF,brute-force算法,简单朴素的模式匹配算法,常用于在一个主串S内查找一个子串T出现的位置
- 它的核心思想与操作是:
 . 对于给定的主串S与子串P,主串S的长度为N,子串T的长度为M;
 . 首先,将S[1]和T[1]进行比较
 . 若相等,则在比较S[2]和T[2],一直到T[M]为止;
 . 若S[1]和T[1]不等,则T向右移动一个字符的位置,再依次进行比较
 ```c
 const BF = (S, T)=>{
  let i =0;              //i表示主串S中当前位置下标
  let j = 0;
  while(S[i]!==undefined&&T[j]!==undefined) { //i或j其中一个到达尾部则终止搜索
    if(S[j] == T[i]) {     //若相等则继续进行下一个元素匹配
      i++;
      j++;
    } else {               //若匹配失败则j回溯到第一个元素重新匹配
      i = i -j +1;         //将i重新回溯到上次匹配首位的下一个
      j =0;
    }
  }
  if(i === 0)return -1;  
    return j - i;
 }
```
- 没有判断当S剩余的字符少于T应该终止循环，因为这样会用到length。
- 主串和子串匹配失败时,主串进行的回溯操作会影响效率,回溯之后主串与子串有些部分比较是没有必要的



