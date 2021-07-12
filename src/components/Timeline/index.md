---
nav:
    title: 组件
    path: /components
---

**Demo**

<code src="./demo/index.tsx"></code>

**Timeline props**

| 属性      | 说明            | 类型    | 默认值 |
| --------- | --------------- | ------- | ------ |
| className | 自定义 Class 名 | string  | -      |
| percent   | 百分比          | string  | -      |
| color     | 颜色            | string  | -      |
| hundred   | 是否显示百分号  | boolean | false  |

**TimelineItem Props**
| 属性 | 说明 | 类型 | 默认值 |
| --------- | --------------- | ---------------------------------------------------------------------------------- | ------ |
| header | 组件头部信息 | React.ReactNode | - |
| footer | 组件尾部信息 | React.ReactNode | - |
| color | 颜色 | string | - |
| dashed | 是否为虚线 | boolean | false |
| count | Item 组件的数量 | number | - |
| percent | 百分比 | string | - |
| showPercent | 是否显示百分比 | boolean | - |
| canShowColor | 是否显示颜色 | boolean | true |
