import React from 'react';
import { Panel, Space, Button } from 'jing-ui';

export default () => (
    <div className="jing-page jing-page-noticebar">
        <Panel title="用法">
            <Space />
            <Button>Space默认不不写，为1</Button>
            <Space scale={2} />
            <Button>scale2</Button>
            <Space scale={3} />
            <Button>scale3</Button>
            <Space scale={4} />
            <Button>scale4</Button>
            <Space scale={5} />
            <Button>scale5</Button>
            <Space scale={6} />
            <Button>scale6</Button>
            <Space />
        </Panel>
    </div>
);
