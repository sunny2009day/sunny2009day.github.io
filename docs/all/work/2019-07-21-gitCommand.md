---
title: git command 命令记录
---

> git记录

 - 执行完commit后想撤回commit,git reset --soft HEAD^，HEAD^的意思是上一个版本，也可以写成HEAD~1
 如果你进行了2次commit，想都撤回，可以使用HEAD~2
 git commit --amend(默认进入vim编辑器，修改注释)
 
> git cherry-pick操作步骤 :
 - git checkout  product_release
 - git cherry-pick commitid
 - 报冲突的话，直接修改文件解决冲突(You are currently cherry-picking commit 525e844.
 - 冲突可以全文查找- 525e844reset --
 - )
 - git add 文件名
 - git cherry-pick --continue
 - GIT严格区分大小写
> 编辑器找不到一直报错，
直接 git config --global core.editor notepad 还不行，要
it config --global core.editor notepad  --addss
> 笨蛋啊，人家都说是不稳定版本了,你还下pre-release版本

- git push 失败出现error: src refspec master does not match any.解决方案， git config --global user.email,设置simple简单模式

- 不能使用完全动态的import语句，如import（foo）。因为foo可能是系统或项目中任何文件的任何路径。
import（）必须至少包含有关模块所在位置的一些信息。

> git目录下直接切换远程分支 git checkout <分支名>,切换后等于新建的分支，没有上游分支，需要set-upstream，
   git branch --set-upstream-to='origin/remote_branch'  <本地当前分支>
   git checkout -b <本地分支名>，会新建分支
   - 不想以后在设置upstream可以在checkout分支的时候
   `git checkout -b <本地分支名> origin/<线上分支名>`
> 将本地项目提交到远程仓库
- git init 初始化本地项目
- git remote remove origin; 删除默认的关联仓库
- git remote add  origin 远程仓库地址; 添加新的远程仓库的地址
- git remote add registry 
- git push --set-upstream origin 远程仓库分支名; 关联远程分支
- ok 
> webpack4, webpack 已经将 webpack 命令行相关的内容都迁移到 webpack-cli，所以除了 webpack 外，我们还需要安装 webpack-cli