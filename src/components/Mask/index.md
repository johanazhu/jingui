---
nav:
    title: 组件
    path: /components
---

Demo:

```tsx
import React from 'react';
import { Mask } from 'jing-ui';

export default () => <Mask />;
```

Layout API

| 参数        | 说明                                      | 类型              | 默认值 |
| ----------- | ----------------------------------------- | ----------------- | ------ |
| className   | 自定义 class 名                           | string            | -      |
| style       | 自定义样式                                | CSSProperties     | -      |
| transparent | 设置按钮形态，可选值 contained、 outlined | string            | false  |
| onClick     | 点击后的回调事件                          | MouseEventHandler | -      |
