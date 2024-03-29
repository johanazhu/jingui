import React, { useState } from 'react';
import { Switch, Cell } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <DemoBlock className="demo-switch" padding="" title="基础用法">
                <Cell
                    center
                    title="普通"
                    value={
                        <Switch
                            checked={checked}
                            onChange={(value: any) =>
                                value && setChecked(value)
                            }
                        />
                    }
                />
                <Cell center title="默认开" value={<Switch defaultChecked />} />
                <Cell
                    center
                    title="禁用的开关（默认关）"
                    value={<Switch disabled />}
                />
                <Cell
                    center
                    title="禁用的开关（默认开）"
                    value={<Switch defaultChecked disabled />}
                />
            </DemoBlock>
            <DemoBlock className="demo-switch" padding="" title="自定义尺寸">
                <Cell
                    center
                    title="自定义尺寸"
                    value={
                        <Switch
                            size={24}
                            checked={checked}
                            onChange={(value: any) =>
                                value && setChecked(value)
                            }
                        />
                    }
                />
            </DemoBlock>
        </>
    );
};
