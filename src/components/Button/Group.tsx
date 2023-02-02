import React, { FC, cloneElement, Children } from 'react';
import classnames from 'classnames';
import ButtonContext from './Context';
import { ButtonGroupProps } from './PropType';

const prefixCls = 'jing-button-group';

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
    const { style, className, type, size, children } = props;

    const count = Children.count(children);

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--${type}`]: !!type,
        [`${prefixCls}--${count}`]: !!count,
    });

    const items = Children.map(children, (element, index) => {
        if (!React.isValidElement(element)) return null;

        return cloneElement(element, {
            key: index,
            size,
            ...element.props,
        });
    });

    if (type === 'fixed-bottom') {
        return (
            <div className={classes} style={style}>
                <div className={`${prefixCls}__content`}>{items}</div>
                <div className="iphonex-extra-height" />
            </div>
        );
    }

    return (
        <div className={classes} style={style}>
            <ButtonContext.Provider value={{ parent: props }}>
                {items}
            </ButtonContext.Provider>
        </div>
    );
};

ButtonGroup.defaultProps = {
    size: 'normal',
    type: 'default',
};

export default ButtonGroup;
