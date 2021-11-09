---
toc: false
nav:
    path: /components
group:
    title: 基础组件
    path: /components/base
    order: 2
---

# ButtonGroup 按钮组

包裹住 Button 组件，根据子元素的多少，进行 flex 布局
默认填满，也可以保持原有 button 宽度

### 代码演示

<code src="./demo/index.tsx"></code>

### API

| 参数      | 说明                                          | 类型      | 默认值    |
| --------- | --------------------------------------------- | --------- | --------- |
| className | 自定义 class 名                               | string    | -         |
| type      | 类型，可选值为 default、fixed-bottom          | string    | 'default' |
| size      | 设置大小，可选值为 large、normal、small、mini | string    | 'normal'  |
| children  | 组件中的内容                                  | ReactNode | -         |
