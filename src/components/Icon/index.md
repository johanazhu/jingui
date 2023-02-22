---
toc: false
nav:
    path: /components
group:
    title: 基础组件
    path: /components/base
    order: 2
---

# Icon 图标

### 代码演示

<code src="./demo/index.tsx" />

### API

| 属性            | 说明                          | 类型        | 默认值 |
| --------------- | ----------------------------- | ----------- | ------ |
| size            | 大小，可选值 sm、md、lg、auto | string      | 'md'   |
| color           | 颜色，可选值 grey、blue、white、black、red、orange、green、shy-blue                          | string      | 主题色 |
| icon            | svg 文件                      | ReactNode         | -      |
| onClick         | 点击图标后的回调              | (e) => void | -      |
