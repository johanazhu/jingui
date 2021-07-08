---
nav:
  title: 组件
  path: /components
---

**Demo**

```tsx
import React from 'react';
import { Result, Panel } from 'jing-ui';

export default () => (
  <div>
    <Panel title="暂无数据" />
    <Result status="empty" title="暂无数据" />
    <Panel title="成功的结果" />
    <Result status="success" />
    <Panel title="失败的结果" />
    <Result status="fail" />
    <Panel title="取消的结果" />
    <Result status="cancel" />
    <Panel title="网络出错" />
    <Result status="network" />
    <Panel title="对的结果" />
    <Result status="right" />
    <Panel title="等待的结果" />
    <Result status="waiting" />
    <Panel title="倒计时的结果" />
    <Result status="countdown" />
    <Panel title="404" />
    <Result status="404" title="访问失败" subTitle="404天下无敌" />
    <Panel title="500" />
    <Result status="500" title="访问失败" subTitle="500是你的福气" />
  </div>
);
```

**Demo2**

```tsx
import React from 'react';
import { Result, Panel, Button } from 'jing-ui';

export default () => (
  <div>
    <Panel title="自定义操作区" />
    <Result
      status="empty"
      extra={
        <Button
          block
          onClick={() => {
            alert('click');
          }}
        >
          按钮
        </Button>
      }
    />
  </div>
);
```

**Props**

| 属性      | 说明            | 类型                                                                               | 默认值 |
| --------- | --------------- | ---------------------------------------------------------------------------------- | ------ |
| className | 自定义 Class 名 | string                                                                             | -      |
| icon      | 图标            | React.ReactNode                                                                    | -      |
| color     | 颜色            | enum: 'orange', 'highOrange','white', 'highWhite','red', 'blue', 'yellow', 'green' | -      |
| onClick   | 点击事件        | -                                                                                  | -      |
