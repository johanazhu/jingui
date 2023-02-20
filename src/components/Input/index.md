---
toc: false
nav:
    path: /components
group:
    title: 展示组件
    path: /components/data
    order: 4
---

# Input 输入

表单中的输入框组件

### 代码演示

<code src="./demo/index.tsx"></code>

### Input API

| 参数        | 说明                                      | 类型       | 默认值  |
| ----------- | ----------------------------------------- | ---------- | ------- |
| type        | input 的类型                              | string     | -       |
| value       | input 的值                                | string     | -       |
| placeholder | input 的占位符                            | string     | -       |
| disabled    | 是否能点击                                | boolean    | -       |
| minLength   | 最少长度                                  | number     | -       |
| maxLength   | 最多长度                                  | number     | -       |
| onChange    | input 中的 value 改变时触发               | function   | -       |
| onFocus     | 获取焦点时的事件                          | function   | -       |
| onBlur      | 失去焦点时的事件                          | function   | -       |


### Input.Textarea API

基于 Input, Input 有的参数它都有

| 参数 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| rows | 文本行数 | number | 2      |

### Input.Keyboard API

基于 base，base 有的参数它都有

| 参数          | 说明             | 类型     | 默认值 |
| ------------- | ---------------- | -------- | ------ |
| value         | 值               | string   | -      |
| placeholder   | 占位符           | string   | -      |
| active        | 选中时           | boolean  | -      |
| maxLength     | 最多长度         | number   | -      |
| onChange      | 数据改变时的回调 | function | -      |
| onClearValue  | 点击清除时的回调 | function | -      |
| onHandleFocus | 点击选中时的回调 | function | -      |
