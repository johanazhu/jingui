import React, { useState } from 'react';
import { KeyBoard, Panel } from 'jing-ui';

export default () => {
    const [inputValue, setInputValue] = useState('');

    const onHandleValue = (val: string) => {
        alert(val);
    };
    return (
        <div className="jing-page jing-page-keyboard">
            <Panel title="字母">
                <KeyBoard>
                    <KeyBoard.Header showIcon={false} />
                    <KeyBoard.Letter
                        value={inputValue}
                        onHandleValue={onHandleValue}
                        onHandleDelete={(text: any) => {
                            setInputValue(text);
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
