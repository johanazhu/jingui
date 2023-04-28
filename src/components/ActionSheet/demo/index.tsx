import React, { useState } from 'react';
import { Cell, ActionSheet } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';

const familyMemberList = [
    { id: '01', value: '01', label: '父亲' },
    { id: '02', value: '02', label: '母亲' },
    { id: '03', value: '03', label: '配偶' },
    { id: '04', value: '04', label: '儿子' },
    { id: '05', value: '05', label: '女儿' },
];

export default () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <>
            <DemoBlock
                title="基本用法"
                className="demo-jing-button"
                padding="0"
            >
                <Cell
                    title="弹窗提示"
                    isLink
                    onClick={() => {
                        setIsShow(true);
                    }}
                />
                <ActionSheet
                    show={isShow}
                    title="添加成员"
                    tabSource={[]}
                    columns={familyMemberList}
                    onColumnItemClick={(current: any) => {
                        console.log('current', current);
                        // setRelationship(current.label);
                        // setMemberType(current.value);
                        // setIsShowMemberType(false);
                    }}
                    onHandleCancel={() => {
                        // setIsShowMemberType(false);
                    }}
                />
            </DemoBlock>
        </>
    );
};
