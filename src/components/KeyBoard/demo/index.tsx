import React, { useState } from 'react';
import { KeyBoard } from 'jing-ui';

export default () => {
    const [inputValue, setInputValue] = useState('');

    const onHandleValue = (val: string) => {
        alert(val);
    };
    return (
        <div>
            <KeyBoard>
                <KeyBoard.Header showIcon={false} />
                <KeyBoard.Number
                    value={inputValue}
                    onHandleValue={onHandleValue}
                    onHandleDelete={(text: any) => {
                        setInputValue(text);
                    }}
                />
            </KeyBoard>
            {/* <KeyBoard>
                <KeyBoard.Price
                    value={inputValue}
                    onHandleValue={onHandleValue}
                    onHandleDelete={(text: any) => {
                        setInputValue(text);
                    }}
                />
            </KeyBoard> */}
        </div>
    );
};
