import React from 'react';
import { ButtonGroup, Button, Panel } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => (
    <>
        <DemoBlock title="选项状态">
            <ButtonGroup>
                <Button type="primary">我是按钮</Button>
            </ButtonGroup>
            <ButtonGroup type="fixed-bottom">
                <Button type="primary" disabled>
                    我是按钮
                </Button>
                <Button type="primary">我是按钮</Button>
            </ButtonGroup>
        </DemoBlock>
        <DemoBlock title="按钮组尺寸">
            <ButtonGroup size="large">
                <Button type="primary" plain>
                    按钮1
                </Button>
                <Button type="primary" loading>
                    按钮2
                </Button>
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
            <ButtonGroup size="mini">
                <Button type="primary" plain>
                    按钮1
                </Button>
                <Button type="primary" plain round>
                    按钮2
                </Button>
                <Button type="second-primary" round>
                    按钮3
                </Button>
                <Button type="second-primary" disabled>
                    按钮4
                </Button>
            </ButtonGroup>
        </DemoBlock>
    </>
);
