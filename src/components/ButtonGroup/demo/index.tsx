import React from 'react';
import { ButtonGroup, Button, Panel } from 'jing-ui';

export default () => (
    <div className="jing-page jing-page-buttongroup">
        <Panel title="自定义布局">
            <ButtonGroup>
                <Button>ONE</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button>ONE</Button>
                <Button>TWO</Button>
            </ButtonGroup>
        </Panel>
        <Panel title="形态">
            <ButtonGroup variant="outlined">
                <Button variant="contained">1</Button>
                <Button>2</Button>
                <Button>3</Button>
            </ButtonGroup>
        </Panel>
        <Panel title="颜色">
            <ButtonGroup>
                <Button>blue</Button>
                <Button color="orange">orange</Button>
                <Button color="green">green</Button>
            </ButtonGroup>
        </Panel>
    </div>
);
