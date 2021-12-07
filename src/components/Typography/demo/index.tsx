import React from 'react';
import { Typography } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="基础用法">
            <Typography innerHtml={'<div>你好</div>'} />
        </DemoBlock>
    </>
);
