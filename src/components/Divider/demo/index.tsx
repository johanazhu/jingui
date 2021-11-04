import * as React from 'react';
import { Divider, Space } from 'jing-ui';

export default () => (
    <div className="jing-page">
        <Space />
        <Divider contentPosition="center">文字</Divider>
        <Space />
        <Divider contentPosition="left">文字</Divider>
        <Space />
        <Divider contentPosition="right">文字</Divider>
        <Space />
        <Divider contentPosition="center" dashed>
            文字
        </Divider>
    </div>
);
