---
toc: false
nav:
    path: /components
group:
    title: 布局组件
    path: /components/layout/
    order: 3
---

# Layout 栅格布局

Layout 组件提供了 `24列栅格` ，通过在 `Col` 上添加 `span` 属性设置列所占的宽度百分比

## 代码演示

### 基础用法

<code src="./demo/index.tsx"></code>

## Row API

| 参数      | 说明                                                         | 类型            | 默认值 |
| --------- | ------------------------------------------------------------ | --------------- | ------ |
| className | 自定义 class 名                                              | string          | -      |
| children  | 子项内容                                                     | React.ReactNode | -      |
| justify   | 主轴对齐方式，可选值为 end center space-around space-between | string          | start  |
| align     | 交叉轴对齐方式，可选值为 center bottom                       | string          | top    |

## Col API

| 参数      | 说明            | 类型                | 默认值 |
| --------- | --------------- | ------------------- | ------ |
| className | 自定义 class 名 | string              | -      |
| style     | 自定义样式      | React.CSSProperties | -      |
| children  | 子项内容        | React.ReactNode     | -      |
| span      | 列元素宽度,1-24 | number              | -      |
