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

### Cell API

| 属性      | 说明                 | 类型                           | 默认值 |
| --------- | -------------------- | ------------------------------ | ------ |
| title     | 左侧标题             | `number 、 string`             | -      |
| value     | 右侧内容             | `number 、 string 、ReactNode` | -      |
| label     | 标题下方的描述信息   | string                         | -      |
| desc      | 内容下方的描述信息   | string                         | -      |
| icon      | 左侧图标名称         | ReactNode                      | -      |
| center    | 是否使内容垂直居中   | boolean                        | false  |
| isLink    | 是否显示箭头         | boolean                        | false  |
| required  | 是否显示表单必填星号 | boolean                        | false  |
| border  | 是否显示内边框 | boolean                        | true  |
| titleClass  | title 的 class | string                             | -  |
| titleStyle  | title 的样式 | CSSProperties                        | -  |
| valueClass  | value 的 class | string                             | -  |
| valueStyle  | value 的样式  | CSSProperties                        | -  |
| labelClass  |  label 的 class | string                             | -  |
| labelStyle  | label 的样式 | CSSProperties                        | -  |
| descClass  |  desc 的 class  | string                             | -  |
| descStyle  |  desc 的样式   | CSSProperties                        | -  |
| linkClass  | link 的 class  | string                              | -  |
| linkStyle  | link  的样式 | CSSProperties                        | -  |
| onClick   | 点击单元格后的回调   | function                       | -      |

### CellGroup API

| 属性      | 说明             | 类型    | 默认值 |
| --------- | ---------------- | ------- | ------ |
| shadow    | 是否显示外阴影   | boolean | true   |
