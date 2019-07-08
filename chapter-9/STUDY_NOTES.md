## CSS 工程化 | Chapter 9

组织、优化、构建、维护

### PostCSS

CSS → PostCSS 解析转换 → CSS

- PostCSS 本身只有解析能力
- 各种神奇的特性全靠插件
- 目前至少有二百多个插件
  - import 模块合并
  - autoprefixier 自动加前缀
  - cssnano 压缩代码
  - cssnext 使用 CSS 新特性
  - precss 变量、mixin、循环等

### PostCSS 支持的构建工具

- CLI 命令行工具
- webpack postcss-loader
- Gulp gulp-postcss
- Grunt grunt-postcss
- Rollup rollup-postcss

### Webpack

- JS 是整个应用的核心入口
- 一切资源均由 JS 管理依赖
- 一切资源均由 Webpack 打包



- css-loader 将 CSS 变成 JS
- style-loader 将 JS 样式插入 head
- ExtractTextPlugin 将 CSS 从 JS 中提取出来
- css modules 解决 CSS 命名冲突的问题
- less-loader / sass-loader 各类预处理器
- postcss-loader PostCSS 处理



CSS预处理器好比给你一个工具箱，工具箱里面有什么东西该怎么拿已经跟你约定好，你必须按照这个规则来拿；而PostCSS好比给你一个盒子，你可以从旁边选择自己需要的工具放进盒子打包拿走，如果还不够用你可以自己造一个工具。

### 真题

1. 如何解决 CSS 模块化问题
   - Less / Sass 等 CSS 预处理器
   - PostCSS 插件（postcss-import / precss 等）
   - webpack 处理 CSS（css-loader + style-loader）
2. PostCSS 可以做什么
   - 取决于插件可以做什么
   - autoprefixer、cssnext、precss 等兼容性处理
   - import 模块合并
   - css 语法检查，兼容性检查
   - 压缩文件
3. CSS modules 是做什么的，如何使用
   - 解决类名冲突的问题
   - 使用 PostCSS 或者 webpack 等构件工具进行编译
   - 在 HTML 模版中使用编译过程产生的类名
4. 为什么使用 JS 来引用、加载 CSS
   - JS 作为入口，管理资源有天然优势
   - 将组件的结构、样式、行为封装到一起，增强内聚
   - 可以做更多处理（webpack）
