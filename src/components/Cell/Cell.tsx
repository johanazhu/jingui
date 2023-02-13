import React, { FC } from 'react';
import classnames from 'classnames';
import CellGroup from './Group';
import { IconArrow } from '../Icon';
import { CellProps } from './PropType';
import { isDef } from '@/utils';

const prefixCls = 'jing-cell';

const Cell: FC<CellProps> = (props) => {
    const {
        className,
        style,
        label,
        title,
        value,
        desc,
        icon,
        center,
        isLink,
        required,
        onClick,
    } = props;

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--center`]: !!center,
        [`${prefixCls}--clickable`]: !!isLink,
        [`${prefixCls}--required`]: !!required,
    });

    return (
        <div className={classnames(classes)} style={style} onClick={onClick}>
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

export default Cell;
