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
        titleStyle,
        titleClass,
        valueStyle,
        valueClass,
        labelStyle,
        labelClass,
        descStyle,
        descClass,
        linkStyle,
        linkClass,
        children,
        onClick,
    } = props;

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--center`]: !!center,
        [`${prefixCls}--clickable`]: !!isLink,
    });

    const renderIcon = () => {
        if (icon) {
            return React.cloneElement(props.icon as React.ReactElement, {
                className: `${prefixCls}__icon`,
            })
        }
        return null
    }

    const renderLabel = () => {
        const showLabel = isDef(label)

        if (showLabel) {
            return (
                <div className={classnames(`${prefixCls}__label`, labelClass)} style={labelStyle}>
                    {label}
                </div>
            )
        }
        return null
    }

    const renderRequire = () => {
        if (required) {
            return (
                <span className={`${prefixCls}__required`}>
                    *
                </span>
            )
        }
        return null
    }

    const renderTitle = () => {
        if (isDef(title)) {
            return (
                <div
                    className={classnames(`${prefixCls}__title`, titleClass)}
                    style={titleStyle}
                >
                    <span>{title}{renderRequire()}</span>
                    {renderLabel()}
                </div>
            )
        }
        return null
    }

    const renderDesc = () => {
        const showDesc = isDef(desc)

        if (showDesc) {
            return (
                <div className={classnames(`${prefixCls}__desc`, descClass)} style={descStyle}>
                    {desc}
                </div>
            )
        }
        return null
    }

    const renderValue = () => {
        const hasTitle = isDef(title)
        const hasValue = children || isDef(value)

        if (hasValue) {
            return (
                <div
                    className={classnames(`${prefixCls}__value`, valueClass, {
                        [`${prefixCls}__value--alone`]: !hasTitle,
                    })}
                    style={valueStyle}
                >
                    {children ? children : (
                        <>
                            <span>{value}</span>
                            {renderDesc()}
                        </>
                    )}
                </div>
            )
        }
        return null
    }


    const renderLink = () => {
        if (isLink) {
            return (
                <span className={classnames(`${prefixCls}__link`, linkClass)} style={linkStyle}>
                    <IconArrow size="sm" />
                </span>
            )
        }
        return null
    }

    return (
        <div className={classnames(classes)} style={style} onClick={onClick}>
            {renderIcon()}
            {renderTitle()}
            {renderValue()}
            {renderLink()}
        </div>
    );
};

Cell.defaultProps = {
    center: false,
    isLink: false,
    required: false,
};

export default Cell;
