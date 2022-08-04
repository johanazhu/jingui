import React from 'react';
import { Sticky, Button } from 'jing-ui';
import { DemoBlock } from 'demo';
import './index.scss';

export default () => (
    <>
        <DemoBlock className="demo-jing-sticky" title="基础用法">
            <Sticky>
                <Button type="primary">基础用法</Button>
            </Sticky>
        </DemoBlock>
    </>
);
