---
toc: false
nav:
    path: /components
group:
    title: 业务组件
    path: /components/work
    order: 7
---

# Stepline 步骤

步骤组件，只能是 3 个或 4 个子组件，小于或多余会样式走样，虽不会做处理，但好事者耗子尾汁

### 代码演示

<code src="./demo/index.tsx"></code>

### SortBar API

| 属性    | 说明                           | 类型   | 默认值     |
| ------- | ------------------------------ | ------ | ---------- |
| type    | 模式，`normal` 或者 `ellipsis` | string | 'normal'   |
| percent | 百分比                         | string | -          |
| color   | 自定义颜色颜色                 | string | 默认主题色 |

### SortBarItem API

| 属性     | 说明                           | 类型      | 默认值     |
| -------- | ------------------------------ | --------- | ---------- |
| children | 内容                           | ReactNode | -          |
| footer   | 底部的说明                     | ReactNode | -          |
| type     | 模式，`normal` 或者 `ellipsis` | string    | 'normal'   |
| percent  | 百分比                         | string    | -          |
| color    | 颜色                           | string    | 默认主题色 |
| count    | 子项数量                       | number    | -          |
