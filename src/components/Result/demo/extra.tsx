import React from 'react';
import { Result, Panel, Button } from 'jing-ui';

export default () => (
    <div className="jing-page jing-page-result">
        <Panel title="自定义操作区">
            <Result
                status="empty"
                extra={
                    <Button
                        block
                        onClick={() => {
                            alert('click');
                        }}
                    >
                        按钮
                    </Button>
                }
            />
        </Panel>
    </div>
);
