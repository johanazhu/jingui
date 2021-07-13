---
nav:
    title: 组件
    path: /components
---

Input 例子

<code src="./demo/index.tsx"></code>

Input props

| 参数        | 说明                                      | 类型            | 默认值 |
| ----------- | ----------------------------------------- | --------------- | ------ |
| className   | 自定义 class 名                           | string          | -      |
| name        | input 的唯一标识，有传入点击 title 会聚焦 | string          | -      |
| type        | input 的类型                              | string          | -      |
| value       | input 的值                                | string          | -      |
| placeholder | input 的占位符                            | string          | -      |
| disabled    | 是否能点击                                | boolean         | -      |
| minLength   | 最少长度                                  | number          | -      |
| maxLength   | 最多长度                                  | number          | -      |
| icon        | 加入 icon                                 | React.ReactNode | -      |
| error       | 是否显示错误提示                          | boolean         | -      |
| errorword   | 正则不匹配时显示的错误文案                | string          | -      |
| clearable   | 显示清除图标                              | boolean         | -      |
| prefix      | 带前缀图标的 input                        | object          | -      |
| suffix      | 带后缀图标的 input                        | object          | -      |
| style       | 自定义样式                                | object          | -      |
| size        | 尺寸大小                                  | string          | -      |
| children    | 尺寸大小                                  | React.ReactNode | -      |
| onChange    | input 中的 value 改变时触发               | function        | -      |
| onFocus     | 获取焦点时的事件                          | function        | -      |
| onBlur      | 失去焦点时的事件                          | function        | -      |
| onClear     | Clear 中点击 x 后的回调                   | function        | -      |

Input.Group 例子

<code src="./demo/Group.tsx"></code>

Input.Group props

| 参数      | 说明            | 类型            | 默认值 |
| --------- | --------------- | --------------- | ------ |
| className | 自定义 class 名 | string          | -      |
| style     | 自定义样式      | object          | -      |
| children  | 尺寸大小        | React.ReactNode | -      |

Input.Verify 例子

<code src="./demo/Verify.tsx"></code>

Input.Verify props

基于 base，base 有的参数它都有

| 参数                | 说明             | 类型     | 默认值 |
| ------------------- | ---------------- | -------- | ------ |
| onHandleSendMessage | 发生短信后的回调 | function | -      |

Input.Clear 例子

<code src="./demo/Clear.tsx"></code>

Input.Clear props

基于 base, base 有的参数它都有

| 参数           | 说明                    | 类型            | 默认值 |
| -------------- | ----------------------- | --------------- | ------ |
| groupClassName | group 组件的 class      | string          | -      |
| groupStyle     | group 组件的 style      | string          | -      |
| render         | 在 clear Icon 前 render | React.ReactNode | -      |
| backRender     | 在 clear Icon 后 render | React.ReactNode | -      |

Input.Password 例子

<code src="./demo/Password.tsx"></code>

Input.Password props

基于 Password 组件

| 参数        | 说明                                      | 类型            | 默认值 |
| ----------- | ----------------------------------------- | --------------- | ------ |
| className   | 自定义 class 名                           | string          | -      |
| name        | input 的唯一标识，有传入点击 title 会聚焦 | string          | -      |
| type        | input 的类型                              | string          | -      |
| value       | input 的值                                | string          | -      |
| placeholder | input 的占位符                            | string          | -      |
| disabled    | 是否能点击                                | boolean         | -      |
| minLength   | 最少长度                                  | number          | -      |
| maxLength   | 最多长度                                  | number          | -      |
| icon        | 加入 icon                                 | React.ReactNode | -      |
| error       | 是否显示错误提示                          | boolean         | -      |
| errorword   | 正则不匹配时显示的错误文案                | string          | -      |
| clearable   | 显示清除图标                              | boolean         | -      |
| prefix      | 带前缀图标的 input                        | object          | -      |
| suffix      | 带后缀图标的 input                        | object          | -      |
| style       | 自定义样式                                | object          | -      |
| size        | 尺寸大小                                  | string          | -      |
| children    | 尺寸大小                                  | React.ReactNode | -      |
| onChange    | input 中的 value 改变时触发               | function        | -      |
| onFocus     | 获取焦点时的事件                          | function        | -      |
| onBlur      | 失去焦点时的事件                          | function        | -      |
| onClear     | Clear 中点击 x 后的回调                   | function        | -      |

Input.Captcha 例子

<code src="./demo/Captcha.tsx"></code>

Input.Captcha props

基于 Captcha 组件

| 参数        | 说明                                      | 类型            | 默认值 |
| ----------- | ----------------------------------------- | --------------- | ------ |
| className   | 自定义 class 名                           | string          | -      |
| name        | input 的唯一标识，有传入点击 title 会聚焦 | string          | -      |
| type        | input 的类型                              | string          | -      |
| value       | input 的值                                | string          | -      |
| placeholder | input 的占位符                            | string          | -      |
| disabled    | 是否能点击                                | boolean         | -      |
| minLength   | 最少长度                                  | number          | -      |
| maxLength   | 最多长度                                  | number          | -      |
| icon        | 加入 icon                                 | React.ReactNode | -      |
| error       | 是否显示错误提示                          | boolean         | -      |
| errorword   | 正则不匹配时显示的错误文案                | string          | -      |
| clearable   | 显示清除图标                              | boolean         | -      |
| prefix      | 带前缀图标的 input                        | object          | -      |
| suffix      | 带后缀图标的 input                        | object          | -      |
| style       | 自定义样式                                | object          | -      |
| size        | 尺寸大小                                  | string          | -      |
| children    | 尺寸大小                                  | React.ReactNode | -      |
| onChange    | input 中的 value 改变时触发               | function        | -      |
| onFocus     | 获取焦点时的事件                          | function        | -      |
| onBlur      | 失去焦点时的事件                          | function        | -      |
| onClear     | Clear 中点击 x 后的回调                   | function        | -      |

Input.KeyBoard 例子

<code src="./demo/KeyBoard.tsx"></code>

Input.KeyBoard props

这个需要结合 keyboard 和 pickkeyboard 来做

| 参数          | 说明                               | 类型     | 默认值 |
| ------------- | ---------------------------------- | -------- | ------ |
| value         | input 的值                         | string   | -      |
| placeholder   | input 的占位符                     | string   | -      |
| isActive      | 是否输入中                         | boolean  | -      |
| maxLength     | 最多长度                           | number   | -      |
| onChange      | 自定义 input 中的 value 改变时触发 | function | -      |
| onHandleFocus | 获取焦点时的事件                   | function | -      |
| onClearValue  | Clear 中点击 x 后的回调            | function | -      |

Input.Prefix 例子

<code src="./demo/Prefix.tsx"></code>

Input.Prefix props

与 base 一致

| 参数        | 说明                                      | 类型            | 默认值 |
| ----------- | ----------------------------------------- | --------------- | ------ |
| className   | 自定义 class 名                           | string          | -      |
| name        | input 的唯一标识，有传入点击 title 会聚焦 | string          | -      |
| type        | input 的类型                              | string          | -      |
| value       | input 的值                                | string          | -      |
| placeholder | input 的占位符                            | string          | -      |
| disabled    | 是否能点击                                | boolean         | -      |
| minLength   | 最少长度                                  | number          | -      |
| maxLength   | 最多长度                                  | number          | -      |
| icon        | 加入 icon                                 | React.ReactNode | -      |
| error       | 是否显示错误提示                          | boolean         | -      |
| errorword   | 正则不匹配时显示的错误文案                | string          | -      |
| clearable   | 显示清除图标                              | boolean         | -      |
| prefix      | 带前缀图标的 input                        | object          | -      |
| suffix      | 带后缀图标的 input                        | object          | -      |
| style       | 自定义样式                                | object          | -      |
| size        | 尺寸大小                                  | string          | -      |
| children    | 尺寸大小                                  | React.ReactNode | -      |
| onChange    | input 中的 value 改变时触发               | function        | -      |
| onFocus     | 获取焦点时的事件                          | function        | -      |
| onBlur      | 失去焦点时的事件                          | function        | -      |
| onClear     | Clear 中点击 x 后的回调                   | function        | -      |
