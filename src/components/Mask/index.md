---
toc: false
nav:
    path: /components
group:
    title: 基础组件
    path: /components/base
    order: 2
---

# Mask 遮罩层

遮罩层，popup、portal 等组件的基础组件

### 代码演示

<code src="./demo/index.tsx" />

### API

| 参数      | 说明             | 类型              | 默认值       |
| --------- | ---------------- | ----------------- | ------------ | ------ |
| className | 自定义 class 名  | string            | -            |
| style     | 自定义样式       | CSSProperties     | -            |
| visible   | 是否显示         | boolean           | false        |
| type      | 遮罩层的类型     | `normal           | transparent` | normal |
| onClick   | 点击后的回调事件 | MouseEventHandler | -            |
