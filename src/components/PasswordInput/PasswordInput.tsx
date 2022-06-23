import React, {
    useEffect,
    forwardRef,
    useRef,
    useMemo,
    useImperativeHandle,
} from 'react';
import classnames from 'classnames';
import {
    PasswordInputProps,
    PasswordInputInstance,
    InputMode,
} from './PropType';
import { useSetState, useUpdateEffect } from '../hooks';
import { isDef, isFunction, formatNumber, addUnit } from '@/utils';

const prefixCls = 'jing-password-input';

const PasswordInput = forwardRef<PasswordInputInstance, PasswordInputProps>(
    (props, ref) => {
        const {
            className,
            value,
            type,
            mask,
            autoFocus,
            length = 6,
            gutter,
            onChange,
            onSubmit,
            onFocus,
            onBlur,
            mode,
        } = props;

        const classes = classnames(className, prefixCls);

        const ulClass = classnames(`${prefixCls}__security`, {
            'jing-hairline--surround': !gutter,
        });

        const inputRef = useRef<HTMLInputElement>(null);
        const innerEffect = useRef<boolean>(false);

        const [state, updateState] = useSetState({
            code: value || '',
            focused: autoFocus,
            inputType: type,
            inputMode: 'text',
        });

        const codeArr = useMemo(
            () => state.code?.toString().split(''),
            [state.code],
        );
        const cursorIndex = useMemo(() => codeArr.length, [codeArr.length]);

        useEffect(() => {
            if (state.code.length >= length) {
                inputRef?.current?.blur?.();
                onSubmit?.(state.code);
            }
        }, [length, state.code]);

        useUpdateEffect(() => {
            if (innerEffect.current) {
                innerEffect.current = false;
                return;
            }
            formatValue(props.value ?? '');
        }, [value]);

        useUpdateEffect(() => {
            if (type === 'number') {
                updateState({ inputType: 'tel', inputMode: 'numeric' });
            } else {
                updateState({ inputType: 'text' });
            }
        }, [type]);

        const focus = () => {
            inputRef?.current?.focus();
            updateState({ focused: true });
        };

        const blur = () => {
            inputRef?.current?.blur();
            updateState({ focused: false });
        };

        const clear = () => {
            updateState({ code: '' });
        };

        const formatValue = (val: string, callback?: (v: string) => void) => {
            if (isDef(length) && val?.length > +length) {
                val = val.slice(0, length);
            }

            if (type === 'number') {
                val = formatNumber(val, false, false);
            }

            updateState({ code: val });
            if (isFunction(callback)) callback(val);
        };

        const handleChange = (event: any) => {
            const val = event.target.value || '';
            innerEffect.current = true;
            formatValue(val, onChange);
        };

        const onHandleTouchStart = (event: TouchEvent | React.TouchEvent) => {
            if (mode === 'normal') return;
            event.stopPropagation();
            // emit(ctx, 'focus', event);
            updateState({ focused: true });
            onFocus?.();
        };

        useImperativeHandle(ref, () => ({
            focus,
            blur,
            clear,
        }));

        const renderPoints = () => {
            const Points: React.ReactNode[] = [];
            for (let i = 0; i < length; i++) {
                const char = codeArr[i];
                const showBorder = i !== 0 && !gutter;
                // const showCursor = state.focused && cursorIndex === i && !char;
                const showCursor = state.focused && i === cursorIndex;
                // console.log('state.focused', state.focused)
                // console.log('cursorIndex', cursorIndex)
                // console.log('showCursor', showCursor)
                let style;
                if (i !== 0 && gutter) {
                    style = { marginLeft: addUnit(gutter) };
                }

                const liClass = classnames(`${prefixCls}__item`, {
                    'jing-hairline--left': showBorder,
                });
                Points.push(
                    <li key={i} className={liClass} style={style}>
                        {mask ? (
                            <i
                                style={{
                                    visibility: char ? 'visible' : 'hidden',
                                }}
                            />
                        ) : (
                            char
                        )}
                        {showCursor && (
                            <div className={`${prefixCls}__cursor`}></div>
                        )}
                    </li>,
                );
            }

            return Points;
        };

        return (
            <div className={classes}>
                <ul className={ulClass} onTouchStart={onHandleTouchStart}>
                    {renderPoints()}
                    {mode === 'normal' && (
                        <input
                            ref={inputRef}
                            type={state.inputType}
                            inputMode={state.inputMode as InputMode}
                            pattern="[0-9]*"
                            maxLength={length}
                            value={state.code}
                            autoComplete="false"
                            autoCorrect="off"
                            autoCapitalize="off"
                            autoFocus={autoFocus}
                            spellCheck="false"
                            onChange={handleChange}
                            onFocus={(e) => {
                                updateState({ focused: true });
                                onFocus?.(e);
                            }}
                            onBlur={(e) => {
                                updateState({ focused: false });
                                onBlur?.(e);
                            }}
                        />
                    )}
                </ul>
            </div>
        );
    },
);

PasswordInput.defaultProps = {
    length: 6,
    type: 'text',
    autoFocus: false,
    mask: true,
    mode: 'normal',
};

export default PasswordInput;
