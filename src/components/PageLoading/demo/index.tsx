import React from 'react';
import { PageLoading } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="基本用法" padding="">
            <PageLoading loading={true} />
        </DemoBlock>
    </>
);
