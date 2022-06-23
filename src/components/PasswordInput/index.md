---
toc: false
nav:
    path: /components
group:
    title: 展示组件
    path: /components/data
    order: 4
---

# PasswordInput 密码输入框

带网格的输入框组件，可以用于输入密码、短信验证码等场景，通常与[自定义键盘](./keyboard)组件配合使用。

## 引入

```js
import { PasswordInput } from 'jing-ui';
```

## 代码演示

<code src="./demo/index.tsx"></code>

### API

| 属性      | 说明                                             | 类型     | 默认值 |
| --------- | ------------------------------------------------ | -------- | ------ |
| value     | 密码值                                           | string   | -      |
| length    | 密码最大长度                                     | number   | 6      |
| mask      | 是否隐藏密码内容                                 | boolean  | true   |
| focused   | 是否已聚焦，聚焦时会显示光标                     | boolean  | -      |
| type      | 类型 默认为 text，可选 number                    | string   | text   |
| autoFocus | 是否自动聚焦                                     | boolean  | false  |
| gutter    | 输入框格子之间的间距，如 20px 2em，默认单位为 px | number   | -      |
| mode      | 模式，默认输入框输入模式和配合 keyboard 组件模式 | string   | normal |
| onChange  | 数据改变时触发                                   | function | -      |
| onSubmit  | 数据输满时触发                                   | function | -      |
| onFocus   | 输入框聚焦时触发                                 | function | -      |
| onBlur    | 输入框失焦时触发                                 | function | -      |
