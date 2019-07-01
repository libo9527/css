### HTML 常见元素和理解

HTML 常见元素大体可以分为两大部分，一部分是 head 中的元素，另一部分是则是 body 中的元素。

#### head 中的常见元素

head 中的元素不会在页面中留下直接的内容，表示页面的资源和一些描述。

- meta

  - chartset

    ```html
    <meta charset="utf-8">
    ```

    chartset：指定页面使用的字符集，一般都使用的是 `utf-8`

  - name

    > [在移动浏览器中使用viewport元标签控制布局](https://developer.mozilla.org/zh-CN/docs/Mobile/Viewport_meta_tag)
    >
    > 浏览器的 viewport 是可以看到Web内容的窗口区域，通常与渲染出的页面的大小不同，这种情况下，浏览器会提供滚动条以滚动访问所有内容。
    >
    > 窄屏幕设备（如移动设备）在一个虚拟窗口或视口中渲染页面，这个窗口或视口通常比屏幕宽；然后缩小渲染的结果，以便在一屏内显示所有内容。然后用户可以移动、缩放以查看页面的不同区域。例如，如果移动屏幕的宽度为640px，则可能会用980px的虚拟视口渲染页面，然后缩小页面以适应640px的窗口大小。
    >
    > 这样做是因为许多页面没有做移动端优化，在小窗口渲染时会乱掉（或看起来乱）。所以，这种虚拟视口是一种让未做移动端优化的网站在窄屏设备上看起来更好的办法。

    ```html
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    ```

    viewport：view 看，port 口，意为 ‘视口’。视口代表屏幕有多大。

    width=device-width：视口的宽度代表设备宽度。

    initial-scale=1.0：初始化的缩放比例是 1。

    maximum-scale=1.0：最大缩放比例是 1。

    user-scalable=no：用户不能缩放。

- title

- style

- link

- script

- base

  base 不是很常用，但在框架中可能会用到。base 指定一个基础路径，指定后页面中所有的路径都是以这个基础来进行计算。

#### body 中的常见元素

body 中的元素会在页面中直接显示内容。

- div / section / article / aside / header / footer

- p

- Span / em / strong

- Table / thead / tbody / tr / td

  - colspan：指定某单元格的高度占几个单元格。
  - rowspan：指定某单元格的宽度占几个单元格。

- ul / ol / li / dl / dt / dd

- a

  > [<a> - HTML（超文本标记语言） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)

  - href

    链接地址

  - target

    > 该属性指定在何处显示链接的资源。 取值为标签（tab），窗口（window），或框架（iframe）等浏览上下文的名称或其他关键词。以下关键字具有特殊的意义:
    >
    > - `_self`: 当前页面加载，即当前的响应到同一HTML 4 frame（或HTML5浏览上下文）。此值是默认的，如果没有指定属性的话。
    > - `_blank`: 新窗口打开，即到一个新的未命名的HTML4窗口或HTML5浏览器上下文
    > - `_parent`: 加载响应到当前框架的HTML4父框架或当前的HTML5浏览上下文的父浏览上下文。如果没有parent框架或者浏览上下文，此选项的行为方式与 `_self` 相同。
    > - `_top`: IHTML4中：加载的响应成完整的，原来的窗口，取消所有其它frame。 HTML5中：加载响应进入顶层浏览上下文（即，浏览上下文，它是当前的一个的祖先，并且没有parent）。如果没有parent框架或者浏览上下文，此选项的行为方式相同_self

    需要在哪里打开链接地址，默认是 _self，表示在当前页面打开。

- form / input / select / textarea / button

  - from[target, method, enctype]

    - target：表单提交地址

    - method：提交方式（get / post 等）

    - enctype：

      > **enctype**
      >
      > 当 `method` 属性值为 `post` 时, enctype 是将 form 的内容提交给服务器的 MIME 类型（媒体类型）。
      >
      > - `application/x-www-form-urlencoded`: 未指定属性时的默认值。
      > - `multipart/form-data`: 这个值用于一个 `type` 属性设置为 "file" 的 [`<input>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input) 元素。
      > - `text/plain (HTML5)`
      >
      > 这个值可以被 [`<button>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button) 或者 [`<input>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input) 元素中的 `formenctype` 属性重载（覆盖）。

      encode type，指定用什么方式进行编码，只要针对 post 请求，post 请求主要有两种编码方式，一种是 URL encode 的方式，另一种是 from data，这种方式会将 form 内容进行编码，然后放在请求体中，例如要上传文本时就需要指定为该类型。

    - form 表单的提交可以使用 button 或者 input 标签。

      ```html
      <button type="submit">提交按钮一</button>
      <input type="submit" value="提交按钮二"/>
      ```

    - form 表单的重置可以使用 botton 标签中指定 type="reset" 来实现。

      ```html
      <button type="reset">重置按钮</button>
      ```

  - input[type]

    - 单选框

      ```html
      <input type="radio" name="radio1" id="radio1-1"/>
      <label>选项一</label>
      <input type="radio" name="radio1" id="radio1-2"/>
      <label for="radio1-2">选项二</label>
      ```

      相同 name 的单选框为一组，一组中只能选中其中的一个。

- img

  - src：图片地址

  - alt：alternative，图拍未加载或加载失败时的替代文字。

- label

  用于和某个表单项进行关联，当用户点击这个 label 时相当于点击这个 label 所关联的表单项。一般常用在单选框或者复选框中，使得用户点击文字就可以选中。

  - for：指定要关联的表单项的 id 属性。

#### 如何理解 HTML

> 网页大纲生成工具：[h5o - HTML5 Outliner](https://h5o.github.io/)

HTML 就是用来描述文档的结构（可以理解为大纲）的语言。比如一份文档可以分为 “标题”，“摘要”，“主体” 等几部分。

### HTML 版本

> [Unicorn - W3C 统一验证工具 - W3C Validator](https://validator.w3.org/unicorn/?ucn_lang=zh-Hans)

- HTML4 基于 SGML 而来。SGML 是一种比 XML 更通用的标记语言。
- HTML5 之前的版本，网页开发者写的都很随意，这样就会出现很多边界的情况，例如标签没有闭合怎么办，或者一个属性用的大写，或者属性值没有加引号等待，这时浏览器会帮开发者做很多的容错，以保证浏览器不会挂掉，基本上不管你怎么写，浏览器都不会挂掉。浏览器做了太多的修正来帮开发者背锅。
- 基于 XML 产生了 XHTML，XHTML 要求很严格，例如要求所有的标签和属性都为小写，所有的属性必须拥有值。

| HTML4                | XHTML                | HTML5                |
| :------------------- | :------------------- | :------------------- |
| 标签允许不结束       | 标签必须结束         | 标签允许不结束       |
| 属性不用带引号       | 属性必须带引号       | 属性不用带引号       |
| 标签属性可大写       | 标签属性必须小写     | 标签属性可大写       |
| Boolean 属性可省略值 | Boolean 属性必须写值 | Boolean 属性可省略值 |

|| HTML4                                                        | XHTML                                                        | HTML5           |
|---| ------------------------------------------------------------ | ------------------------------------------------------------ | --------------- |
| dtd 文件是约束文件，指定该 html 文档应遵循的规范。 | \<!DOCTYPE html PUBLIC <br />"-//W3C//DTD XHTML 1.0 Transitional//EN" <br />"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> | \<!DOCTYPE html PUBLIC <br />"-//W3C//DTD XHTML 1.0 Transitional//EN" <br />"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> |\<!DOCTYPE html>|
| xmlns：指定 xml 的命名空间<br />即可使用哪些标签。 | \<html xmlns="http://www.w3.org/1999/xhtml"> | \<html xmlns="http://www.w3.org/1999/xhtml"> ||
|  | \<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> | \<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> |\<meta charset="utf-8" />|

#### HTML5 新增内容

- 新区块标签

  - section
  - article
  - nav
  - aside

- 表单增强

  - 日期、时间、搜索
  - 表单验证
  - Placeholder、自动聚焦

- 新增语义

  - header / footer 头尾

  - section / article 区域

  - nav 导航

  - aside 侧边栏，不重要内容

  - em / strong 强调

  - i icon

    H5 中 i 标签不再表示斜体，而是被常用来做图标使用。

### HTML 元素分类

#### 按默认样式分类

> [块级元素-MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements)
>
> [行内元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elemente#Elements)

- 块级元素 block

  方块的形状，默认占据整行，可指定宽高

- 行内元素 / 内联元素 inline

  没有固定的形状，不可指定宽高

- 内联块级元素 inline-block

  对外表现为 inline，对内表现为 block。可指定宽高。

按内容分类

> [内容分类- Web 开发者指南| MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Content_categories)
>
> [Content-model | w3c](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html)

![](https://developer.mozilla.org/@api/deki/files/6244/=Content_categories_venn.png?size=webview)

### HTML 元素嵌套关系

- 块级元素可以包含行内元素

- 块级元素不一定能包含块级元素

  - p 标签中不能包含 div 等

- 行内元素一般不能包含块级元素

  - a 元素中一般可以包含块级元素

    ```html
    <!-- 合法 -->
    <a href="#"><div>A &gt; DIV</div></a>
    <!-- 不合法 -->
    <p><a href="#"><div>P &gt; A &gt; DIV</div></a></p>
    ```

### HTML 元素默认样式和定制化

- bord 标签默认有 8px 的 margin

- ul 标签默认 `list-style-position: outside;`

#### CSS Reset

1. [CSS Tools: Reset CSS - Meyerweb](https://meyerweb.com/eric/tools/css/reset/)

1. [CSS Reset - YUI Library](https://yuilibrary.com/yui/docs/cssreset/)

1. *{margin:0;padding:0;}

   比较有争议的地方是 * 这种选择器的性能问题。

1. [Normalize.css: Make browsers render all elements more consistently.](https://necolas.github.io/normalize.css/)

### HTML 面试真题解答

1. doctype 的意义是什么

   - 让浏览器以标准模式渲染

     在很久以前，IE 有自己的渲染模式，最典型的就是盒子模型，例如一个 div 的宽高设为 100px，100px 时，它实际的宽高还包括 margin，早期的 IE 的盒子实际宽高还包括 padding，而标准模式并不包含 padding。当加上 doctype 后 IE 就会以标准模式进行渲染。

   - 让浏览器知道元素的合法性

2. HTML、XHTML、HTML5 的关系

   - HTML 属于 SGML
   - XHTML 属于 XML，是 HTML 进行 XML 严格化的结果。
   - HTML5 不属于 SGML 或 HTML，它自己就是一种规范，它比 XHTML 宽松

3. HTML5 有什么变化

   - 新的语义化元素

   - 表单增强

   - 新的 API（离线、音视频、图形、实时通信、本地存储、设备能力）

   - 分类和嵌套变更

     嵌套变更最明显的就是 a 元素，H5 之前 a 元素内是不可以嵌套块级元素的，H5 中 a 元素内是否可以嵌套块级元素取决于 a 元素外部是什么元素。

4. em 和 i 有什么区别

   - em 是语义化的标签，表示强调
   - i 是纯样式的标签，表示斜体
   - HTML5 中 i 不推荐使用，一般用作图标

5. 语义化的意义是什么

   - 开发者容易理解
   - 机器容易理解结构（搜索、读屏软件）
   - 有助于 SEO（**Search Engine Optimization** 搜索引擎优化）
   - semantic microdata

6. 哪些元素可以自闭合

   - input
   - img
   - br、hr
   - meta、link

7. HTML 和 DOM 的关系

   - HTML 是 “死” 的

   - DOM 是浏览器将 HTML 解析后生成的，是 “活” 的
   - JS 可以维护 DOM

8. property 和 attribute 的区别

   property 一般译为 “特性”，attribute 译为 “属性”

   - attribute 是 “死” 的
   - property 是 “活” 的

   ```html
   <input type="text" value="1"/>
   ```

   在浏览器后台中操作：

   ```js
   > input.value="2"
   > "2"
   > input.value
   > "2"
   > input.getAttribute("value")
   > "1"
   ```

9. form 标签的作用有哪些

   - 直接提交表单

   - 使用 submit / reset 按钮

   - 便于浏览器保存表单

     比如浏览器的记住账号密码的功能

   - 第三方库可以整体提取值

     比如 jQuery 的 serialize() 可以提取 form 中所有元素的值。

   - 第三方库可以进行表单验证
