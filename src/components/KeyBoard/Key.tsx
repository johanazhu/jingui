import React, {
    FC,
    useEffect,
    memo,
    useState,
    TouchEvent,
    forwardRef,
    useRef,
} from 'react';
import classnames from 'classnames';
import { IconKeyboardDelete, IconKeyboardDeleteLine } from '../Icon';
import { KeyboardKeyProps } from './PropType';
import { stopPropagation } from '@/utils';
import { getCantActive } from './utils';

const MIN_DISTANCE = 10;

function getDirection(x: number, y: number) {
    if (x > y && x > MIN_DISTANCE) {
        return 'horizontal';
    }

    if (y > x && y > MIN_DISTANCE) {
        return 'vertical';
    }

    return '';
}

const prefixCls = 'jing-keyboard-key';

const Key = forwardRef<any, KeyboardKeyProps>(
    (props: KeyboardKeyProps, ref) => {
        const {
            className,
            type,
            text,
            color,
            active,
            touchStart,
            touchMove,
            touchEnd,
            onPress,
        } = props;

        const [isActive, setIsActive] = useState(false);
        const keyRef = useRef<HTMLDivElement>(null);
        const longPressRef = useRef<any>(null);
        const textRef = useRef<any>(text);

        const classes = classnames(prefixCls, className);

        useEffect(() => {
            keyRef?.current?.addEventListener(
                'touchstart',
                onHandleTouchStart,
                { passive: false },
            );

            return () => {
                keyRef?.current?.removeEventListener(
                    'touchstart',
                    onHandleTouchStart,
                );
            };
        }, []);

        useEffect(() => {
            textRef.current = text;
        }, [text]);

        const wrapperClass = classnames(`${prefixCls}__wrapper`, {
            [`${prefixCls}__wrapper-active`]: active && !getCantActive(type),
            [`${prefixCls}__wrapper-delete-active`]:
                isActive && type === 'delete',
            [`${prefixCls}__wrapper-special-active`]:
                isActive && getCantActive(type),
        });

        let startX = 0,
            startY = 0,
            deltaX = 0,
            deltaY = 0,
            offsetX = 0,
            offsetY = 0,
            direction = '0';

        const resetTouchStatus = () => {
            direction = '';
            deltaX = 0;
            deltaY = 0;
            offsetX = 0;
            offsetY = 0;
        };

        const dispatchValue = () => {
            onPress(text, type);
        };

        const onLongPressIn = () => {
            dispatchValue();
            longPressRef.current = setTimeout(() => {
                longPressRef.current = setInterval(() => {
                    dispatchValue();
                }, 150);
            }, 750);
        };

        const onLongPressOut = () => {
            clearTimeout(longPressRef.current);
            longPressRef.current = null;
        };

        const onHandleTouchStart = (event: Event) => {
            if (type === 'delete') {
                onLongPressIn();
            }
            touchStart?.(textRef.current);
            setIsActive(true);
            resetTouchStatus();
            // startX = event?.touches[0].clientX;
            // startY = event?.touches[0].clientY;
        };

        const onTouchMove = (event: TouchEvent) => {
            touchMove?.(event);
            const touch = event.touches[0];
            deltaX = touch.clientX - startX;
            deltaY = touch.clientY - startY;
            offsetX = Math.abs(deltaX);
            offsetY = Math.abs(deltaY);
            direction = direction || getDirection(offsetX, offsetY);
            if (direction) {
                setIsActive(false);
            }
        };

        const onTouchEnd = (event: TouchEvent) => {
            event.preventDefault();
            setIsActive(false);
            if (type === 'delete') {
                onLongPressOut();
            } else {
                dispatchValue();
            }
        };

        const renderText = () => {
            const isEmty = type === 'emty';
            const isDelete = type === 'delete';
            if (isDelete) {
                return (
                    <>
                        <IconKeyboardDelete
                            className={`${prefixCls}__delete-icon`}
                            style={{
                                display: isActive === true ? 'block' : 'none',
                            }}
                            color="black"
                            onClick={(e: any) => {
                                stopPropagation(e);
                            }}
                        />
                        <IconKeyboardDeleteLine
                            className={`${prefixCls}__delete-icon`}
                            style={{
                                display: isActive === true ? 'none' : 'block',
                            }}
                            color="black"
                            onClick={(e: any) => {
                                stopPropagation(e);
                            }}
                        />
                    </>
                );
            }

            if (isEmty) {
                return '';
            }

            return text;
        };

        return (
            <div
                className={wrapperClass}
                ref={ref}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onTouchCancel={onTouchEnd}
            >
                <div
                    role="button"
                    tabIndex={0}
                    className={classes}
                    ref={keyRef}
                >
                    {renderText()}
                </div>
            </div>
        );
    },
);

export default memo(Key);
