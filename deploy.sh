#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy: 发布'

# 发布到 https://<USERNAME>.github.io
# 强制推送,会删除提交记录
git push -f git@github.com:sunny2009day/sunny2009day.github.io.git master

echo '发布成功---------'
cd -