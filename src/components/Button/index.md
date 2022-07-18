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

| 参数      | 说明                                            | 类型       | 默认值    |
| --------- | ----------------------------------------------- | ---------- | --------- |
| className | 自定义 class 名                                 | string     | -         |
| type      | 类型，可选值为 primary、second-primary、default | string     | 'default' |
| plain     | 是否为朴素按钮                                  | boolean    | false     |
| round     | 是否为圆形按钮                                  | boolean    | false     |
| size      | 设置大小，可选值为 large、normal、small、mini   | string     | normal    |
| disabled  | 是否禁用                                        | boolean    | false     |
| loading   | 是否加载中状态                                  | boolean    | false     |
| block     | 是否块级元素                                    | boolean    | false     |
| color     | 自定义颜色                                      | string     | -         |
| text      | 按钮文字                                        | string     | -         |
| children  | 组件中的内容                                    | ReactNode  | -         |
| onClick   | 点击后的回调事件                                | () => void | -         |
