import React from 'react';
import { ButtonGroup, Button, Panel } from 'jing-ui';
// import { DemoBlock } from 'demos'

export default () => (
    <div className="jing-page jing-page-buttongroup">
        <Panel title="按钮组类型">
            {/* <DemoBlock title='选项状态'>
                <ButtonGroup>
                    <Button type="primary">我是按钮</Button>
                </ButtonGroup>
            </DemoBlock> */}
            <ButtonGroup type="fixed-bottom">
                <Button type="primary" disabled>
                    我是按钮
                </Button>
                <Button type="primary">按钮2</Button>
            </ButtonGroup>
        </Panel>
        <Panel title="按钮组尺寸">
            <ButtonGroup size="large">
                <Button type="primary" plain>
                    按钮1
                </Button>
                <Button type="primary">按钮2</Button>
            </ButtonGroup>
            <ButtonGroup size="normal">
                <Button type="primary" plain>
                    按钮1
                </Button>
                <Button type="primary" plain>
                    按钮2
                </Button>
                <Button type="primary">按钮3</Button>
            </ButtonGroup>
            <ButtonGroup size="small">
                <Button type="primary" plain>
                    按钮1
                </Button>
                <Button type="primary" plain>
                    按钮2
                </Button>
                <Button type="primary">按钮3</Button>
                <Button type="primary">按钮4</Button>
            </ButtonGroup>
            <ButtonGroup size="small">
                <Button type="primary" plain round>
                    按钮1
                </Button>
                <Button type="primary" plain round>
                    按钮2
                </Button>
                <Button type="primary" round>
                    按钮3
                </Button>
                <Button type="primary" round>
                    按钮4
                </Button>
            </ButtonGroup>
        </Panel>
    </div>
);
