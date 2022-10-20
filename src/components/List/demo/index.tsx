import React from 'react';
import { Row, Col, Panel } from '@jojobo/jing-ui';

export default () => (
    <div className="jing-page jing-page-layout">
        <Panel title="基本排版">
            <div>111</div>
            <List.Title leftText="列表标题" rightText="链接" onRightClick />
        </Panel>
    </div>
);
