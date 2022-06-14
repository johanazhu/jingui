import * as React from 'react';
import classnames from 'classnames';
import CellGroup from './Group';
import { IconArrow } from '../Icon';
import { CellType } from './PropType';
import { isDef } from '@/utils';

const prefixCls = 'jing-cell';

const Cell: CellType = (props) => {
    const {
        className,
        label,
        title,
        value,
        desc,
        icon,
        center,
        isLink,
        required,
        onClick,
        onTouchStart,
    } = props;

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--center`]: !!center,
        [`${prefixCls}--clickable`]: !!isLink,
        [`${prefixCls}--required`]: !!required,
    });

    return (
        <div
            className={classnames(classes)}
            onClick={onClick}
            onTouchStart={onTouchStart}
        >
            {icon && <span className={`${prefixCls}__icon`}>{icon}</span>}
            {title && (
                <div className={`${prefixCls}__title`}>
                    <span>{title}</span>
                    {label && (
                        <div className={`${prefixCls}__label`}>{label}</div>
                    )}
                </div>
            )}
            {value && (
                <div
                    className={classnames(`${prefixCls}__value`, {
                        [`${prefixCls}__value--alone`]:
                            !isDef(title) && isDef(value),
                    })}
                >
                    <span>{value}</span>
                    {desc && <div className={`${prefixCls}__desc`}>{desc}</div>}
                </div>
            )}
            {isLink && (
                <span className={`${prefixCls}__link`}>
                    <IconArrow size="sm" />
                </span>
            )}
        </div>
    );
};

Cell.defaultProps = {
    center: false,
    isLink: false,
    required: false,
};

Cell.Group = CellGroup;

export default Cell;
