import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { TabBarItemProps } from './PropType';

const prefixCls = 'jing-tabbar__item';

const TabBarItem: FC<TabBarItemProps> = (props) => {
    const {
        itemKey,
        style,
        title,
        icon,
        activeIcon = icon,
        selected,
        onChange,
    } = props;

    const change = (value: string | number) => {
        if (typeof onChange === 'function') {
            onChange(value);
        }
    };

    return (
        <div
            className={classnames(`${prefixCls}`, {
                [`${prefixCls}--active`]: selected,
            })}
            style={style}
            onClick={() => change(itemKey)}
        >
            {icon && (
                <div className={`${prefixCls}--icon`}>
                    {selected ? activeIcon : icon}
                </div>
            )}
            {title && <div className={`${prefixCls}--title`}>{title}</div>}
        </div>
    );
};

export default memo(TabBarItem);
