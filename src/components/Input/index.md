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
| ----------- | ----------------------------------------- | ---------- | ------- | --- |
| name        | input 的唯一标识，有传入点击 title 会聚焦 | string     | -       |
| type        | input 的类型                              | string     | -       |
| value       | input 的值                                | string     | -       |
| placeholder | input 的占位符                            | string     | -       |
| disabled    | 是否能点击                                | boolean    | -       |
| minLength   | 最少长度                                  | number     | -       |
| maxLength   | 最多长度                                  | number     | -       |
| icon        | 加入 icon                                 | ReactNode  | -       |
| error       | 是否显示错误提示                          | boolean    | -       |
| clearable   | 显示清除图标                              | boolean    | -       |
| prefix      | 带前缀图标的 input                        | `ReactNode | string` | -   |
| suffix      | 带后缀图标的 input                        | `ReactNode | string` | -   |
| size        | 尺寸大小                                  | string     | -       |
| children    | 组件中的内容                              | ReactNode  | -       |
| onChange    | input 中的 value 改变时触发               | function   | -       |
| onFocus     | 获取焦点时的事件                          | function   | -       |
| onBlur      | 失去焦点时的事件                          | function   | -       |
| onClear     | Clear 中点击 x 后的回调                   | function   | -       |

### Input.Group API

| 参数     | 说明         | 类型      | 默认值 |
| -------- | ------------ | --------- | ------ |
| children | 组件中的内容 | ReactNode | -      |

### Input.Clear API

基于 base，base 有的参数它都有

| 参数           | 说明                  | 类型          | 默认值 |
| -------------- | --------------------- | ------------- | ------ |
| groupClassName | group 自定义 class 名 | string        | -      |
| groupStyle     | 自定义 group 样式     | CSSProperties | -      |
| render         | 在 clear 图标前渲染   | ReactNode     | -      |
| backRender     | 在 clear 图标后渲染   | ReactNode     | -      |

### Input.Verify API

基于 base，base 有的参数它都有

| 参数                | 说明                   | 类型     | 默认值 |
| ------------------- | ---------------------- | -------- | ------ |
| onHandleSendMessage | 点击获取验证码后的回调 | function | -      |

### Input.Captcha API

基于 base，base 有的参数它都有

| 参数                  | 说明               | 类型      | 默认值 |
| --------------------- | ------------------ | --------- | ------ |
| captcha               | 验证码             | ReactNode | -      |
| onHandleChangeCaptcha | 点击验证码后的回调 | function  | -      |

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

### Input.Textarea API

基于 base，base 有的参数它都有

| 参数 | 说明     | 类型   | 默认值 |
| ---- | -------- | ------ | ------ |
| rows | 文本行数 | number | -      |

### Input.Phone API

基于 base，base 有的参数它都有

| 参数  | 说明 | 类型   | 默认值 |
| ----- | ---- | ------ | ------ |
| value | 值   | string | -      |
| reg   | 正则 | RegExp | -      |

### Input.Reg API

基于 base，base 有的参数它都有

| 参数      | 说明           | 类型                                       | 默认值 |
| --------- | -------------- | ------------------------------------------ | ------ |
| value     | 值             | string                                     | -      |
| reg       | 正则           | RegExp                                     | -      |
| className | 自定义 class   | string                                     | -      |
| onChange  | 输入值后的回调 | `(res: string, _isValid: boolean) => void` | -      |

### Input.Search API

基于 base，base 有的参数它都有

| 参数      | 说明         | 类型   | 默认值 |
| --------- | ------------ | ------ | ------ |
| value     | 值           | string | -      |
| className | 自定义 class | string | -      |
