---
toc: false
nav:
    path: /components
group:
    title: 反馈组件
    path: /components/feedback
    order: 5
---

# Toast 轻提示

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

### 代码演示

<code src="./demo/index.tsx"></code>

### API

| 属性                | 说明                                    | 类型                             | 默认值        |
| ------------------- | --------------------------------------- | -------------------------------- | ------------- | ---- |
| type                | 类型                                    | string                           | 'info'        |
| message             | 文本内容                                | `number                          | string`       | -    |
| duration            | 展示时长(ms)，值为 0 时，toast 不会消失 | `number                          | string`       | 2000 |
| icon                | 自定义图标                              | `string                          | ReactNode`    | -    |
| loadingType         | 加载图标类型, 可选值为 spinner          | string                           | 'circular'    |
| overlay             | 是否显示背景遮罩层                      | boolean                          | false         |
| forbidClick         | 是否禁止背景点击                        | boolean                          | false         |
| closeOnClickOverlay | 是否在点击遮罩层后关闭                  | boolean                          | -             |
| closeOnClick        | 是否在点击后关闭                        | boolean                          | -             |
| onClick             | 点击内容后的回调函数                    | () => void                       | -             |
| onClose             | 关闭时的回调函数                        | () => void                       | -             |
| onClosed            | 关闭后的回调函数                        | () => void                       | -             |
| onOpened            | 打开后的回调函数                        | () => void                       | -             |
| mountContainer      | 指定挂载的节点                          | HTMLElement (() => HTMLElement)) | document.body |
