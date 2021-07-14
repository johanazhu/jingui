import React, { useState } from 'react';
import { Portal, Panel, Button } from 'jing-ui';

export default () => {
    const [isShow, setIsShow] = useState(false);
    return (
        <div className="jing-page jing-page-portal">
            <Panel title="基本操作">
                <Button
                    onClick={() => {
                        setIsShow(true);
                    }}
                >
                    点击
                </Button>
                {isShow && (
                    <Portal>
                        <div>我在父组件之外的地方出现</div>
                    </Portal>
                )}
            </Panel>
        </div>
    );
};
