import React, { useState, useEffect, forwardRef } from 'react';
import { Popup, KeyBoard } from 'components';

export interface PickerKeyboardProps {
    show: boolean;
    value: string;
    mode?: string;
    onHandleClickToValue: (text: string) => void;
    onHandleDelete: (text: string) => void;
    onHandleClickToCancel: () => void;
    onHandleDone?: () => void;
}

const PickerKeyboard = forwardRef((props: PickerKeyboardProps, ref: any) => {
    const {
        show,
        value,
        mode,
        onHandleClickToValue,
        onHandleDelete,
        onHandleClickToCancel,
        onHandleDone,
    } = props;

    // const [isShow, setIsShow] = useState(show)
    const [inputValue, setInputValue] = useState(value);
    const [valueHeight, setValueHeight] = useState(0);
    const [isShowSymbol, setIsShowSymbol] = useState(false);

    useEffect(() => {
        const hTotal = Math.round(document.body.clientWidth / 1.46);
        // 让点击收起按钮点的更舒服，给个10像素的高
        setValueHeight(hTotal + 10);
    }, []);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const onHandleValue = (text: string) => {
        onHandleClickToValue(text);
    };

    return (
        <Popup.Group
            ref={ref}
            className="PickerKeyboard"
            show={show}
            mask={false}
            model="input"
            isActionSheet={true}
            groupStyle={{ top: 'auto', height: valueHeight + 'px', overflow: show ? 'visible' : 'hidden' }}
        >
            <Popup.Slideup style={{ borderRadius: '0', height: 'auto' }} overflowHidden={false}>
                <KeyBoard>
                    <KeyBoard.Header
                        onClick={() => {
                            onHandleClickToCancel();
                        }}
                    />
                    {mode === 'price' && (
                        <KeyBoard.Price
                            value={inputValue}
                            onHandleValue={onHandleValue}
                            onHandleDelete={onHandleDelete}
                        />
                    )}
                    {mode === 'letter' && (
                        <>
                            {isShowSymbol ? (
                                <KeyBoard.Symbol
                                    value={inputValue}
                                    onHandleValue={onHandleValue}
                                    onHandleDelete={onHandleDelete}
                                    onHandleDone={onHandleDone}
                                    onHandleSymbol={() => {
                                        setIsShowSymbol(false);
                                    }}
                                />
                            ) : (
                                    <KeyBoard.Letter
                                        value={inputValue}
                                        onHandleValue={onHandleValue}
                                        onHandleDelete={onHandleDelete}
                                        onHandleDone={onHandleDone}
                                        onHandleSymbol={() => {
                                            setIsShowSymbol(true);
                                        }}
                                    />
                                )}
                        </>
                    )}
                </KeyBoard>
            </Popup.Slideup>
        </Popup.Group>
    );
});

PickerKeyboard.defaultProps = {
    mode: 'price',
};

export default React.memo(PickerKeyboard);
