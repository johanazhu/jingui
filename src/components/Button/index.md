---
toc: false
nav:
  path: /components
group:
  title: 基础组件
  path: /components/base
  order: 2
---

# Button 按钮

按钮用于触发一个操作，如提交表单。

## 代码演示

<code src="./demo/index.tsx"></code>

## API

| 参数      | 说明                                         | 类型              | 默认值      |
| --------- | -------------------------------------------- | ----------------- | ----------- |
| className | 自定义 class 名                              | string            | -           |
| variant   | 设置按钮形态，可选值 contained、 outlined    | string            | 'contained' |
| color     | 设置颜色，可选值为 'blue'、'orange'、'green' | string            | 'blue'      |
| size      | 设置大小，可选值为 md、sm                    | string            | 'md'        |
| disabled  | 是否禁用                                     | boolean           | false       |
| loading   | 是否加载中状态                               | boolean           | false       |
| block     | 是否块级元素                                 | boolean           | false       |
| onClick   | 点击后的回调事件                             | MouseEventHandler | -           |
