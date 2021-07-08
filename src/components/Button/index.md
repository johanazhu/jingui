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
        <Button block>按钮</Button>
    </div>
);
```

<!-- <code src="./demo/index.tsx" /> -->

API

| 参数  | 说明                                         | 类型    | 默认值 |
| ----- | -------------------------------------------- | ------- | ------ |
| color | 设置主题，可选值为 'blue'、'orange'、'green' | string  | 'blue' |
| size  | 设置大小，可选值为 lg、md、sm、xs            | string  | 'md'   |
| block | 是否块级元素                                 | boolean | false  |
