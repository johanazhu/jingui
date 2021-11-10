import React, { useState } from 'react';
import { KeyBoard } from 'jing-ui';
import { DemoBlock } from 'demo';

export default () => {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');

    const onHandleValue = (val: string) => {
        alert(val);
    };

    return (
        <>
            <DemoBlock title="数字" padding="">
                <KeyBoard>
                    <KeyBoard.Header showIcon={false} />
                    <KeyBoard.Number
                        value={inputValue1}
                        onHandleValue={onHandleValue}
                        onHandleDelete={(text: any) => {
                            setInputValue1(text);
                        }}
                    />
                </KeyBoard>
            </DemoBlock>
            <DemoBlock title="数字" padding="">
                <KeyBoard>
                    <KeyBoard.Header showIcon={false} />
                    <KeyBoard.Price
                        value={inputValue2}
                        onHandleValue={onHandleValue}
                        onHandleDelete={(text: any) => {
                            setInputValue2(text);
                        }}
                    />
                </KeyBoard>
            </DemoBlock>
            <DemoBlock title="字母" padding="">
                <KeyBoard>
                    <KeyBoard.Header showIcon={false} />
                    <KeyBoard.Letter
                        value={inputValue3}
                        onHandleValue={onHandleValue}
                        onHandleDelete={(text: any) => {
                            setInputValue3(text);
                        }}
                        onHandleDone={() => {
                            alert('点击完成回调');
                        }}
                        onHandleSymbol={() => {
                            alert('点击切换系统回调');
                        }}
                    />
                </KeyBoard>
            </DemoBlock>
            <DemoBlock title="字母2" padding="">
                <KeyBoard>
                    <KeyBoard.Header showIcon={false} />
                    <KeyBoard.Letter
                        value={inputValue4}
                        onHandleValue={onHandleValue}
                        onHandleDelete={(text: any) => {
                            setInputValue4(text);
                        }}
                        onHandleDone={() => {
                            alert('点击完成回调');
                        }}
                        onHandleSymbol={() => {
                            alert('点击切换系统回调');
                        }}
                    />
                </KeyBoard>
            </DemoBlock>
        </>
    );
};
