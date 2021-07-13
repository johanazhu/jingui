import React, { useState } from 'react';
import { KeyBoard, Panel } from 'jing-ui';

export default () => {
    const [inputValue4, setInputValue4] = useState('');

    const onHandleValue = (val: string) => {
        alert(val);
    };
    return (
        <div className="jing-page jing-page-keyboard">
            <Panel title="字母2">
                <KeyBoard>
                    <KeyBoard.Header />
                    <KeyBoard.Symbol
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
            </Panel>
        </div>
    );
};
