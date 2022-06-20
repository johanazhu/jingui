---
toc: false
nav:
    path: /components
group:
    title: 展示组件
    path: /components/data
    order: 4
---

# Picker 选择器

提供多个选项集合供用户选择，支持单列选择和多列级联，通常与[弹出层](../feedback/popup)组件配合使用。

### 代码演示

<code src="./demo/index.tsx"></code>

### API

| 参数              | 说明                              | 类型                                                                             | 默认值  |
| ----------------- | --------------------------------- | -------------------------------------------------------------------------------- | ------- |
| className         | 自定义 class 名                   | string                                                                           | -       |
| style             | 自定义样式                        | CSSProperties                                                                    | -       |
| columns           | 对象数组，配置每一列显示的数据    | `Column[]``                                                                      | []      |
| defaultIndex      | 单列选择时，默认选中项的索引      | number                                                                           | 0       |
| title             | 顶部栏标题                        | string                                                                           | -       |
| confirmButtonText | 确认按钮文字                      | string                                                                           | `确认`  |
| cancelButtonText  | 取消按钮文字                      | string                                                                           | `取消`  |
| loading           | 是否显示加载状态                  | boolean                                                                          | `false` |
| showToolbar       | 是否显示顶部栏                    | boolean                                                                          | `true`  |
| itemHeight        | 选项高度                          | number                                                                           | 44      |
| visibleItemCount  | 可见的选项个数                    | number                                                                           | 6       |
| swipeDuration     | 快速滑动时惯性滚动的时长，单位 ms | number                                                                           | 1000    |
| onConfirm         | 点击完成按钮时触发                | _currentValue: PickerOption \| PickerOption[], currentIndex: number \| number[]_ | -       |
| onCancel          | 点击取消按钮时触发                | _currentValue: PickerOption \| PickerOption[], currentIndex: number \| number[]_ | -       |
| onChange          | 选项改变时触发                    | _currentValue: PickerOption \| PickerOption[], currentIndex: number \| number[]_ | -       |
