---
toc: false
nav:
    path: /components
group:
    title: 基础组件
    path: /components/base
    order: 2
---

# Popup 弹出层

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示

### 代码演示

<code src="./demo/index.tsx"></code>

### API

| 参数                | 说明                                                               | 类型                            | 默认值    |
| ------------------- | ------------------------------------------------------------------ | ------------------------------- | --------- |
| className           | 自定义 class 名                                                    | string                          | -         |
| style               | 自定义样式                                                         | CSSProperties                   | -         |
| zIndex              | z-index 值                                                         | number                          | -         |
| visible             | 是否显示                                                           | boolean                         | -         |
| position            | 弹出方向，可选值 top, bottom, left, right, center                  | string                          | center    |
| duration            | 动画执行时间（单位：毫秒）                                         | number                          | 300       |
| overlay             | 是否展示遮罩层                                                     | boolean                         | true      |
| overlayType         | 遮罩层的类型，可选值 transparent, normal                           | string                          | normal    |
| lockScroll          | 是否锁定背景滚动                                                   | boolean                         | true      |
| safeAreaInsetBottom | 是否开启底部安全区适配                                             | boolean                         | false     |
| closeOnClickOverlay | 是否在点击遮罩层后关闭                                             | boolean                         | true      |
| closeable           | 是否显示关闭图标                                                   | boolean                         | true      |
| closeIconPosition   | 关闭图标位置，可选值为 top-right,top-left,bottom-left,bottom-right | boolean                         | top-right |
| children            | 组件中的内容                                                       | ReactElement                    | -         |
| onOpen              | 打开弹出层时触发                                                   | ()=>void                        | -         |
| onClose             | 关闭弹出层时触发                                                   | ()=>void                        | -         |
| onOpened            | 打开弹出层且动画结束后触发                                         | ()=>void                        | -         |
| onClosed            | 关闭弹出层且动画结束后触发                                         | ()=>void                        | -         |
| onClickOverlay      | 点击遮罩层时触发的回调函数                                         | `(e: MouseEvent) => void`       | -         |
| onClick             | 点击弹出层时触发                                                   | `(e: MouseEvent) => void`       | -         |
| onClickCloseIcon    | 点击关闭图标时触发                                                 | `(e: MouseEvent) => void`       | -         |
| mountContainer      | 指定 Popup 挂载的 HTML 节点                                        | `HTMLElement/() => HTMLElement` | -         |
