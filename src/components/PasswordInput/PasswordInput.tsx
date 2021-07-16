import React, { useState, useEffect, TouchEvent } from 'react';
import classnames from 'classnames';
import { Popup, KeyBoard } from 'components';
import util from '../_util';

/**
 * PasswordInput 密码输入框
 * @param {value} string 密码值
 * @param {length} string | number 密码最大长度
 * @param {mask} boolean 是否隐藏密码内容
 * @param {focused} boolean 是否已聚焦，聚焦时会显示光标
 * @param {mode} string 模式，input模式 和 默认模式
 * @param {onHandleFocus} function focus时方法
 * @param {onChange} function change时方法
 **/
export interface PasswordInputProps {
    value: string;
    length: string | number;
    mask: boolean;
    focused: boolean;
    mode?: string;
    isFocus?: boolean; // 是否让他一开始就弹出系统键盘
    onHandleFocus?: (event: TouchEvent) => void;
    onChange?: (event: any) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = (props) => {
    const { value, length, mask, focused, isFocus, mode, onHandleFocus, onChange } = props;

    const [safeInputValue, setSafeInputValue] = useState(value);

    // console.log('组件里的focus', isFocus)

    useEffect(() => {
        setSafeInputValue(value);
    }, [value]);


    useEffect(() => {
        if (mode === 'input') {
            // console.log('isFocus', isFocus)
            if (isFocus === true) {
                // @ts-ignore
                document.getElementsByClassName('PasswordInput__input')[0].focus();
            }
        }
    }, [mode, isFocus]);
    const renderPoints = () => {
        let Points: JSX.Element[] = [];

        for (let i = 0; i < length; i++) {
            const char = value[i];
            const showCursor = focused && i === value.length;

            Points.push(
                <li
                    key={i}
                    className={classnames('PasswordInput__security-item', {
                        'PasswordInput__security-item-focus': showCursor,
                    })}
                >
                    {mask ? <i style={{ visibility: char ? 'visible' : 'hidden' }}></i> : char}
                    {showCursor && <div className="PasswordInput__security-cursor"></div>}
                </li>,
            );
        }
        return Points;
    };

    const onTouchStart = (event: TouchEvent) => {
        event.stopPropagation();
        onHandleFocus && onHandleFocus(event);
    };

    return (
        <div className="PasswordInput">
            <ul className="PasswordInput__security" onTouchStart={onTouchStart}>
                {renderPoints()}
            </ul>
            {mode === 'input' && (
                <input
                    type={util.system.ios ? "number" : "tel"}
                    pattern="[0-9]*"
                    className="PasswordInput__input"
                    value={safeInputValue}
                    maxLength={Number(length)}
                    onChange={(e) => {
                        // setSafeInputValue(e.target.value);
                        onChange && onChange(e);
                    }}
                />
            )}
        </div>
    );
};

PasswordInput.defaultProps = {
    length: 6,
    isFocus: true,
};

export default React.memo(PasswordInput);
