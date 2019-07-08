## CSS 动画 | Chapter 6

> [CSS动画简介 | 阮一峰](http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html)

### 动画的原理

- 视觉暂留作用

### CSS 动画类型

1. transition 补间动画（过渡动画）
2. keyframe 关键帧动画
3. 逐帧动画

### 补间动画

- 位置 - 平移（left / right / margin / transform）
- 方位 - 旋转（transform）
- 大小 - 缩放（transform）
- 透明度（opacity）
- 其他 - 线性变换（transform）

#### timing（easing）

> [timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function)
>
> [Cubic Bezier](https://cubic-bezier.com/)

定义动画进度和时间的关系。

transition 需要明确知道，开始状态和结束状态的具体数值，才能计算出中间状态。比如，height 从 0px 变化到 100px，transition 可以算出中间状态。但是，transition 没法算出 0px 到 auto 的中间状态，也就是说，如果开始或结束的设置是 height: auto，那么就不会产生动画效果。类似的情况还有，display: none到 block，background: url(foo.jpg) 到 url(bar.jpg) 等等。

### 关键帧动画

- 过渡动画必须由事件触发，而关键帧动画则不需要非得绑定事件。
- from <=> 0%, to <=> 100%

### 逐帧动画

- 适用于无法补间计算的动画
- 资源较大
- 使用 steps()

### 真题

1. CSS 动画的实现方式有几种
   1. transition
   2. keyframes(animation)
2. 过渡动画和关键帧动画的区别
   1. 过渡动画需要状态变化
   2. 关键帧动画不需要状态变化
   3. 关键帧动画能控制更精细
3. 如何实现逐帧动画
   1. 使用关键帧动画
   2. 去掉补间（steps）
4. CSS 动画的性能
   1. 性能不坏
   2. 部分情况下优于 JS
   3. JS 可以做到更好
   4. 部分高危属性，如 box-shadow 等
