# 同一台机器使用不同版本的webpack and webpack-devser  node_modules/.bin/webpack
# app.js已经默认插入了 html-webpack-plugins inject字段默认true的作用 
# render里面的东西已经被插入到index.html里面了 只不过看不到 用浏览器就能看到了
# 一直输入打包命令太长了 webpack-dev-server可以检测文件变化自动编译
# gitignore 不起作用的话 清楚缓存重新提交 
+ git rm -r --cached .
+ git add .
+ git commit -m "update"