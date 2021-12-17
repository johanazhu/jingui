---
toc: false
nav:
    path: /components
group:
    title: 反馈组件
    path: /components/feedback
    order: 5
---

# Loading 加载

加载图标，用于表示加载中的过渡状态。

<code src="./demo/index.tsx"></code>

## API

| 参数      | 说明                        | 类型             | 默认值   |
| --------- | --------------------------- | ---------------- | -------- |
| type      | 类型，可选值为 spinner      | string           | circular |
| color     | 颜色                        | string           | #c8c8c8  |
| size      | 加载图标大小，默认单位为 px | `number/string`  | 30px     |
| textSize  | 文字大小，默认单位为 px     | `number/ string` | 14px     |
| textColor | 文字颜色                    | string           | #c8c8c8  |
| vertical  | 是否垂直排列图标和文字内容  | boolean          | false    |
| children  | 组件中的内容                | ReactNode        | -        |
