---
toc: false
nav:
    path: /components
group:
    title: 导航组件
    path: /components/navigation
    order: 6
---

# Tabs 标签页

## 代码演示

<code src="./demo/index.tsx"></code>

### Tabs API

| 参数           | 说明                                                           | 类型          | 默认值  |
| -------------- | -------------------------------------------------------------- | ------------- | ------- |
| className      | 自定义 class 名                                                | string        | -       |
| style          | 自定义样式                                                     | CSSProperties | -       |
| value          | 绑定当前选中标签的标识符                                       | boolean       | `0`     |
| type           | 样式风格类型，可选值为 img                                     | string        | `line`  |
| swipeable      | 是否开启手势滑动切换                                           | boolean       | `false` |
| sticky         | 是否使用粘性定位布局                                           | boolean       | `false` |
| ellipsis       | 是否省略过长的标题文字                                         | boolean       | `true`  |
| disabled       | 是否禁用标签                                                   | boolean       | `false` |
| duration       | 动画时间，单位秒                                               | number        | `0.3`   |
| swipeThreshold | 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 | number        | `5`     |
| children       | 组件中的内容                                                   | ReactNode     | -       |
| onClick        | 当前激活的标签改变时触发                                       | function      | -       |
| onChange       | 切换标签的回调函数                                             | function      | -       |

### Tabs API

| 参数      | 说明            | 类型          | 默认值  |
| --------- | --------------- | ------------- | ------- |
| className | 自定义 class 名 | string        | -       |
| style     | 自定义样式      | CSSProperties | -       |
| title     | 标题            | ReactNode     | -       |
| selected  | 选中时          | boolean       | -       |
| disabled  | 是否禁用标签    | boolean       | `false` |
| children  | 组件中的内容    | ReactNode     | -       |
