---
nav:
    title: 组件
    path: /components
---

<!-- ### 按钮 -->

```tsx
import React from 'react';
import { Button } from 'jing-ui';

export default () => (
    <div>
        <Button>按钮</Button>
    </div>
);
```

<!-- <code src="./demo/index.tsx" /> -->

API

| 参数    | 说明                       | 类型           | 默认值 |
| ------- | -------------------------- | -------------- | ------ |
| header  | 头部、标题                 | string or node | -      |
| href    | 跳转路由                   | string         | -      |
| img     | 头部大图                   | string         | -      |
| icon    | 顶部小图标                 | string         | -      |
| iconset | 顶部小图标数组，可循环播放 | string[]       | -      |
| size    | 大小                       | 'lg \| md'     | -      |
