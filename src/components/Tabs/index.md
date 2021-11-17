---
toc: false
nav:
    path: /components
group:
    title: 业务组件
    path: /components/work
    order: 6
---

# Tab 标签页

## 代码演示

<code src="./demo/index.tsx"></code>

### TabContent API

| 参数         | 说明             | 类型      | 默认值 |
| ------------ | ---------------- | --------- | ------ |
| list         | 数据列表         | any       | -      |
| duration     | 动画时长         | number    | -      |
| children     | 组件中的内容     | ReactNode | -      |
| onClick      | 点击事件后的回调 | function  | -      |
| changeSwiper | 滑动后的回调     | function  | -      |
| onSwiper     | 滑动时的回调     | function  | -      |

### TabItem API

| 参数      | 说明             | 类型          | 默认值 |
| --------- | ---------------- | ------------- | ------ |
| className | 自定义 class 名  | string        | -      |
| style     | 自定义样式       | CSSProperties | -      |
| isActive  | 是否选中         | boolean       | -      |
| value     | ...              | string        | -      |
| label     | ...              | string        | -      |
| selected  | ...              | any           | -      |
| disabled  | ...              | boolean       | -      |
| icon      | ...              | string        | -      |
| tagId     | ...              | string        | -      |
| onClick   | 点击事件后的回调 | function      | -      |

### Tab API

| 参数           | 说明               | 类型          | 默认值 |
| -------------- | ------------------ | ------------- | ------ |
| className      | 自定义 class 名    | string        | -      |
| style          | 自定义样式         | CSSProperties | -      |
| sticky         | 是否固定           | boolean       | -      |
| selected       | ...                | TabItemProps  | -      |
| data           | ...                | TabItemProps  | -      |
| swipeThreshold | ...                | number        | -      |
| duration       | 动画时长           | number        | -      |
| children       | 组件中的内容       | boolean       | -      |
| onClick        | 点击事件后的回调   | function      | -      |
| onChange       | 滑动改变之后的回调 | function      | -      |
