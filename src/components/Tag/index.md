---
toc: false
nav:
    path: /components
group:
    title: 展示组件
    path: /components/data
    order: 4
---

# Tag 标签

### 代码演示

<code src="./demo/index.tsx"></code>

### API

| 属性     | 说明             | 类型                                               | 默认值  |
| -------- | ---------------- | -------------------------------------------------- | ------- |
| type     | 类型             | 类型，可选值为 `primary、normal、disabled、second` | primary |
| size     | 颜色             | 大小, 可选值为 `large medium`                      | -       |
| active   | 是否选中         | boolean                                            | -       |
| children | 组件中的内容     | ReactNode                                          | -       |
| onClick  | 点击后的回调事件 | MouseEventHandler                                  | -       |
