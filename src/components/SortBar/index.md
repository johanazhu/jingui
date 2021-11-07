---
toc: false
nav:
    path: /components
group:
    title: 业务组件
    path: /components/work
    order: 6
---

# 排序栏 SortBar

### 代码演示

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

| 属性                | 说明 | 类型     | 默认值 |
| ------------------- | ---- | -------- | ------ |
| options             | ...  | string   | -      |
| isSticky            | ...  | boolean  | -      |
| filterName          | ...  | string   | -      |
| status              | ...  | boolean  | -      |
| onItemHandleClick   | ...  | function | -      |
| onFilterHandleClick | ...  | function | -      |
