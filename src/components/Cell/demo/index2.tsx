import React from 'react';
import { Cell } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="CellGroup卡片风格" padding="12px 0 0" background="">
            <Cell.Group inset>
                <Cell title="单元格" value="内容" label="描述信息"></Cell>
                <Cell
                    title="单元格"
                    value="内容"
                    label="描述信息"
                    desc="详情信息"
                ></Cell>
            </Cell.Group>
        </DemoBlock>
        <DemoBlock title="CellGroup分组标签" padding="12px 0 0" background="">
            <Cell.Group title="分组1">
                <Cell title="单元格" value="内容"></Cell>
            </Cell.Group>
            <Cell.Group title="分组2">
                <Cell title="单元格" value="内容"></Cell>
            </Cell.Group>
        </DemoBlock>
    </>
);
