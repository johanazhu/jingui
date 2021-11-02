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

## 代码演示

### 基础用法

Layout 组件提供了 `24列栅格` ，通过在 `Col` 上添加 `span` 属性设置列所占的宽度百分比。此外，添加`offset` 属性可以设置列的偏移宽度，计算方式于 `span` 相同

<code src="./demo/index.tsx"></code>

## Row API

| 参数      | 说明            | 类型   | 默认值 |
| --------- | --------------- | ------ | ------ |
| className | 自定义 class 名 | string | -      |

## Col API

| 参数      | 说明            | 类型   | 默认值 |
| --------- | --------------- | ------ | ------ |
| className | 自定义 class 名 | string | -      |
