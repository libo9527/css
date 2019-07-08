## 效果属性 | Chapter 5

### box-shadow

- 营造层次感（立体感）
- 充当没有宽度的边框
- 特殊图案

### text-shadow

- 立体感
- 印刷品质感

### border-radius



### background

- 纹理、图案
- 渐变
- 雪碧图动画
- 背景图尺寸适应

### clip-path

- 对容器进行裁剪
- 自定义路径（ `<svg>`)

### 3D 变换

> [3d transform的坐标空间及位置](http://acgtofe.com/posts/2015/12/xyz-3d-in-css)
>
> [【CSS3进阶】酷炫的3D旋转透视](https://www.cnblogs.com/coco1s/p/5414153.html)
>
> 右手螺旋法则：拇指方向为坐标轴正向，四指方向为顺时针方向。

- 变换 transform
  - translate：平移
  - scale：缩放
  - skew：斜切
  - rotate：旋转

注意：transform 变换和动画是两个不同的概念，两者之间没有必然联系。

### 真题

1. 如何用一个 div 画 XXX
   - box-shadow 无限投影
   - ::before
   - ::after
2. 如何产生不占空间的边框
   - box-shadow
   - outline
3. 如何实现圆形元素（头像）
   - border-radius：50%
4. 如何实现 IOS 图标的圆角
   - clip-path：（svg）
5. 如何实现半圆、扇形等图形
   - border-radius 组合
   - 有无边框
   - 边框粗细
   - 圆角半径
6. 如何实现背景图居中显示 / 不重复 / 改变大小
   - background-position
   - background-repeat
   - background-size (cover / contain)
7. 如何平移 / 放大一个元素
   - transform: translateX(100px)
   - ransform: scale(2)
8. 如何实现 3D 效果
   - perspective: 500px
   - transfprm-style: preserve-3d
   - transform: translate rotate ...
