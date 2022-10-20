import React from 'react';
import { Cell, IconZan } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="基本用法" padding="0">
            <Cell title="单元格" value="内容" />
            <Cell title="单元格" value="内容" label="描述信息" />
            <Cell
                title="单元格"
                value="内容"
                label="描述信息"
                desc="详情信息"
            />
            <Cell title="我是标题很长很长可以换行换行换行换行换行换行换行，没有链接" />
            <Cell
                title="单元格"
                value="我是内容很长很长可以换行换行换行换行换行换行换行，没有链接"
            />
        </DemoBlock>
        <DemoBlock title="展示图标" padding="0">
            <Cell title="单元格" icon={<IconZan size="sm" />} />
        </DemoBlock>
        <DemoBlock title="只设置 value" padding="0">
            <Cell value="内容" />
            <Cell value="右侧描述可能很长很长很长很长很长很长很长很长很长" />
        </DemoBlock>
        <DemoBlock title="展示箭头" padding="0">
            <Cell title="单元格" isLink />
            <Cell title="单元格" isLink value="内容" />
            <Cell
                title="我是标题很长很长可以换行换行换行换行换行换行换行，没有链接"
                isLink
            />
        </DemoBlock>
        <DemoBlock title="垂直居中" padding="0">
            <Cell center title="单元格" value="内容" label="描述信息" />
            <Cell center title="单元格" value="内容" desc="详情信息" />
            <Cell
                title="我标题很长很长可以换行换行换行换行换行换行换行，没有链接"
                isLink
                center
            />
        </DemoBlock>
        <DemoBlock title="展示必填星号" padding="0">
            <Cell required title="单元格" value="内容" />
        </DemoBlock>
        <DemoBlock title="组：卡片风格" padding="12px 0 12px" background="">
            <Cell.Group inset>
                <Cell title="单元格" value="内容" label="描述信息" />
                <Cell
                    title="单元格"
                    value="内容"
                    label="描述信息"
                    desc="详情信息"
                />
            </Cell.Group>
        </DemoBlock>
        <DemoBlock title="组：不带阴影功能" padding="12px 0 12px" background="">
            <Cell.Group inset shadow={false}>
                <Cell title="单元格1" value="内容1" />
                <Cell title="单元格2" value="内容2" />
            </Cell.Group>
        </DemoBlock>
    </>
);
