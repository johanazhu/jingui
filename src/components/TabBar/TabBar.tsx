import React, { cloneElement } from 'react';
import classnames from 'classnames';
import TabBarItem from './TabBarItem';
import { TabBarType } from './PropType';
import { isPromise, isFunction } from '@/utils';

const prefixCls = 'jing-tabbar';

const TabBar: TabBarType = (props) => {
    const {
        className,
        activeKey,
        defaultActiveKey,
        safeAreaInsetBottom,
        fixed,
        children,
        onChange,
        beforeChange,
    } = props;

    const onChildChange = (value: string | number) => {
        if (isFunction(beforeChange)) {
            let canClick = beforeChange(value);
            if (canClick) {
                canClick.then(() => {
                    if (typeof onChange === 'function') {
                        onChange(value);
                    }
                });
            }
            return;
        }

        if (isFunction(onChange)) {
            onChange(value);
        }
    };

    const getSelected = (index: number, itemKey: string | number) => {
        if (!activeKey) {
            if (!defaultActiveKey && index === 0) {
                return true;
            }
            return defaultActiveKey === itemKey;
        }
        return activeKey === itemKey;
    };

    const enableSafeArea = () => safeAreaInsetBottom ?? fixed;

    const items = React.Children.map(children, (element, index) => {
        if (!React.isValidElement(element)) return null;
        return cloneElement(element, {
            key: index,
            title: element.props.title,
            icon: element.props.icon,
            itemKey: element.props.itemKey || index,
            className: element.props.className,
            style: element.props.style,
            selected: getSelected(index, element.props.itemKey),
            onChange: () => onChildChange(element.props.itemKey),
        });
    });

    if (enableSafeArea()) {
        return (
            <div className={classnames(`${prefixCls}-container`)}>
                <div className={classnames(prefixCls, className)}>{items}</div>
                {/* ????????????????????????????????????????????????????????? */}
                <div className="jing-iphonex-extra-height" />
                {/* <div className="jing-safe-area-bottom" /> */}
            </div>
        );
    }

    return <div className={classnames(prefixCls, className)}>{items}</div>;
};

TabBar.Item = TabBarItem;

TabBar.defaultProps = {
    fixed: true,
    defaultActiveKey: 0,
};

export default TabBar;
