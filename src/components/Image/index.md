---
toc: false
nav:
    path: /components
group:
    title: 基础组件
    path: /components/base
    order: 2
---

# Image 图片

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

### 代码演示

<code src="./demo/index.tsx"></code>

### API

| 属性        | 说明                     | 类型                                        | 默认值  |
| ----------- | ------------------------ | ------------------------------------------- | ------- | ------ | ------------- | ------ | ------ |
| width       | 宽度，默认单位为 px      | `number                                     | string` | -      |
| height      | 高度，默认单位为 px      | `number                                     | string` | -      |
| src         | 图片链接                 | string                                      | -       |
| fit         | 图片填充模式，`'contain' | 'cover'                                     | 'fill'  | 'none' | 'scale-down'` | string | 'fill' |
| alt         | 替代文本                 | string                                      | -       |
| round       | 是否显示为圆形           | boolean                                     | false   |
| radius      | 圆角大小，默认单位为 px  | `number                                     | string` | -      |
| showLoading | 是否展示图片加载中提示   | boolean                                     | true    |
| showError   | 是否展示图片加载失败提示 | boolean                                     | true    |
| loadingIcon | 加载时提示的自定义图标   | ReactNode                                   | -       |
| errorIcon   | 失败时提示的自定义图标   | ReactNode                                   | -       |
| children    | 组件中的内容             | ReactNode                                   | -       |
| onClick     | 点击图片时触发           | `(e: MouseEvent<HTMLImageElement>) => void` | -       |
| onLoad      | 图片加载完毕时触发       | `(e: MouseEvent<HTMLImageElement>) => void` | -       |
| onError     | 图片加载失败时触发       | `(e: MouseEvent<HTMLImageElement>) => void` | -       |
