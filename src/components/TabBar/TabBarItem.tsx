import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { TabBarItemProps } from './PropType';

const prefixCls = 'jing-tabbar__item';

const TabBarItem: FC<TabBarItemProps> = (props) => {
    const {
        itemKey,
        style,
        pagePath,
        text,
        icon,
        selectedIcon,
        selected,
        onChange,
    } = props;

    const change = () => {
        if (typeof onChange === 'function') {
            onChange(pagePath);
        }
    };

    return (
        <div
            className={classnames(`${prefixCls}`, {
                [`${prefixCls}--active`]: selected,
            })}
            style={style}
            key={itemKey}
            onClick={change}
        >
            {icon && (
                <div className={`${prefixCls}--icon`}>
                    {selected ? selectedIcon : icon}
                </div>
            )}
            <div className={`${prefixCls}--title`}>{text}</div>
        </div>
    );
};

export default memo(TabBarItem);
