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
        <Panel title="Row justify">
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
            <Space />
            <Row justify="space-between">
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
            <Space />
            <Row justify="space-around">
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
            <Space />
        </Panel>
        <Panel title="Row align">
            <Space />
            <Row align="center" style={{ height: '100px', background: 'grey' }}>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
            <Space />
            <Row
                align="bottom"
                style={{ height: '100px', background: 'yellow' }}
            >
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
            <Space />
        </Panel>
        <Panel title="事件">
            <Space />
            <Row
                onClick={() => {
                    alert('点击row');
                }}
            >
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
            <Space />
            <Row>
                <Col
                    span={6}
                    onClick={() => {
                        alert('点击col1');
                    }}
                >
                    span: 6
                </Col>
                <Col
                    span={6}
                    onClick={() => {
                        alert('点击col2');
                    }}
                >
                    span: 6
                </Col>
                <Col
                    span={6}
                    onClick={() => {
                        alert('点击col3');
                    }}
                >
                    span: 6
                </Col>
            </Row>
            <Space />
        </Panel>
    </div>
);
