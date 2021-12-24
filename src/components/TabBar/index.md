---
toc: false
nav:
    path: /components
group:
    title: 导航组件
    path: /components/navigation
    order: 6
---

# TabBar 标签栏

### 代码演示

<code src="./demo/index.tsx"></code>

### TabBar API

| 参数                | 说明                                                          | 类型      | 默认值  |
| ------------------- | ------------------------------------------------------------- | --------- | ------- | --- |
| activeKey           | 当前选中项                                                    | `number   | string` | -   |
| defaultActiveKey    | 初始选中项, 默认第一个选中                                    | `number   | string` | 0   |
| fixed               | 是否固定在底部                                                | boolean   | true    |
| safeAreaInsetBottom | 是否开启底部安全区适配，设置 fixed 时默认开启                 | boolean   | -       |
| children            | 组件中的内容                                                  | ReactNode | -       |
| onChange            | 值变化时触发的回调函数                                        | function  | -       |
| beforeChange        | 切换标签前的回调函数，返回 false 可阻止切换，支持返回 Promise | function  | -       |

### TabBar.Item API

| 参数       | 说明                                                | 类型      | 默认值  |
| ---------- | --------------------------------------------------- | --------- | ------- | --- |
| itemKey    | 唯一标识，对应 activeKey，不设置则默认取 index 索引 | `number   | string` | -   |
| title      | 标题文字                                            | ReactNode | -       |
| icon       | ReactNode                                           | ReactNode | -       |
| activeIcon | 是否开启底部安全区适配，设置 fixed 时默认开启       | ReactNode | -       |
| selected   | 是否选中                                            | boolean   | -       |
| onChange   | 值变化时触发的回调函数                              | function  | -       |
