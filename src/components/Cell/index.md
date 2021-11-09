---
toc: false
nav:
    path: /components
group:
    title: 基础组件
    path: /components/base
    order: 2
---

# Cell 列表项

为列表中的单个展示项

### 代码演示

Cell 可以单独使用，也可以与 CellGroup 搭配使用，CellGroup 可以为 Cell 提供上下外边框。

<code src="./demo/index.tsx"></code>

<!-- CellGroup 的使用方法 -->

<!-- <code src="./demo/index2.tsx"></code> -->

### API

| 属性      | 说明            | 类型      | 默认值 |
| --------- | --------------- | --------- | ------ |
| className | 自定义 Class 名 | string    | -      |
| title     | 标题            | ReactNode | -      |
| more      | 更多渲染        | ReactNode | -      |
| children  | 组件中的内容    | ReactNode | -      |
