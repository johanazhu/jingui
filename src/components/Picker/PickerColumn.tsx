import React, {
    useState,
    useEffect,
    memo,
    useRef,
    forwardRef,
    useMemo,
    useImperativeHandle,
} from 'react';
import classnames from 'classnames';
import { PickerColumnProps, PickerOption } from './PropType';

import { isObject, deepClone } from '@/utils';
import { range } from '@/utils/format/number';
import { useTouch, useSetState, useUpdateEffect } from '../hooks';
import useEventListener from '../hooks/use-event-listener';

const prefixCls = 'jing-picker-column';

const DEFAULT_DURATION = 200;

// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;

function getElementTranslateY(element: HTMLElement) {
    const style = window.getComputedStyle(element);
    const transform = style.transform || style.webkitTransform;
    const translateY = transform.slice(7, transform.length - 1).split(', ')[5];

    console.log('translateY', translateY);
    return Number(translateY);
}

function isOptionDisabled(option: PickerOption) {
    return isObject(option) && option.disabled;
}

const PickerColumn = forwardRef<{}, PickerColumnProps>((props, ref) => {
    const {
        className,
        children,
        values,
        defaultIndex = 0,
        disabled,
        valueKey,
        itemHeight = 44,
        visibleItemCount = 6,
        swipeDuration = 1000,
        initialOptions = [],
        onChange,
    } = props;

    // console.log('props', props)
    // console.log('initialOptions', initialOptions)

    const classes = classnames(className, prefixCls);

    // const [offset, setOffset] = useState(0);
    // const [duration, setDuration] = useState(0);
    // const [_options, _setOptions] = useState(deepClone(initialOptions))
    // const [emitChange, setEmitChange] = useState(false)
    // const [currentIndex, setCurrentIndex] = useState(defaultIndex)
    const touch = useTouch();

    const [state, updateState, stateRef] = useSetState({
        emitChange: false,
        index: defaultIndex,
        offset: 0,
        duration: 0,
        options: deepClone(initialOptions),
    });

    const wrapperRef = useRef<HTMLUListElement>(null);
    const pickerColumnRef = useRef<HTMLDivElement>(null);

    const moving = useRef<any>(false);
    const startOffset = useRef<any>(0);
    const touchStartTime = useRef<any>(0);
    const momentumOffset = useRef<any>(0);
    const transitionEndTrigger = useRef<any>(null);

    useEffect(() => {
        setIndex(defaultIndex);
    }, [defaultIndex]);

    useEffect(() => {
        if (state.emitChange && onChange) {
            onChange(stateRef.current.index);
        }
    }, [state.emitChange, state.index]);

    useUpdateEffect(() => {
        setOptions(initialOptions);
    }, [initialOptions]);

    const setOptions = (options: PickerOption[]) => {
        if (
            JSON.stringify(options) !== JSON.stringify(stateRef.current.options)
        ) {
            updateState({ options: deepClone(options) as [] });
            setIndex(defaultIndex);
        }
    };

    const count = useMemo(() => state.options.length, [state.options.length]);

    const baseOffset = useMemo(
        () => (itemHeight * (+visibleItemCount - 1)) / 2,
        [itemHeight, visibleItemCount],
    );

    const adjustIndex = (index: number) => {
        index = range(index, 0, count);

        for (let i = index; i < count; i++) {
            if (!isOptionDisabled(state.options[i])) return i;
        }
        for (let i = index - 1; i >= 0; i--) {
            if (!isOptionDisabled(state.options[i])) return i;
        }
    };

    const setIndex = (index: number, emitChange?: boolean) => {
        index = adjustIndex(index) || 0;

        const offset = -index * itemHeight;

        const trigger = () => {
            if (index !== state.index) {
                updateState({ index, emitChange });
            }
        };

        if (moving.current && offset !== state.offset) {
            transitionEndTrigger.current = trigger;
        } else {
            trigger();
        }

        updateState({ offset });
    };

    const onClickItem = (index: number) => {
        if (moving.current) {
            return;
        }

        transitionEndTrigger.current = null;
        updateState({ duration: DEFAULT_DURATION });
        setIndex(index, true);
    };

    const getOptionText = (option: PickerOption) => {
        if (isObject(option) && valueKey in option) {
            // @ts-ignore
            return option[valueKey];
        }
        return option;
    };

    const getIndexByOffset = (offset: number) =>
        range(Math.round(-offset / itemHeight), 0, count - 1);

    const momentum = (distance: number, duration: number) => {
        const speed = Math.abs(distance / duration);

        distance = state.offset + (speed / 0.003) * (distance < 0 ? -1 : 1);

        const index = getIndexByOffset(distance);
        updateState({ duration: +swipeDuration });
        setIndex(index, true);
    };

    const stopMomentum = () => {
        moving.current = false;
        updateState({ duration: 0 });

        if (transitionEndTrigger.current) {
            transitionEndTrigger?.current();
            transitionEndTrigger.current = null;
        }
    };

    const onHandleStart = (event: TouchEvent | React.TouchEvent) => {
        touch.start(event as TouchEvent);
        let { offset } = state;

        if (moving.current) {
            if (wrapperRef.current) {
                const translateY = getElementTranslateY(wrapperRef.current);
                offset = Math.min(0, translateY - baseOffset);
                startOffset.current = offset;
            }
        } else {
            startOffset.current = state.offset;
        }

        updateState({ duration: 0, offset });
        touchStartTime.current = Date.now();
        momentumOffset.current = startOffset.current;
        transitionEndTrigger.current = null;
    };

    const onHandleMove = (event: TouchEvent | React.TouchEvent) => {
        touch.move(event as TouchEvent);

        if (touch.isVertical()) {
            moving.current = true;
        }

        const offset = range(
            startOffset.current + touch.deltaY.current,
            -(count * itemHeight),
            itemHeight,
        );

        updateState({
            offset,
        });

        const now = Date.now();
        if (now - touchStartTime.current > MOMENTUM_LIMIT_TIME) {
            touchStartTime.current = now;
            momentumOffset.current = offset;
        }
    };

    const onHandleEnd = (event: TouchEvent | React.TouchEvent) => {
        // console.log('onHandleEnd offset', offset)
        const distance = state.offset - momentumOffset.current;
        const duration = Date.now() - touchStartTime.current;
        const allowMomentum =
            duration < MOMENTUM_LIMIT_TIME &&
            Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

        // console.log('onHandleEnd allowMomentum', allowMomentum)

        if (allowMomentum) {
            momentum(distance, duration);
            return;
        }

        const index = getIndexByOffset(state.offset);

        updateState({ duration: DEFAULT_DURATION });
        setIndex(index, true);

        // 用 setTimeout 跳过 touchstart 后发出的点击事件
        setTimeout(() => {
            moving.current = false;
        }, 0);
    };

    const getValue = () => {
        // console.log('getvalue', stateRef.current.options[stateRef.current.index])
        return stateRef.current.options[stateRef.current.index];
    };
    // useEventListener('touchmove', onHandleMove as EventListener, {
    //     target: pickerColumnRef.current,
    //     depends: [touch.deltaY],
    // });

    const setValue = (value: string) => {
        const { options } = stateRef.current;
        for (let i = 0; i < options.length; i += 1) {
            if ((getOptionText(options[i]) as unknown as string) === value) {
                return setIndex(i);
            }
        }
        return null;
    };

    useImperativeHandle(ref, () => ({
        state: stateRef.current,
        setIndex,
        getValue,
        setValue,
        setOptions,
        stopMomentum,
    }));

    const renderOptions = () => {
        const optionStyle = {
            height: `${itemHeight}px`,
        };

        return state.options.map((option: PickerOption, index: number) => {
            const text = getOptionText(option);
            const disabled = isOptionDisabled(option);
            const itemClass = classnames(className, `${prefixCls}__item`, {
                [`${prefixCls}__item--selected`]: index === state.index,
                [`${prefixCls}__item--disabled`]: disabled,
            });

            const data = {
                className: itemClass,
                style: optionStyle,
                role: 'button',
                tabIndex: disabled ? -1 : 0,
                onClick: () => onClickItem(index),
                key: index,
            };
            return (
                <li {...data}>
                    <div className="jing-ellipsis">{text}</div>
                </li>
            );
        });
    };

    return (
        <div
            className={classes}
            onTouchStart={onHandleStart}
            onTouchMove={onHandleMove}
            onTouchEnd={onHandleEnd}
            onTouchCancel={onHandleEnd}
            ref={pickerColumnRef}
        >
            <ul
                className={`${prefixCls}__wrapper`}
                ref={wrapperRef}
                style={{
                    transform: `translate3d(0, ${
                        state.offset + baseOffset
                    }px, 0)`,
                    transitionDuration: `${state.duration}ms`,
                    transitionProperty: state.duration ? 'all' : 'none',
                }}
                onTransitionEnd={stopMomentum}
            >
                {renderOptions()}
            </ul>
        </div>
    );
});

PickerColumn.defaultProps = {
    defaultIndex: 0,
    itemHeight: 44,
    visibleItemCount: 6,
    swipeDuration: 1000,
};

export default memo(PickerColumn);
