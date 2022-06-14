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
import { IconKeyboardShift, IconKeyboardShiftLine } from '../Icon';
import Key from './Key';
import { KeyboardProps, KeyType } from './PropType';
import Popup from '../Popup';
import { stopPropagation } from '@/utils';
import { getDefaultDisplay, getCantActive } from './utils';
import { useDebounceFn, useThrottleFn, useThrottle } from '../hooks';

const prefixCls = 'jing-keyboard';

const Keyboard: FC<KeyboardProps> = (props) => {
    const {
        className,
        layout,
        layoutName,
        titleLeft,
        title,
        theme,
        visible,
        closeButtonText,
        display,
        value = '',
        maxLength = Infinity,
        hideOnClickOutside,
        noNeedHideElements,
        onHandleClose,
        onHandleBlur,
        onHandleDelete,
        onHandleValue,
        onHandlePress,
        onHandleShiftCb,
        onHandleSpaceCb,
        onHandleDoneCb,
    } = props;

    const keyboardRef = useRef<HTMLDivElement>(null);
    const keyboardKeysRef = useRef<HTMLDivElement>(null);
    const keyRef = useRef<any>([]);
    const valueRef = useRef<any>(value);
    const showRef = useRef<any>(visible);

    const [layoutNamePlus, setLayoutNamePlus] = useState(layoutName);
    const [keyboardHeaderHeight, setKeyboardHeaderHeight] =
        useState<number>(40);
    const [keyboardBodyHeight, setKeyboardBodyHeight] = useState<number>(220);
    const [activeElement, setActiveElement] = useState<any>('');

    const classes = classnames(
        prefixCls,
        className,
        `${prefixCls}__layout-${layoutNamePlus}`,
    );

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
        // console.log('props.visible', show)
        // visible && onHandleBlur && onHandleBlur()
        showRef.current && onHandleBlur?.();
    };

    const onClose = () => {
        onHandleClose?.();
        onBlur();
    };

    const onPress = (text: ReactNode | string, type: KeyType | string) => {
        console.log('activeElement', activeElement);
        console.log('text', text);
        console.log('type', type);

        if (type === 'delete') {
            onHandleDelete?.();
            onHandleValue?.(
                valueRef.current.substring(0, valueRef.current.length - 1),
            );
        } else if (type === 'close') {
            onClose();
        } else if (type === 'shift') {
            const shiftToggle =
                layoutNamePlus === 'default' ? 'shift' : 'default';
            setLayoutNamePlus(shiftToggle);
            onHandleShiftCb?.();
        } else if (type === '123.*!&' || type === 'ABC') {
            const shiftToggle =
                layoutNamePlus === 'default' ? 'symbol' : 'default';
            setLayoutNamePlus(shiftToggle);
        } else if (type === '空格') {
            // type space
            onHandleSpaceCb?.();
        } else if (type === '完成') {
            // onHandleDone
            onHandleDoneCb?.();
        } else if (value.length < maxLength) {
            onHandlePress?.(activeElement || text, type);
            onHandleValue?.(value + (activeElement || text));
        }
    };

    const handleTouchMove = (event: TouchEvent) => {
        const touch = event.touches[0];
        const currentPageX = touch.pageX;
        const currentPageY = touch.pageY;

        keyRef.current.forEach((element: any) => {
            const eleRect = element?.getBoundingClientRect();

            if (
                currentPageX > eleRect?.left &&
                currentPageX < eleRect?.right &&
                currentPageY > eleRect?.top &&
                currentPageY < eleRect?.bottom
            ) {
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
        console.log('animation');
        visible ? 'show' : 'hide';
    };

    const genShiftButton = () => {
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

    const genKeys = () =>
        layout?.[layoutNamePlus || 'default']?.map((row, rIndex) => {
            let rowArray = row.split(' ');

            return (
                <>
                    {rowArray.map((item, index) => {
                        const buttonDisplayName = getButtonDisplayName(
                            item,
                            display,
                        );

                        let keyIndex = parseInt(
                            rIndex.toString() + index.toString(),
                        );

                        if (buttonDisplayName === 'shift') {
                            return (
                                <Key
                                    /* @ts-ignore */
                                    ref={(el) =>
                                        (keyRef.current[keyIndex] = el)
                                    }
                                    key={keyIndex}
                                    text={genShiftButton()}
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

    const genTitle = () => {
        const showClose = closeButtonText && theme === 'number';
        const showTitle = title || showClose || titleLeft;

        if (!showTitle) {
            return;
        }

        return (
            <div
                className={`${prefixCls}__header`}
                style={{ height: keyboardHeaderHeight }}
            >
                {titleLeft && (
                    <span className={`${prefixCls}__title-left`}>
                        {titleLeft}
                    </span>
                )}
                {title && <h2 className={`${prefixCls}__title`}>{title}</h2>}
                {showClose && (
                    <button
                        type="button"
                        className={`${prefixCls}__close`}
                        onClick={onClose}
                    >
                        {closeButtonText}
                    </button>
                )}
            </div>
        );
    };

    return (
        <Popup
            visible={visible}
            position="bottom"
            overlay={false}
            style={{
                overflowY: 'visible',
            }}
        >
            <div
                className={classes}
                ref={keyboardRef}
                style={{
                    height: keyboardBodyHeight,
                }}
                onAnimationEnd={onAnimationEnd}
            >
                {genTitle()}
                <div className={`${prefixCls}__body`}>
                    <div
                        className={`${prefixCls}__keys`}
                        ref={keyboardKeysRef}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {genKeys()}
                    </div>
                </div>
            </div>
        </Popup>
    );
};

Keyboard.defaultProps = {
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
    value: '',
    maxLength: Infinity,
    noNeedHideElements: ['jing-input--clear', 'jing-input--focus'],
};

export default memo(Keyboard);
