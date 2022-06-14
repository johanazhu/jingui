import React, { useState, useEffect, TouchEvent, FC, memo } from 'react';
import classnames from 'classnames';
import { PasswordInputProps } from './PropType';

const PasswordInput: FC<PasswordInputProps> = (props) => {
    const {
        value,
        length,
        mask,
        focused,
        isFocus,
        mode,
        onHandleFocus,
        onChange,
    } = props;

    const [safeInputValue, setSafeInputValue] = useState(value);

    useEffect(() => {
        setSafeInputValue(value);
    }, [value]);

    useEffect(() => {
        if (mode === 'input') {
            // console.log('isFocus', isFocus)
            if (isFocus === true) {
                document
                    ?.getElementsByClassName('jing-passwordinput--input')[0]
                    // @ts-ignore
                    ?.focus();
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
                    className={classnames('jing-passwordinput--security-item', {
                        'jing-passwordinput--security-item-focus': showCursor,
                    })}
                >
                    {mask ? (
                        <i
                            style={{ visibility: char ? 'visible' : 'hidden' }}
                        ></i>
                    ) : (
                        char
                    )}
                    {showCursor && (
                        <div className="jing-passwordinput--security-cursor"></div>
                    )}
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
        <div className="jing-passwordinput">
            <ul
                className="jing-passwordinput--security"
                onTouchStart={onTouchStart}
            >
                {renderPoints()}
            </ul>
            {mode === 'input' && (
                <input
                    // type={util.system.ios ? "number" : "tel"}
                    pattern="[0-9]*"
                    className="jing-passwordinput--input"
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

export default memo(PasswordInput);
