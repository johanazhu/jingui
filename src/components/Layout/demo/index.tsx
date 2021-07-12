import React from 'react';
import { Row, Col, Panel } from 'jing-ui';

export default () => (
    <div className="jing-page jing-page-layout">
        <Panel title="基本排版">
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Panel>
    </div>
);
