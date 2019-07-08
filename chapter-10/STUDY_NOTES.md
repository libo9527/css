## 框架中的 CSS | Chapter 10

- Angular, Vue, React 三大框架

- Angular, Vue 内置样式集成

- React 一些业界实践

### Angular

- Angular.js (1.x) 没有样式集成能力
- Angular (2+) 提供了样式封装能力，与组件深度集成

#### 模拟 Scoped CSS

- 方案一：随机选择器（Angular 不支持）
  - css modules
- 方案二：随机属性
  - `<div abcdefg>`
  - `div[abcdefg]{ }`

### ShadowDOM

- 逻辑上的一个 DOM
- 结构上存在子集结构

### Scoped CSS

- 限定了范围的 CSS
- 无法影响外部元素
- 外部样式一般不影响内部
- 可以通过 /deep/ 或者 >>> 穿透

### Vue

#### 模拟 Scoped CSS

- 方案一：随机选择器

  - css modules

    ```vue
    <template>
    	<div :class="$style.demo">Hello, I`m {{name}}</div>
    </template>
    
    <style module>
      .demo{
        color: red;
      }
    </style>
    ```

    

- 方案二：随机属性

  - `<div abcdefg>`
  - `div[abcdefg]{ }`

### React

- 官方没有集成方案
- 社区方案众多
  - css modules
  - （babel）react-css-modules
  - styled components
  - styled jsx