import React from 'react';
import { Row, Col, Panel, Space } from 'jing-ui';

export default () => (
    <div className="jing-page jing-page-layout">
        <Panel title="Row布局玩法">
            <Space />
            <Row>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
        </Panel>
    </div>
);
