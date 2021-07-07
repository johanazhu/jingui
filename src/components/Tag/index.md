---
nav:
    title: 组件
    path: /components
---

<!-- ## Tag -->

**Demo：**

```tsx
import React from 'react';
import { Tag } from 'jing-ui';

export default () => (
    <div>
        <Tag color="highOrange">标签</Tag>
        <Tag color="orange">标签</Tag>
        <Tag>标签</Tag>
    </div>
);
```

**Demo2：**

<!-- <code src="./demo/index.tsx" /> -->

<!-- <Tag color={item.labelType === '04' ? 'highOrange' : 'orange'} key={i}>
{item.labelName}
</Tag> -->

**Props**

| 属性      | 说明            | 类型                                                                               | 默认值 |
| --------- | --------------- | ---------------------------------------------------------------------------------- | ------ |
| className | 自定义 Class 名 | string                                                                             | -      |
| icon      | 图标            | React.ReactNode                                                                    | -      |
| color     | 颜色            | enum: 'orange', 'highOrange','white', 'highWhite','red', 'blue', 'yellow', 'green' | -      |
| onClick   | 点击事件        | -                                                                                  | -      |
