import React, {
    FC,
    memo,
    ReactNode,
    useState,
    useEffect,
    useRef,
    TouchEvent,
} from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import {
    IconKeyboardShift,
    IconKeyboardShiftLine,
    IconArrow,
    IconKeyboardSecurity,
} from '../Icon';
import Key from './Key';
import { KeyboardProps, KeyType, LetterKeyboardKey } from './PropType';
import Popup from '../Popup';
import { useUpdateEffect, useRefs } from '../hooks';
import { getRect as getElementRect } from '../hooks/useRect';
import { stopPropagation, isObject } from '@/utils';
import {
    getDefaultDisplay,
    getCantActive,
    themeToLayout,
    letterLayout,
} from './utils';

import {
    useEventListener,
    useDebounceFn,
    useThrottleFn,
    useThrottle,
} from '../hooks';

const prefixCls = 'jing-keyboard';

const Keyboard: FC<KeyboardProps> = (props) => {
    const {
        className,
        layout = letterLayout,
        layoutName = 'default',
        title,
        theme = 'letter',
        showTitle,
        visible,
        transition,
        display,
        value = '',
        maxLength = Infinity,
        hideOnClickOutside,
        noNeedHideElements,
        onDelete,
        onInput,
        onShiftCb,
        onSpaceCb,
        onDoneCb,
        onShow,
        onHide,
    } = props;

    const keyboardRef = useRef<HTMLDivElement>(null);
    const keyboardKeysRef = useRef<HTMLDivElement>(null);
    // const keyRef = useRef<any>([]);
    const valueRef = useRef<any>(value);
    const showRef = useRef<any>(visible);
    const [refs, setRefs, resetRefs] = useRefs();

    const [layoutNamePlus, setLayoutNamePlus] =
        useState<LetterKeyboardKey>(layoutName);
    const [keyboardHeaderHeight, setKeyboardHeaderHeight] =
        useState<number>(40);
    const [keyboardBodyHeight, setKeyboardBodyHeight] = useState<number>(220);
    const [activeElement, setActiveElement] = useState<any>('');

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}__layout-${layoutNamePlus}`]:
            theme.indexOf('letter') >= 0,
        [`${prefixCls}__layout-${theme}`]: theme.indexOf('letter') !== 0,
    });

    // console.log('theme', theme.indexOf('letter'))

    useEffect(() => {
        if (hideOnClickOutside) {
            document.body.addEventListener('touchstart', handleTouchNeedHide);
            return () => {
                document.body.removeEventListener(
                    'touchstart',
                    handleTouchNeedHide,
                );
            };
        }
    }, []);

    useEffect(() => {
        showRef.current = visible;

        keyboardRef?.current?.addEventListener('touchstart', stopPropagation, {
            passive: false,
        });

        return () => {
            keyboardRef?.current?.removeEventListener(
                'touchstart',
                stopPropagation,
            );
        };
    }, [visible]);

    useUpdateEffect(() => {
        if (!transition) {
            visible ? onShow?.() : onHide?.();
        }
    }, [visible]);

    useEffect(() => {
        /*
         ** 计算自定义键盘的高度
         ** kHeight = 视图宽度 / 1.46
         ** header = hTotal * 0.15
         ** hBase = (hTotal - hTitle) / 4
         */
        if (keyboardRef.current) {
            let kHeight = Math.round(document.body.clientWidth / 1.46);
            const kHeader = Math.round(kHeight * 0.15);
            const kBase = Math.round((kHeight - kHeader) / 4);
            setKeyboardHeaderHeight(kHeader);
            setKeyboardBodyHeight(kBase * 4);
        }
    }, [keyboardRef]);

    useEffect(() => {
        valueRef.current = value;
    }, [value]);

    const getButtonDisplayName = (
        button: string,
        display: KeyboardProps['display'],
    ) => {
        display = display || getDefaultDisplay();
        return display[button] || button;
    };

    const handleTouchNeedHide = (event: Event) => {
        if (noNeedHideElements && noNeedHideElements?.length > 0) {
            // @ts-ignore
            for (let i = 0; i < event?.path.length; i++) {
                // @ts-ignore
                let item = event?.path[i];
                if (
                    noNeedHideElements.indexOf(item?.id || item?.className) !==
                    -1
                ) {
                    return;
                }
            }
        }

        onBlur();
    };

    const onBlur = () => {
        showRef.current && props.onBlur?.();
    };

    const onClose = () => {
        props.onClose?.();
        onBlur();
    };

    const onPress = (text: ReactNode | string, type: KeyType | string) => {
        // console.log('activeElement', activeElement);
        // console.log('text', text);
        // console.log('type', type);

        if (type === 'delete') {
            onDelete?.();
            onInput?.(
                valueRef.current.substring(0, valueRef.current.length - 1),
            );
        } else if (type === 'close') {
            onClose();
        } else if (type === 'shift') {
            const shiftToggle =
                layoutNamePlus === 'default' ? 'shift' : 'default';
            setLayoutNamePlus(shiftToggle);
            onShiftCb?.();
        } else if (type === '123.*!&' || type === 'ABC') {
            const shiftToggle =
                layoutNamePlus === 'default' ? 'symbol' : 'default';
            setLayoutNamePlus(shiftToggle);
        } else if (type === '空格') {
            // type space
            onSpaceCb?.();
        } else if (type === '完成') {
            // onHandleDone
            onDoneCb?.();
        } else if (value.length < maxLength) {
            props.onPress?.(activeElement || text, type);
            onInput?.(value + (activeElement || text));
        }
    };

    const handleTouchMove = (event: TouchEvent) => {
        const touch = event.touches[0];
        // clientX/Y 不随页面滚动而改变
        // pageX/Y 页面滚动而改变
        const currentPageX = touch.clientX;
        const currentPageY = touch.clientY;

        refs.forEach((element: any) => {
            const eleRect = getElementRect(element);

            if (
                currentPageX > eleRect?.left &&
                currentPageX < eleRect?.right &&
                currentPageY > eleRect?.top &&
                currentPageY < eleRect?.bottom
            ) {
                // console.log('这里', element.innerText);
                if (element.innerHTML.indexOf('delete') > 0) {
                    setActiveElement('delete');
                } else if (getCantActive(element.innerText)) {
                    setActiveElement('');
                } else {
                    setActiveElement(element.innerText);
                }
            }
        });
    };

    const handleTouchEnd = () => {
        setActiveElement('');
    };

    const onAnimationEnd = () => {
        visible ? onShow?.() : onHide?.();
    };

    const renderShiftButton = () => {
        return layoutNamePlus === 'default' ? (
            <IconKeyboardShiftLine
                className={`${prefixCls}-key__shift-icon`}
                onClick={(e: any) => {
                    stopPropagation(e);
                }}
            />
        ) : (
            <IconKeyboardShift
                className={`${prefixCls}-key__shift-icon`}
                onClick={(e: any) => {
                    stopPropagation(e);
                }}
            />
        );
    };

    const renderKeys = () => {
        switch (theme) {
            case 'letter':
            case 'custom-letter':
                return renderLetter();
            case 'number':
            case 'price':
            case 'id':
            case 'custom-number':
                return renderOthers();
        }
    };

    const renderOthers = () => {
        let _layout;
        if (theme === 'custom-number') {
            if (!Array.isArray(layout)) {
                throw new Error('自定义数字键盘需要填入layout');
            }
            _layout = layout;
        } else {
            _layout = themeToLayout(theme);
        }

        // console.log('_layout', _layout);

        return _layout?.map((row, rIndex) => {
            let rowArray = row.split(' ');

            return (
                <>
                    {rowArray.map((item: string, index: string | number) => {
                        const buttonDisplayName = getButtonDisplayName(
                            item,
                            display,
                        );

                        let keyIndex = parseInt(
                            rIndex.toString() + index.toString(),
                        );

                        if (buttonDisplayName === 'emty') {
                            return (
                                <Key
                                    ref={setRefs(keyIndex)}
                                    key="{keyIndex}"
                                    text=""
                                    type="emty"
                                />
                            );
                        }

                        return (
                            <Key
                                ref={setRefs(keyIndex)}
                                key={keyIndex}
                                text={buttonDisplayName}
                                type={buttonDisplayName}
                                touchStart={(text: ReactNode | string) => {
                                    console.log('key props', text);
                                    setActiveElement(text);
                                }}
                                active={activeElement === buttonDisplayName}
                                onPress={onPress}
                            />
                        );
                    })}
                </>
            );
        });
    };

    const renderLetter = () => {
        let _layout;
        if (theme === 'custom-letter') {
            console.log('props.layout', layout);
            if (!isObject(props.layout)) {
                throw new Error('自定义字母键盘需要填入layout');
            }
            _layout = layout;
        } else {
            _layout = layout;
        }
        // @ts-ignore
        const length = layout?.[layoutNamePlus || 'default'].length;
        // @ts-ignore
        return layout?.[layoutNamePlus || 'default']?.map(
            (row: any, rIndex: number) => {
                let rowArray = row.split(' ');

                return (
                    <div
                        className={`${prefixCls}__keys-row`}
                        style={{ height: 100 / length + '%' }}
                    >
                        {rowArray.map((item: any, cIndex: number) => {
                            const buttonDisplayName = getButtonDisplayName(
                                item,
                                display,
                            );

                            let keyIndex = parseInt(
                                rIndex.toString() + cIndex.toString(),
                            );

                            if (buttonDisplayName === 'shift') {
                                return (
                                    <Key
                                        ref={setRefs(keyIndex)}
                                        // className={classnames({
                                        //     "jing-keyboard-key-symbol": getCantActive(buttonDisplayName)
                                        // })}
                                        key={'shift'}
                                        text={renderShiftButton()}
                                        type="shift"
                                        active={activeElement === 'shift'}
                                        onPress={onPress}
                                    />
                                );
                            }

                            return (
                                <Key
                                    ref={setRefs(keyIndex)}
                                    // className={classnames({
                                    //     "jing-keyboard-key-symbol": getCantActive(buttonDisplayName)
                                    // })}
                                    key={keyIndex + buttonDisplayName}
                                    text={buttonDisplayName}
                                    type={buttonDisplayName}
                                    touchStart={(text: ReactNode | string) => {
                                        console.log('key props', text);
                                        setActiveElement(text);
                                    }}
                                    active={activeElement === buttonDisplayName}
                                    onPress={onPress}
                                />
                            );
                        })}
                    </div>
                );
            },
        );
    };

    const renderTitle = () => {
        if (!showTitle) {
            return;
        }

        return (
            <div
                className={`${prefixCls}__header`}
                style={{ height: keyboardHeaderHeight }}
            >
                <div
                    className={`${prefixCls}__header-left`}
                    style={{ width: keyboardHeaderHeight }}
                ></div>
                <h2 className={`${prefixCls}__header-title`}>
                    {title === '鲸禧保安全键盘' && <IconKeyboardSecurity />}
                    {title}
                </h2>
                <div
                    className={`${prefixCls}__header-right`}
                    onClick={onClose}
                    style={{ width: keyboardHeaderHeight }}
                >
                    <IconArrow />
                </div>
            </div>
        );
    };

    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            nodeRef={keyboardRef}
            in={visible}
            timeout={300}
            classNames={transition ? 'jing-slide-up' : ''}
            onExited={onAnimationEnd}
        >
            <div className={classes} ref={keyboardRef}>
                {renderTitle()}
                <div
                    className={`${prefixCls}__body`}
                    style={{
                        height: keyboardBodyHeight,
                    }}
                >
                    <div
                        className={`${prefixCls}__keys`}
                        ref={keyboardKeysRef}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {renderKeys()}
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

Keyboard.defaultProps = {
    theme: 'letter',
    layout: letterLayout,
    layoutName: 'default',
    hideOnClickOutside: true,
    transition: true,
    value: '',
    maxLength: Infinity,
    noNeedHideElements: ['jing-input--clear', 'jing-input--focus'],
    title: '鲸禧保安全键盘',
    showTitle: true,
};

export default memo(Keyboard);
