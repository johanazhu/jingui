import React, { useEffect, useState, forwardRef } from 'react';
import classnames from 'classnames';

export interface TabItemProps {
    isActive: boolean; // 是否选中
    value: string;
    label: string; // 值
    selected: any; // 选中的Tab Array
    disabled?: boolean;
    className?: string;
    icon?: string;
    tagId?: string;
    style?: React.CSSProperties;
    onClick: () => void;
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

const TabItem = forwardRef((props: TabItemProps, ref: any) => {
    const {
        isActive,
        label,
        value,
        disabled,
        className,
        icon,
        style,
        onClick,
    } = props;

    // console.log('isActive', isActive)

    const oValue = useTabActive(value);
    const oDisabled = useTabDisabled(disabled);

    useEffect(() => {
        oValue.updateValue(value);
    }, [value]);

    useEffect(() => {
        oDisabled.updateValue(disabled);
    }, [disabled]);

    const cls = classnames('jing-tab__item', className, {
        'jing-tab__item-active': isActive,
        'jing-tab__item-disabled': oDisabled?.value,
    });
    return (
        <div
            ref={ref}
            className={cls}
            style={style}
            onClick={() => {
                if (disabled) {
                    return;
                }
                onClick();
            }}
            aria-selected={isActive}
        >
            {icon && <img src={icon} alt="" />}
            {label}
        </div>
    );
});

export default React.memo(TabItem);
