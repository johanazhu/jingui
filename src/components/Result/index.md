---
toc: false
nav:
    path: /components
group:
    title: 反馈组件
    path: /components/data
    order: 3
---

# Result 结果

## 代码演示

<code src="./demo/index.tsx" />

### API

| 属性     | 说明                                                                                    | 类型      | 默认值 |
| -------- | --------------------------------------------------------------------------------------- | --------- | ------ |
| title    | 一级标题                                                                                | string    | -      |
| status   | 状态，可选 `success、fail、empty、cancel、network、right、waiting、countdown、404、500` | string    | -      |
| place    | 状态，可选 `left/center/right`                                                          | string    | center |
| extra    | 额外自定义区域                                                                          | ReactNode | -      |
| children | 组件中的内容                                                                            | ReactNode | -      |
