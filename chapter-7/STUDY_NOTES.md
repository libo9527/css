## CSS 预处理器 | Chapter 7

- 基于 CSS 的另一种语言
- 通过工具编译成 CSS
- 添加了很多 CSS 不具备的特性
- 能提升 CSS 文件的组织

比较流行的有 Sass、less、stylus 等。

优点：

- 嵌套，反应层级和约束
- 变量和计算，减少重复代码
- Extend 和 Mixin 代码片段
- 循环，适用于复杂有规律的样式
- 导入，CSS 文件模块化

### Less

#### &

表示与父级同级。例如：

```less
.content{
  font-size: 14px;
  &:hover{
    background:red;
  }
}
```

编译后：

```css
.content {
  font-size: 14px;
}

.content:hover {
  background: red;
}
```

#### 变量

变量前使用 `@`，sass 使用 `$` 符。原因是他们的理念不同，less 偏向于和 css 类似的方式，而 sass 则偏向于和 css 做区分的方式。

#### 函数

- lighten

  ```less
  background: lighten(@bgColor, 40%);
  ```

### Mixin

#### Less

```less
.block(@fontSize){
    ...
}

.nav{
  .block(@fontSize);
}
```

#### Sass

```scss
@mixin block($fontSize){
    ...
}

.nav{
  @include block($fontSize);
}
```

### Extend

#### Less

```less
.block{
  ...
}

.nav:extend(.block){
  color: #333;
}
```

#### Sass

```scss
.block{
  ...
}

.nav{
  @extend .block;
  color: #333;
}
```

### Loop

#### Less

```less
.gen-col(@n) when (@n > 0){
    .gen-col(@n - 1);
    .col-@{n}{
        width: 1000px/12*@n;
    }
}

.gen-col(12);

// 编译后
.col-12 {
  width: 1000px;
}
	.
	.
	.
.col-1 {
  width: 83.33333333px;
}
```

#### Sass

```scss

@mixin gen-col($n){
  @if $n > 0 {
    @include gen-col($n - 1);
    .col-#{$n}{
      width: 1000px/12*$n;
    }
  }
}

@include gen-col(12);

// sass 支持 for 循环
@for $i from 1 through 12 {
  .col-#{$i} {
    width: 1000px/12*$i;
  }
}
```

### @import

less / sass 中变量只要正确引入了就可以跨文件使用。例如在 main.less 中引入variable.less, module1.less, module2.less。在 module1 / module2 中就可以直接使用定义在 variable 中的变量。

### CSS 预处理器框架

- SASS - Compass
- Less - Lesshat（国外） / EST（国内）
- 提供现成的 mixin
- 类似 JS 类库，封装常用功能

### 真题

1. 常见的 CSS 预处理器

   - Less (Node.js)
   - Sass (Ruby, 有 Node 版本)
   - Stylus

2. 预处理器的作用

   - 更好的组织 CSS 代码
   - 提高代码复用率
   - 提升可维护性

3. 预处理器的能力

   - 嵌套，反应层级和约束
   - 变量和计算，减少重复代码
   - Extend 和 Mixin 代码片段
   - 循环，适用于复杂有规律的样式
   - 导入，CSS 文件模块化

4. 预处理器优缺点

   优点：提高代码复用率和可维护性

   缺点：需要引入编译过程，有一定的学习成本
