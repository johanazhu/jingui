import React, { useState } from 'react';
import { KeyBoard, Panel } from 'jing-ui';

export default () => {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const onHandleValue = (val: string) => {
        alert(val);
    };
    return (
        <div className="jing-page jing-page-keyboard">
            <Panel title="数字">
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
            </Panel>
            <Panel title="价格">
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
            </Panel>
        </div>
    );
};
