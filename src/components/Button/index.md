---
nav:
  title: 组件
  path: /components
---

<!-- ### 按钮 -->
<!--
```tsx
import React from 'react';
import { Button, Panel } from 'jing-ui';

export default () => (
  <div>
    <Panel title="颜色" />
    <Panel title="用户投保案例" />
    <Button>蓝色</Button>
    <Button color="orange">橙色</Button>
    <Button color="green">绿色</Button>
    <Panel title="尺寸大小" />
    <Button size="lg">大按钮</Button>
    <Button size="md">普通按钮</Button>
    <Button size="sm">小按钮</Button>
    <Button size="xs">更小按钮</Button>
    <Panel title="是否为块级元素" />
    <Button block>按钮</Button>
  </div>
);
``` -->

<code src="./demo/index.tsx"></code>

<!-- <code src="/path/to/complex-demo.tsx"></code> -->

API

| 参数  | 说明                                         | 类型     | 默认值  |
| ----- | -------------------------------------------- | -------- | ------- |
| color | 设置颜色，可选值为 'blue'、'orange'、'green' | string   | 'blue'  |
| size  | 设置大小，可选值为 lg、md、sm、xs            | string   | 'md'    |
| block | 是否块级元素                                 | boolean  | false   |
| <!--  | disabled                                     | 是否禁用 | boolean | false | --> |
