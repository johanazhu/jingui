import React from 'react';
import { Tag } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="基础用法" background="rgba(242, 246, 249, 1)">
            <div
                style={{
                    padding: '1rem',
                    marginBottom: '0.5rem',
                    background: 'white',
                }}
            >
                <Tag>标签</Tag>
                <Tag>标签</Tag>
                <Tag>标签</Tag>
            </div>
            <div
                style={{
                    padding: '1rem',
                    marginBottom: '0.5rem',
                    background: 'white',
                }}
            >
                <Tag type="second">标签</Tag>
                <Tag type="second">标签</Tag>
                <Tag type="second">标签</Tag>
            </div>
            <div
                style={{
                    padding: '1rem',
                    marginBottom: '0.5rem',
                    background: 'white',
                }}
            >
                <Tag type="normal">标签</Tag>
                <Tag type="normal">标签</Tag>
                <Tag type="normal">标签</Tag>
            </div>
            <div style={{ padding: '1rem', background: 'white' }}>
                <Tag type="disabled">标签</Tag>
                <Tag type="disabled">标签</Tag>
                <Tag type="disabled">标签</Tag>
            </div>
        </DemoBlock>
        <DemoBlock title="标签大小">
            <Tag>标签</Tag>
            <Tag size="medium">标签</Tag>
            <Tag size="large">标签</Tag>
        </DemoBlock>
        <DemoBlock title="被选中的标签" background="rgba(242, 246, 249, 1)">
            <div
                style={{
                    padding: '1rem',
                    marginBottom: '0.5rem',
                    background: 'white',
                }}
            >
                <Tag active>标签</Tag>
                <Tag active>标签</Tag>
                <Tag active>标签</Tag>
            </div>
            <div
                style={{
                    padding: '1rem',
                    background: 'white',
                }}
            >
                <Tag type="second" active>
                    标签
                </Tag>
                <Tag type="second" active>
                    标签
                </Tag>
                <Tag type="second" active>
                    标签
                </Tag>
            </div>
        </DemoBlock>
    </>
);
