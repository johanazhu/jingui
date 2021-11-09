import React from 'react';
import { Row, Col, Panel, Space } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="基本用法">
            <Row>
                <Col span={8}>span: 8</Col>
                <Col span={8}>span: 8</Col>
                <Col span={8}>span: 8</Col>
           </Row>
        </DemoBlock>
        <DemoBlock title="Row justify">
            <Row justify="center">
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
        </DemoBlock>
        <DemoBlock title="Row justify">
            <Row justify="end">
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
        </DemoBlock>
        <DemoBlock title="Row justify">
            <Row justify="space-between">
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
        </DemoBlock>
        <DemoBlock title="Row justify">
            <Row justify="space-around">
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
        </DemoBlock>
        <DemoBlock title="Row align">
            <Row align="center" style={{ height: '100px', background: 'grey' }}>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
        </DemoBlock>
        <DemoBlock title="Row align">
            <Row align="bottom" style={{ height: '100px', background: 'yellow' }}>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
        </DemoBlock>
        <DemoBlock title="点击事件">
            <Row onClick={() => {
                    alert('点击row');
                }}>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
        </DemoBlock>
        <DemoBlock title="点击事件">
            <Row>
                <Col span={6}
                    onClick={() => {
                        alert('点击col1');
                    }}>
                    span: 6
                </Col>
                <Col span={6}
                    onClick={() => {
                        alert('点击col2');
                    }}>
                    span: 6
                </Col>
                <Col span={6}
                    onClick={() => {
                        alert('点击col3');
                    }}>
                    span: 6
                </Col>
            </Row>
        </DemoBlock>
    </>


);
