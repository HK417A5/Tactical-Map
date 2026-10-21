# Tactical Map — 可编辑静态网站

## 文件对应

- index.html：首页
- room-settings.html：房间设置
- tool-settings.html：工具设置
- map.html：地图页面
- style.css：所有页面共用的样式，已分行缩进
- script.js：可选的轻量展示交互，已添加注释
- assets/：图片文件夹

## 如何修改

直接用浏览器打开 index.html 即可预览。也可以在 VS Code 使用 Live Server。
四个页面的具体内容都在各自的 HTML 中，不需要到 JavaScript 里寻找页面模板。
修改文字：打开对应 HTML，编辑标签之间的内容。
修改颜色：编辑 style.css 顶部 :root 的变量。
修改布局：根据 class 名在 style.css 中搜索对应规则。
添加功能：在 script.js 中添加代码。HTML 内容不依赖 JavaScript 加载。
导航和页脚分别写在每个 HTML 中；修改公共内容时需要同步四个页面。

## 图片替换

搜索 HTML 中的 <img>，修改 src 和 alt。
例如：首页彩虹六号封面是 assets/rainbow-six-siege.jpg。
地图图片是 assets/house-tactical-map.jpg。
放入对应文件名的图片后即可显示；暂未放入图片时保留 alt 文本。
首页横幅目前是文字占位，可以在 .banner 内添加自己的图片。

## 页面路径

游戏封面 → room-settings.html
首页 Add New → tool-settings.html
Start Room → map.html
地图工具区 Add New → tool-settings.html

## 展示范围

页面跳转、搜索、选择状态、时间轴和短语输入属于本地展示交互。
房间、好友、密码、标记和预设没有真实后台，也不会持久保存。
为简化编辑，房间页封面固定为 Rainbow Six Siege；点击其他封面也进入同一个示例设置页。

## 上传 GitHub

将本文件夹内的文件放到仓库根目录，确保 index.html 位于根目录。
用这些文件替换旧版本，删除旧 app.js（新版本使用 script.js）。
GitHub Pages 使用 main 分支和 / (root)。
