import React, { useEffect, useState, forwardRef, useRef, memo } from 'react';
import type { MouseEvent } from 'react';
import classnames from 'classnames';

export interface TabsTitleProps {
    active: boolean; // 是否选中
    value: string; // 值
    disabled?: boolean;
    className?: string;
    img?: string;
    tagId?: string;
    style?: React.CSSProperties;
    onClick?: (e: MouseEvent) => void;
}

export interface TabsTitleRef {
    scrollTo: (index: string) => void;
}

function useTabActive(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const updateValue = (res: string) => {
        setValue(res);
    };
    return { value, updateValue };
}

function useTabDisabled(initialValue: boolean | undefined) {
    const [value, setValue] = useState(initialValue);

    const updateValue = (res: boolean | undefined) => {
        setValue(res);
    };
    return { value, updateValue };
}

const prefixCls = 'jing-tab';

const Title = forwardRef((props: TabsTitleProps, ref: any) => {
    const { active, img, value, disabled, className, style, onClick } = props;

    const oValue = useTabActive(value);
    const oDisabled = useTabDisabled(disabled);

    useEffect(() => {
        oValue.updateValue(value);
    }, [value]);

    useEffect(() => {
        oDisabled.updateValue(disabled);
    }, [disabled]);

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--active`]: active,
        [`${prefixCls}--disabled`]: oDisabled?.value,
    });

    return (
        <div
            ref={ref}
            className={classes}
            style={style}
            onClick={onClick}
            aria-selected={active}
        >
            {img && <img src={img} alt="" />}
            {oValue.value}
        </div>
    );
});

export default memo(Title);
