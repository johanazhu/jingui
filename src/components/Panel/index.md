---
toc: false
nav:
  path: /components
group:
  title: 展示组件
  path: /components/data
  order: 4
---

# Panel 面板

面板展示

## 代码演示

```tsx
import React from 'react';
import { Panel } from 'jing-ui';

export default () => (
  <div>
    <Panel
      title="标题"
      more={
        <a href="#" onClick={() => alert('click more')}>
          更多
        </a>
      }
    >
      <div className="box" style={{ padding: '1rem' }}>
        内容
      </div>
    </Panel>
    <Panel title="用户投保案例" />
    <Panel
      title="保险哪些事儿"
      more={
        <a href="#" onClick={() => alert('click more')}>
          更多
        </a>
      }
    />
  </div>
);
```

### API

| 属性      | 说明            | 类型            | 默认值 |
| --------- | --------------- | --------------- | ------ |
| className | 自定义 Class 名 | string          | -      |
| children  | 组件内容        | React.ReactNode | -      |
| title     | 标题            | React.ReactNode | -      |
| more      | 更多渲染        | React.ReactNode | -      |
