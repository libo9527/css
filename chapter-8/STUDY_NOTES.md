## Bootstrap | Chapter 8

> [Bootstrap · The most popular HTML, CSS, and JS library in the world.](https://getbootstrap.com/)
>
> Bootstrap是Twitter推出的一个用于前端开发的开源工具包。它由Twitter的设计师Mark Otto和Jacob Thornton合作开发，是一个CSS/HTML框架。

### 基础样式

### 常用组件

### JS 组件

> 基于 jQuery，使用时需要引入 jQuery。

需要引入 jQuery.js, proper.js, bootstrap.js。

使用方式：

- 基于 `data-*` 属性定义行为
- 基于 JS API

#### 响应式布局

即适配多设备，宽度不同时布局不同

#### 定制

- 使用 CSS 同名类覆盖

- 修改源码重新构建

  bootstrap 使用预处理器编写的，bootstrap3 采用的 Less，bootstrap4 采用的 Sass。

- 引用 scss 源文件，修改变量

  相当于把 bootstrap 当作一个 scss 组件库来使用了。

真题

1. Bootstrap 的优缺点

   优点：CSS 代码结构合理，现成的样式可以直接用

   缺点：定制较为繁琐，体积大

2. Bootstrap 如何实现响应式布局

   原理：通过 media query 设置不同分辨率的 class

   使用：为不同分辨率选择不同的网格 class

3. 如何基于 Bootstrap 定制自己的样式

   - 使用 CSS 同名类覆盖

   - 修改源码重新构建

     bootstrap 使用预处理器编写的，bootstrap3 采用的 Less，bootstrap4 采用的 Sass。

   - 引用 scss 源文件，修改变量

     相当于把 bootstrap 当作一个 scss 组件库来使用了。
