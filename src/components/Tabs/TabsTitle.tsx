import React, { useEffect, useState, forwardRef, useRef, memo } from 'react';
import classnames from 'classnames';
import { TabsTitleProps } from './PropType';

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
    const { active, img, value, disabled, scrollable, onClick } = props;

    const oValue = useTabActive(value);
    const oDisabled = useTabDisabled(disabled);

    useEffect(() => {
        oValue.updateValue(value);
    }, [value]);

    useEffect(() => {
        oDisabled.updateValue(disabled);
    }, [disabled]);

    const classes = classnames(prefixCls, {
        [`${prefixCls}--img`]: !!img,
        [`${prefixCls}--active`]: active,
        [`${prefixCls}--disabled`]: oDisabled?.value,
    });

    const spanclasses = classnames(`${prefixCls}__text`, {
        [`${prefixCls}__text--ellipsis`]: !scrollable,
    });

    return (
        <div
            ref={ref}
            className={classes}
            onClick={onClick}
            aria-selected={active}
        >
            {img && <img className={`${prefixCls}__img`} src={img} alt="" />}
            <span className={spanclasses}>{oValue.value}</span>
        </div>
    );
});

export default memo(Title);
