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
import { KeyboardProps, KeyType } from './PropType';
import Popup from '../Popup';
import { useUpdateEffect, useRefs } from '../hooks';
import { getRect as getElementRect } from '../hooks/useRect';
import { stopPropagation } from '@/utils';
import { getDefaultDisplay, getCantActive, themeToLayout } from './utils';

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
        layout,
        layoutName,
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
    const keyRef = useRef<any>([]);
    const valueRef = useRef<any>(value);
    const showRef = useRef<any>(visible);
    const [refs, setRefs, resetRefs] = useRefs();

    const [layoutNamePlus, setLayoutNamePlus] = useState(layoutName);
    const [keyboardHeaderHeight, setKeyboardHeaderHeight] =
        useState<number>(40);
    const [keyboardBodyHeight, setKeyboardBodyHeight] = useState<number>(220);
    const [activeElement, setActiveElement] = useState<any>('');

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}__layout-${layoutNamePlus}`]:
            theme.indexOf('letter') >= 0,
        [`${prefixCls}__layout-${theme}`]: theme.indexOf('letter') !== 0,
    });

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
        const currentPageX = touch.pageX;
        const currentPageY = touch.pageY;

        // refs.map()
        console.log('shift', keyRef.current);

        keyRef.current.forEach((element: any) => {
            // console.log('element', element.innerText)
            const eleRect = element?.getBoundingClientRect();
            console.log('ref eleRect', getElementRect(element));
            // console.log('eleRect', eleRect)
            // console.log('currentPageX', currentPageX)

            if (
                currentPageX > eleRect?.left &&
                currentPageX < eleRect?.right &&
                currentPageY > eleRect?.top &&
                currentPageY < eleRect?.bottom
            ) {
                console.log('这里', element.innerText);
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
                return renderLetter();
            case 'number':
            case 'price':
            case 'id':
                return renderOthers();
        }
    };

    const renderOthers = () => {
        let layout = theme && themeToLayout(theme);
        return null;

        // return layout?.map((row, rIndex) => {
        //     let rowArray = row.split(' ');

        //     return (
        //         <>
        //             {rowArray.map((item: string, index: string | number) => {
        //                 const buttonDisplayName = getButtonDisplayName(
        //                     item,
        //                     display,
        //                 );

        //                 let keyIndex = parseInt(
        //                     rIndex.toString() + index.toString(),
        //                 );

        //                 if (buttonDisplayName === 'emty') {
        //                     return (
        //                         <Key
        //                             /* @ts-ignore */
        //                             ref={setRefs(keyIndex)}
        //                             key={keyIndex}
        //                             text=""
        //                             type="emty"
        //                         />
        //                     );
        //                 }

        //                 return (
        //                     <Key
        //                         /* @ts-ignore */
        //                         ref={setRefs(keyIndex)}
        //                         key={keyIndex}
        //                         text={buttonDisplayName}
        //                         type={buttonDisplayName}
        //                         touchStart={(text: ReactNode | string) => {
        //                             console.log('key props', text);
        //                             setActiveElement(text);
        //                         }}
        //                         active={activeElement === buttonDisplayName}
        //                         onPress={onPress}
        //                     />
        //                 );
        //             })}
        //         </>
        //     );
        // });
    };

    const renderLetter = () =>
        layout?.[layoutNamePlus || 'default']?.map((row, rIndex) => {
            let rowArray = row.split(' ');
            const length = layout?.[layoutNamePlus || 'default'].length;
            // console.log('rowArray', rowArray)

            return (
                <div
                    className={`${prefixCls}__keys-row`}
                    style={{ height: 100 / length + '%' }}
                >
                    {rowArray.map((item, cIndex) => {
                        const buttonDisplayName = getButtonDisplayName(
                            item,
                            display,
                        );

                        let keyIndex = parseInt(
                            rIndex.toString() + cIndex.toString(),
                        );

                        // console.log('index', cIndex)
                        // console.log('column', index)

                        // console.log('keyIndex', keyIndex)

                        if (buttonDisplayName === 'shift') {
                            return (
                                <Key
                                    /* @ts-ignore */
                                    ref={(el) => (keyRef.current['shift'] = el)}
                                    // ref={setRefs(keyIndex)}
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
                                /* @ts-ignore */
                                ref={(el) => (keyRef.current[keyIndex] = el)}
                                // ref={setRefs(keyIndex)}
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
        });

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
                        {/* {renderKeys()} */}
                        {renderLetter()}
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

Keyboard.defaultProps = {
    theme: 'letter',
    layout: {
        default: [
            'q w e r t y u i o p',
            'a s d f g h j k l',
            '{shift} z x c v b n m {delete}',
            '{123.*!&} {space} {complete}',
        ],
        shift: [
            'Q W E R T Y U I O P',
            'A S D F G H J K L',
            '{shift} Z X C V B N M {delete}',
            '{123.*!&} {space} {complete}',
        ],
        symbol: [
            '1 2 3 4 5 6 7 8 9 0',
            '` ! @ # $ % ^ & *',
            '+ - \\ / [ ] { } {delete}',
            '{ABC} , . € £ ￥ {complete}',
        ],
    },
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
