import React from 'react';
import { Row, Col, Panel, Space } from 'jing-ui';

export default () => (
    <div className="jing-page jing-page-layout">
        <Panel title="基本用法">
            <Space />
            <Row>
                <Col span={8}>span: 8</Col>
                <Col span={8}>span: 8</Col>
                <Col span={8}>span: 8</Col>
            </Row>
            <Space />
        </Panel>
        <Panel title="Row布局玩法">
            <Space />
            <Row justify="center">
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
            <Space />
            <Row justify="end">
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
        </Panel>
    </div>
);
