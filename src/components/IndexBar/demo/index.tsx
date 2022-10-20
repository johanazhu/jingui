import React, { useState } from 'react';
import { Tabs, IndexBar, Cell } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const indexList = [];
    const customIndexList = [1, 2, 3, 4, 5, 6, 8, 9, 10];
    const charCodeOfA = 'A'.charCodeAt(0);

    for (let i = 0; i < 26; i += 1) {
        indexList.push(String.fromCharCode(charCodeOfA + i));
    }
    const [value, setValue] = useState(0);
    return (
        <>
            <Tabs
                value={value}
                onChange={(index: any) => {
                    index && setValue(index);
                }}
            >
                <Tabs.Panel title="用法示例">
                    <DemoBlock padding="" background="transparent">
                        <IndexBar>
                            {indexList.map((item) => (
                                <div key={item}>
                                    <IndexBar.Anchor index={item} />
                                    <Cell title="文本" />
                                    <Cell title="文本" />
                                    <Cell title="文本" />
                                </div>
                            ))}
                        </IndexBar>
                    </DemoBlock>
                </Tabs.Panel>
                <Tabs.Panel title="自定义索引列表">
                    <DemoBlock padding="" background="transparent">
                        <IndexBar indexList={customIndexList}>
                            {customIndexList.map((item) => (
                                <div key={item}>
                                    <IndexBar.Anchor index={item}>
                                        标题 {item}
                                    </IndexBar.Anchor>
                                    <Cell title="文本" />
                                    <Cell title="文本" />
                                    <Cell title="文本" />
                                </div>
                            ))}
                        </IndexBar>
                    </DemoBlock>
                </Tabs.Panel>
            </Tabs>
        </>
    );
};
