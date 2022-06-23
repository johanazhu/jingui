---
toc: false
nav:
    path: /components
group:
    title: 布局组件
    path: /components/layout
    order: 3
---

# Layout 栅格布局

Layout 提供了 Row 和 Col 两个组件来进行行列布局。

## 代码演示

Layout 组件提供了 `24列栅格` ，通过在 `Col` 上添加 `span` 属性设置列所占的宽度百分比

### 基础用法

<code src="./demo/index.tsx"></code>

## Row API

| 参数     | 说明                                                         | 类型              | 默认值 |
| -------- | ------------------------------------------------------------ | ----------------- | ------ |
| children | 子项内容                                                     | React.ReactNode   | -      |
| justify  | 主轴对齐方式，可选值为 end center space-around space-between | string            | start  |
| align    | 交叉轴对齐方式，可选值为 center bottom                       | string            | top    |
| onClick  | 点击事件                                                     | event: MouseEvent | -      |

## Col API

| 参数     | 说明           | 类型              | 默认值 |
| -------- | -------------- | ----------------- | ------ |
| children | 子项内容       | React.ReactNode   | -      |
| span     | 列元素宽度     | number            | -      |
| offset   | 列元素偏移距离 | number            | -      |
| onClick  | 点击事件       | event: MouseEvent | -      |
