import React, { useState, useRef } from 'react';
import { Picker, Popup, Cell, Toast } from '@jojobo/jing-ui';
import { DemoBlock } from 'demo';
import {
    normalColumns,
    disabledColumns,
    multipleColumns,
    cascadeColumns,
} from './data';

export default () => {
    const [showPopup, setShowPopup] = useState(false);
    const pickerRef = useRef<any>(null);
    const [city, setCity] = useState('选择城市');

    const cities: any = {
        浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
        福建: ['福州', '厦门', '莆田', '三明', '泉州'],
    };

    const onConfirm = (value: any, index: any) => {
        Toast(`当前值: ${value}, 当前索引: ${index}`);
    };

    const onCancel = () => Toast('取消');

    const onChange = (value: any, index: any) => {
        console.log('value', value);
        Toast(`当前值: ${value}, 当前索引: ${index}`);
    };

    return (
        <>
            <DemoBlock title="基本用法" padding="" className="demo-jing-picker">
                <Picker
                    title="基本用法"
                    columns={normalColumns}
                    onConfirm={onConfirm}
                    onCancel={onCancel}
                    onChange={onChange}
                />
            </DemoBlock>

            <DemoBlock
                title="默认选中项"
                padding=""
                className="demo-jing-picker"
            >
                <Picker
                    title="默认选中项"
                    columns={normalColumns}
                    defaultIndex={2}
                    onChange={onChange}
                />
            </DemoBlock>

            <DemoBlock title="禁用选项" padding="" className="demo-jing-picker">
                <Picker title="禁用选项" columns={disabledColumns} />
            </DemoBlock>

            <DemoBlock title="多列选择" padding="" className="demo-jing-picker">
                <Picker title="多列选择" columns={multipleColumns} />
            </DemoBlock>

            <DemoBlock title="级联选择" padding="" className="demo-jing-picker">
                <Picker
                    title="级联选择"
                    columns={cascadeColumns}
                    onChange={(value: any, index: any) => {
                        console.log('value', value);
                    }}
                />
            </DemoBlock>
            <DemoBlock
                title="动态设置选项"
                padding=""
                className="demo-jing-picker"
            >
                <Picker
                    ref={pickerRef}
                    title="动态设置选项"
                    columns={[
                        { values: Object.keys(cities) },
                        { values: cities['浙江'], defaultIndex: 2 },
                    ]}
                    onChange={(values: any) => {
                        pickerRef.current.setColumnValues(1, cities[values[0]]);
                    }}
                />
            </DemoBlock>

            <DemoBlock title="加载状态" padding="" className="demo-jing-picker">
                <Picker title="加载状态" loading columns={multipleColumns} />
            </DemoBlock>

            <DemoBlock
                title="搭配弹出层使用"
                padding=""
                className="demo-jing-picker"
            >
                <Cell
                    title="城市"
                    value={city}
                    isLink
                    onClick={() => {
                        setShowPopup(true);
                    }}
                />
                <Popup
                    visible={showPopup}
                    position="bottom"
                    onClose={() => setShowPopup(false)}
                >
                    <Picker
                        title="搭配弹出层使用"
                        columns={normalColumns}
                        onConfirm={() => setShowPopup(false)}
                        onCancel={() => setShowPopup(false)}
                        onChange={(value: any, index: any) => {
                            console.log('value', value);
                            setCity(value);
                        }}
                    />
                </Popup>
            </DemoBlock>
        </>
    );
};
