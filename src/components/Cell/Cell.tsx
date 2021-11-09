import React, { FC } from 'react';
import classnames from 'classnames';
import CellGroup from './Group';
import { IconArrow } from '../Icon';
import { CellType } from './PropType';

const Cell: CellType = (props) => {
    const {
        className,
        label,
        title,
        value,
        desc,
        icon,
        isLink,
        center,
        onClick,
    } = props;

    const prefixCls = 'jing-cell';

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--center`]: !!center,
    });

    return (
        <div className={classnames(classes)} onClick={onClick}>
            {icon && <span className={`${prefixCls}__icon`}>{icon}</span>}
            <div className={`${prefixCls}__title`}>
                <span>{title}</span>
                {label && <div className={`${prefixCls}__label`}>{label}</div>}
            </div>
            <div className={`${prefixCls}__value`}>
                <span>{value}</span>
                {desc && <div className={`${prefixCls}__desc`}>{desc}</div>}
            </div>
            {isLink && (
                <span className={`${prefixCls}__link`}>
                    <IconArrow size="sm" />
                </span>
            )}
        </div>
    );
};

Cell.Group = CellGroup;

export default Cell;
