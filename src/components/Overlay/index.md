---
toc: false
nav:
    path: /components
group:
    title: 基础组件
    path: /components/base
    order: 2
---

# Overlay 遮罩层

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

popup、portal 等组件的基础组件

### 代码演示

<code src="./demo/index.tsx" />

### API

| 参数        | 说明                                             | 类型                    | 默认值 |
| ----------- | ------------------------------------------------ | ----------------------- | ------ |
| className   | 自定义 class 名                                  | string                  | -      |
| style       | 自定义样式                                       | CSSProperties           | -      |
| customStyle | 自定义样式                                       | CSSProperties           | -      |
| zIndex      | z-index 层级                                     | `number/string`         | -      |
| visible     | 是否显示                                         | boolean                 | false  |
| duration    | 动画时长，单位毫秒                               | `number/string`         | 300    |
| lockScroll  | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | boolean                 | true   |
| type        | 遮罩层的类型，可选值 transparent, normal         | `normal / transparent`  | normal |
| onClick     | 点击后的回调事件                                 | (e: MouseEvent) => void | -      |
