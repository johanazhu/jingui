---
toc: false
nav:
    path: /components
group:
    title: 展示组件
    path: /components/data
    order: 5
---

# NoticeBar 通知栏

用于循环播放展示一组消息通知。

### 代码演示

<code src="./demo/index.tsx"></code>

### API

| 参数       | 说明                                           | 类型              | 默认值 |
| ---------- | ---------------------------------------------- | ----------------- | ------ |
| duration   | 动画时长                                       | number            | -      |
| text       | 通知文本内容                                   | string            | -      |
| center     | 是否居中                                       | boolean           | -      |
| mode       | 通告栏模式，可选值为 不传、closeable、link     | string            | -      |
| scrollable | 是否开启滚动播放，内容长度溢出时默认开启       | boolean           | -      |
| onClick    | mode === link 时，整个 NoticeBar 可以点击      | MouseEventHandler | -      |
| onClose    | mode === closeable，点击关闭按钮关闭 noticebar | MouseEventHandler | -      |
