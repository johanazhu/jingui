import React from 'react';
import { Row, Col, Panel, Space } from 'jing-ui';
import { DemoBlock } from 'demo';
import './index.scss';

export default () => (
    <div className="demo-layout">
        <DemoBlock title="基本用法">
            <Row>
                <Col span={8}>span: 8</Col>
                <Col span={8}>span: 8</Col>
                <Col span={8}>span: 8</Col>
            </Row>
            <Row>
                <Col span={4}>span: 8</Col>
                <Col offset={4} span={10}>
                    offset: 4, span: 10
                </Col>
            </Row>
            <Row>
                <Col offset={12} span={12}>
                    offset: 12, span: 12
                </Col>
            </Row>
        </DemoBlock>
        <DemoBlock title="对齐方式">
            <Row justify="center">
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
            <Row justify="end">
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
            <Row justify="space-between">
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
            <Row justify="space-around">
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
                <Col span={6}>span: 6</Col>
            </Row>
        </DemoBlock>
    </div>
);
