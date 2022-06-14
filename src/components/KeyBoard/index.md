---
toc: false
nav:
    path: /components
group:
    title: 展示组件
    path: /components/data
    order: 4
---

# FakerKeyboard 新的自定义键盘

虚拟数字键盘，可以配合[密码输入框组件](xxx)或自定义的输入框组件使用。

## 代码演示

### 基本用法

<code src="./demo/index.tsx" />

## API

| 属性               | 说明                                                       | 类型      | 默认值    |
| ------------------ | ---------------------------------------------------------- | --------- | --------- |
| layout             | 布局                                                       | Array     | 'default' |
| titleLeft          | 自定义标题栏左侧内容                                       | ReactNode | -         |
| title              | 键盘标题                                                   | string    | -         |
| theme              | 样式风格，可选值为 custom、number、letter                  | string    | -         |
| visible            | 是否显示键盘                                               | boolean   | -         |
| closeButtonText    | 是否将关闭按钮设置为加载中状态，仅在 theme="custom" 时有效 | boolean   | true      |
| display            | 自定义某一按钮的名字                                       | string    | -         |
| value              | 当前输入值                                                 | string    | -         |
| hideOnClickOutside | 是否在点击外部时收起键盘                                   | boolean   | true      |
| onHandleClose      | 点击关闭按钮时触发                                         | function  | -         |
| onHandleBlur       | 点击关闭按钮或非键盘区域时触发                             | function  | -         |
| onHandleDelete     | 点击删除键时触发                                           | function  | -         |
| onHandleValue      | 输入值回调                                                 | function  | -         |
| touchEnd           | 放开按钮时的回调                                           | function  | -         |
| onHandlePress      | 点击按钮时的回调                                           | function  | -         |
| onHandleShiftCb    | 点击 shift 后的自定义回调                                  | function  | -         |

## KeyAPI

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |

功能点:
长按字母连续处理,连续输出,
长按删除键连续删除
按住滑动放大
