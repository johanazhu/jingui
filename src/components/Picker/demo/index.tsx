import React from 'react';
import { Tag } from 'jing-ui';

export default () => (
    <div>
        <Tag>标签</Tag>
        <Tag type="primary">标签</Tag>
        <Tag type="normal">标签</Tag>
        <Tag type="disabled">标签</Tag>

        <Tag>标签</Tag>
        <Tag size="medium">标签</Tag>
        <Tag size="large">标签</Tag>

        <Tag active>标签</Tag>
        <Tag type="primary" active>
            标签
        </Tag>
    </div>
);

{
    /* <van-picker
  title="标题"
  :columns="columns"
  @confirm="onConfirm"
  @cancel="onCancel"
  @change="onChange"
/> */
}
