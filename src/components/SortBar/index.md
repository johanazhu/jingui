---
toc: false
nav:
    path: /components
group:
    title: 业务组件
    path: /components/work
    order: 7
---

# SortBar 排序栏

### 代码演示

<code src="./demo/index.tsx"></code>

### SortBar API

| 属性      | 说明                                        | 类型                                     | 默认值   |
| --------- | ------------------------------------------- | ---------------------------------------- | -------- |
| activeKey | 当前选中项                                  | string                                   | -        |
| type      | 模式，默认模式等分划分，此外 "chan"(禅模式) | string                                   | 'normal' |
| title     | 标题                                        | string                                   | -        |
| sticky    | 是否使用粘性定位布局                        | boolean                                  | -        |
| children  | 组件中的内容                                | ReactNode                                | -        |
| onClick   | 点击筛选后的回调                            | `() => void`                             | -        |
| onChange  | 点击后的回调，返回 选中项和点击的状态       | `(key: string, status: string) => void;` | -        |

### SortBarItem API

| 属性     | 说明                          | 类型                       | 默认值 |
| -------- | ----------------------------- | -------------------------- | ------ |
| title    | 标题                          | string                     | -      |
| itemKey  | 唯一标识，对应 activeKey      | string                     | -      |
| selected | 是否选中                      | boolean                    | -      |
| onClick  | 点击后的回调，返回 点击的状态 | `(status: string) => void` | -      |
