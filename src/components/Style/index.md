---
toc: false
nav:
    path: /components
group:
    title: 基础组件
    path: /components/base
    order: 2
---

# Style 内置样式

### 介绍

JingUI 中默认包含了一些常用样式，可以直接通过 className 的方式使用。

### 文字省略

当文本内容长度超过容器最大宽度时，自动省略多余的文本。

```html
<!-- 最多显示一行 -->
<div class="jing-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>

<!-- 最多显示两行 -->
<div class="jing-multi-ellipsis--l2">
    这是一段最多显示两行的文字，多余的内容会被省略
</div>

<!-- 最多显示三行 -->
<div class="jing-multi-ellipsis--l3">
    这是一段最多显示三行的文字，多余的内容会被省略
</div>
```

### 1px 边框

为元素添加 Retina 屏幕下的 1px 边框（即 hairline），基于伪类 transform 实现。

```html
<!-- 上边框 -->
<div class="jing-hairline--top"></div>

<!-- 下边框 -->
<div class="jing-hairline--bottom"></div>

<!-- 左边框 -->
<div class="jing-hairline--left"></div>

<!-- 右边框 -->
<div class="jing-hairline--right"></div>

<!-- 上下边框 -->
<div class="jing-hairline--top-bottom"></div>

<!-- 全边框 -->
<div class="jing-hairline--surround"></div>
```

### 安全区

为元素添加安全区适配。

```html
<!-- 顶部安全区 -->
<div class="jing-safe-area-top"></div>

<!-- 底部安全区 -->
<div class="jing-safe-area-bottom"></div>
```

### 动画

这里通过 `react-transition-group` 第三方库使用内置的动画

```bash
# 安装
yarn add react-transition-group
```

```js
import { CSSTransition } from 'react-transition-group';
```

<code src="./demo/index.tsx" />
