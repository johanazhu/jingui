---
toc: false
nav:
    path: /components
group:
    title: 业务组件
    path: /components/work
    order: 6
---

# 时间线 Timeline

## 代码演示

<code src="./demo/index.tsx"></code>

## API

### Timeline props

| 属性      | 说明            | 类型   | 默认值    |
| --------- | --------------- | ------ | --------- |
| className | 自定义 Class 名 | string | -         |
| percent   | 百分比          | string | -         |
| color     | 颜色            | string | `#4666D8` |

### TimelineItem Props

| 属性         | 说明            | 类型      | 默认值 |
| ------------ | --------------- | --------- | ------ |
| header       | 组件头部信息    | ReactNode | -      |
| footer       | 组件尾部信息    | ReactNode | -      |
| color        | 颜色            | string    | -      |
| dashed       | 是否为虚线      | boolean   | false  |
| count        | Item 组件的数量 | number    | -      |
| percent      | 百分比          | string    | -      |
| showPercent  | 是否显示百分比  | boolean   | -      |
| canShowColor | 是否显示颜色    | boolean   | true   |
