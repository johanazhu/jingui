---
toc: false
nav:
    path: /components
group:
    title: 反馈组件
    path: /components/feedback
    order: 5
---

# Modal 模态框

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

弹出框组件支持函数调用和组件调用两种方式

<code src="./demo/index.tsx"></code>

## 方法

| 方法名        | 说明             | 参数    | 返回值          |
| ------------- | ---------------- | ------- | --------------- |
| Modal         | 弹窗组件         | options | React.ReactNode |
| Modal.show    | 展示提示弹窗     | options | Promise         |
| Modal.alert   | 展示消息提示弹窗 | options | Promise         |
| Modal.confirm | 展示消息确认弹窗 | options | Promise         |

## API Props

| 参数                | 说明                                 | 类型                            | 默认值    |
| ------------------- | ------------------------------------ | ------------------------------- | --------- |
| visible             | 是否显示弹窗                         | boolean                         | -         |
| title               | 标题                                 | string                          | -         |
| width               | 弹窗宽度，默认单位为 px              | `number/string`                 | -         |
| message             | 文本内容，支持通过`\n` 换行          | string                          | -         |
| messageAlign        | 内容对齐方式，可选值为`left` `right` | string                          | `center`  |
| showConfirmButton   | 是否展示确认按钮                     | boolean                         | `true`    |
| showCancelButton    | 是否展示取消按钮                     | boolean                         | `false`   |
| confirmButtonText   | 确认按钮文案                         | string                          | `确认`    |
| confirmButtonColor  | 确认按钮颜色                         | string                          | `#3264c8` |
| cancelButtonText    | 取消按钮文案                         | string                          | `取消`    |
| cancelButtonColor   | 取消按钮颜色                         | string                          | `black`   |
| overlay             | 是否展示遮罩层                       | boolean                         | `true`    |
| overlayClass        | 自定义遮罩层类名                     | string                          | -         |
| overlayStyle        | 自定义遮罩层样式                     | object                          | -         |
| closeable           | 是否展示关闭图标                     | boolean                         | `false`   |
| closeOnPopstate     | 是否在页面回退时自动关闭             | boolean                         | `true`    |
| closeOnClickOverlay | 是否在点击遮罩层后关闭弹窗           | boolean                         | `false`   |
| lockScroll          | 是否锁定背景滚动                     | boolean                         | `true`    |
| onCancel            | 点击取消按钮时触发                   | Function                        | -         |
| onConfirm           | 点击确认按钮时触发                   | Function                        | -         |
| onClose             | Modal 关闭时的回调                   | Function                        | -         |
| onClosed            | Modal 完全关闭时的回调               | Function                        | -         |
| teleport            | 指定挂载的节点                       | `HTMLElement/() => HTMLElement` | `body`    |
| footer              | 自定义底部按钮区域                   | ReactNode                       | -         |
| children            | 自定义内容                           | ReactNode                       | -         |
