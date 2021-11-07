---
toc: false
nav:
    path: /components
group:
    title: 反馈组件
    path: /components/feedback
    order: 5
---

# Popup 弹出款

### 代码演示

<code src="./demo/index.tsx"></code>

### API

| 属性          | 说明                   | 类型          | 默认值 |
| ------------- | ---------------------- | ------------- | ------ |
| className     | 自定义 Class 名        | string        | -      |
| show          | 是否显示               | boolean       | -      |
| mask          | 是否需要遮罩           | boolean       | -      |
| children      | 组件中的内容           | ReactNode     | -      |
| islock        | 是否锁屏               | boolean       | -      |
| isActionSheet | ...                    | boolean       | -      |
| groupStyle    | 自定义样式             | CSSProperties | -      |
| model         | 自定义模式，可选 input | string        | -      |
| onClose       | 点击关闭后的回调       | function      | -      |
