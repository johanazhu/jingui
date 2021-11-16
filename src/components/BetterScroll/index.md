---
toc: false
nav:
    path: /components
group:
    title: 反馈组件
    path: /components/feedback
    order: 5
---

# Scroll 滚动条

<code src="./demo/index.tsx"></code>

### API

| 属性                | 说明                      | 类型            | 默认值 |
| ------------------- | ------------------------- | --------------- | ------ |
| pullUpLoading       | 是否显示上拉刷新          | boolean         | false  |
| showPullDownLoading | 是否显示 下拉刷新 loading | boolean         | -      |
| pullingUpStatus     | 数据是否展示完毕          | string          | -      |
| bottom              | 滚动组件距离底部的距离    | number          | -      |
| top                 | 滚动组件距离顶部的距离    | number          | -      |
| children            | 组件中的内容              | React.ReactNode | -      |
| bounceTop           | betterscroll 默认属性配置 | boolean         | true   |
| bounceBottom        | betterscroll 默认属性配置 | boolean         | true   |
| pullDownCb          | 下拉刷新回调              | function        | -      |
| pullUpCb            | 上拉加载回调              | function        | -      |
| onScroll            | 滚动时触发的回调          | function        | -      |
