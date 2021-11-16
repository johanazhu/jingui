---
toc: false
nav:
    path: /components
group:
    title: 业务组件
    path: /components/work
    order: 6
---

# SortBar 排序栏

### 代码演示

<code src="./demo/index.tsx"></code>

### SortBarItem API

| 属性    | 说明                                 | 类型   | 默认值 |
| ------- | ------------------------------------ | ------ | ------ |
| name    | 名字                                 | string | -      |
| status  | 状态, 0 = 无状态，1 = 升序，2 = 降序 | string | 0      |
| onClick | 点击后的回调                         | -      | -      |

### SortBarFilter API

| 属性    | 说明         | 类型    | 默认值 |
| ------- | ------------ | ------- | ------ |
| name    | 名字         | string  | -      |
| status  | 状态         | boolean | -      |
| onClick | 点击后的回调 | -       | -      |

### SortBar API

| 属性                | 说明                 | 类型     | 默认值 |
| ------------------- | -------------------- | -------- | ------ |
| options             | ...                  | string   | -      |
| sticky              | 是否使用粘性定位布局 | boolean  | -      |
| filterName          | ...                  | string   | -      |
| status              | ...                  | boolean  | -      |
| onItemHandleClick   | ...                  | function | -      |
| onFilterHandleClick | ...                  | function | -      |
