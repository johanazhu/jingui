import React from 'react';
import { Cell, IconZan } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="基本用法" padding="0">
            <Cell title="单元格" value="内容" />
            <Cell title="单元格" value="内容" label="描述信息"></Cell>
            <Cell
                title="单元格"
                value="内容"
                label="描述信息"
                desc="详情信息"
            ></Cell>
        </DemoBlock>
        <DemoBlock title="展示图标" padding="0">
            <Cell title="单元格" icon={<IconZan size="sm" />} />
        </DemoBlock>
        <DemoBlock title="展示箭头" padding="0">
            <Cell title="单元格" isLink />
            <Cell title="单元格" isLink value="内容" />
        </DemoBlock>
        <DemoBlock title="基本用法" padding="0">
            <Cell title="单元格" value="内容" />
            <Cell title="单元格" value="内容" label="描述信息"></Cell>
            <Cell
                title="单元格"
                value="内容"
                label="描述信息"
                desc="详情信息"
            ></Cell>
        </DemoBlock>
        <DemoBlock title="展示图标" padding="0">
            <Cell title="单元格" icon={<IconZan size="sm" />} />
        </DemoBlock>
        <DemoBlock title="展示箭头" padding="0">
            <Cell title="单元格" isLink />
            <Cell title="单元格" isLink value="内容" />
        </DemoBlock>
    </>
);
