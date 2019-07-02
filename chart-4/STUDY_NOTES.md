## CSS 布局 | Chart 4

### 常用的布局方法

- table 表格布局
- float 浮动 + margin
- inline-block 布局
- flexbox 布局

### 表格布局

### 盒模型

1. W3C 标准盒模型：

   属性width,height只包含内容content，不包含border和padding。

   ![](https://guxinyan.github.io/blogImg/%E6%A0%87%E5%87%86%E7%9B%92%E6%A8%A1%E5%9E%8B.png)

2. IE 盒模型：

   属性width,height包含border和padding，指的是content+padding+border。

### display

确定元素的显示类型

- block

  有独立宽高，独占一行

- inline

- inline-block

  对内表现为 block，对外表现为 inline

### position

确定元素的位置

- static

- relative

- absolute

  相对于最近的非 static 父级元素进行定位

- fixed

### flexbox 弹性盒子

### float 浮动布局

- 最麻烦的布局方式。
- 脱离文档流
- 不会脱离文本流

对自身的影响：

- 形成 “块”（BFC）

  当为行内元素设置了 float 属性后，行内元素就变成了块级元素，可以为其设置宽高等属性。

- 位置尽量靠上，靠左（float：left）右（float：right）

对兄弟元素的影响：

- 上面贴非 float 元素
- 旁边贴 float 元素
- 不影响其他块级元素位置
- 影响其他块级元素内部文本

对父级元素的影响：

- 从布局上 “消失”
- 高度塌陷

### inline-block 布局

- 像文本一样排 block 元素

- 没有清除浮动等问题

- 需要处理间隙

  - 父级字体大小设为 0

  - 相邻元素在 html 中不换行

  - 相邻元素在 html 中使用注释换行

    ```html
    <div class="left">
      左
    </div><!--
    --><div class="right">
      右
    </div>
    ```

### 响应式设计和布局

在不同设备上正常使用，一般主要处理屏幕大小问题。

主要方法：

- 隐藏 + 这行 + 自适应空间

- rem / viewport / media query

  - media query

  ```css
  /* 宽度小于640时隐藏 */
  @media (max-width: 640px){
    .left{
      display: none;
    }
  }
  ```

  - rem

    1rem = 1 html的 font-size

