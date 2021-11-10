import React, { FC, memo, cloneElement, Children } from 'react';
import classnames from 'classnames';
import { ButtonGroupProps } from './PropType';

const prefixCls = 'jing-button-group';

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
    const { className, type, size, children } = props;

    const count = Children.count(children);

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--${type}`]: !!type,
        [`${prefixCls}--${count}`]: !!count,
    });

    const items = Children.map(children, (item: any) => {
        return cloneElement(item, {
            size,
            ...item.props,
        });
    });

    if (type === 'fixed-bottom') {
        return (
            <div className={classes}>
                <div className={`${prefixCls}__content`}>{items}</div>
                <div className="iphonex-extra-height" />
            </div>
        );
    }

    return <div className={classes}>{items}</div>;
};

ButtonGroup.defaultProps = {
    size: 'normal',
    type: 'default',
};

export default memo(ButtonGroup);
