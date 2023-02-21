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
| type        | 输入框类型, 可选值为 tel digit number textarea password 等,对 Input.TextArea 无效     |string     | -       |
| value       | input 的值                                | string     | -       |
| minLength   | 最少长度                                  | number     | -       |
| maxLength   | 最多长度                                  | number     | -       |
| placeholder | input 的占位符                            | string     | -       |
| disabled    | 是否能点击                                | boolean    | -       |
| readOnly    | 是否只读                                  | boolean    | -       |
| align       | 输入框对齐方式，可选值为 center right，对 Input.TextArea 无效      | string    | `left`       |
| clearable   | 是否启用清除图标，点击清除图标后会清空输入框  | boolean    | `false`       |
| clearIcon   | 自定义清除图标                             | ReactNode    | `<IconCircleDelete />`       |
| autoFocus   | 是否自动聚焦，iOS 系统不支持该属性          | boolean    | `false`       |
| prefix      | 插入前置内容， 对 Input.TextArea 无效      | ReactNode    | -       |
| suffix      | 插入后置内容， 对 Input.TextArea 无效      | ReactNode    | -       |
| onChange    | input 中的 value 改变时触发               | var:string   | -       |
| onFocus     | 获取焦点时的事件                          | event: MouseEvent   | -       |
| onBlur      | 失去焦点时的事件                          | event: MouseEvent   | -       |
| onClear     | 点击清除按钮时触发                          | event: MouseEvent   | -       |
| onOverlimit | 当输入值超出 maxLength 时触发               | function   | -       |
| onClick     | 点击 Input 时触发                          | event: MouseEvent   | -       |


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
