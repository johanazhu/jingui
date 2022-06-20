import React, { FC, memo, useMemo } from 'react';
import classnames from 'classnames';
import { LoadingProps } from './PropType';
import { addUnit, getSizeStyle } from '@/utils/format/unit';

const prefixCls = 'jing-loading';

const CircularIcon = () => (
    <svg className={classnames(`${prefixCls}__circular`)} viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" />
    </svg>
);

const SpinIcon = () => (
    <>
        {Array(12)
            .fill(null)
            .map((_, index) => (
                <i
                    key={index}
                    className={classnames(
                        `${prefixCls}__line`,
                        `${prefixCls}__line-${index + 1}`,
                    )}
                />
            ))}
    </>
);

const Loading: FC<LoadingProps> = (props: any) => {
    const {
        className,
        style,
        type,
        color,
        size,
        textSize,
        textColor,
        vertical,
        children,
    } = props;

    const iconStyle = useMemo(
        () => ({
            color,
            ...getSizeStyle(size),
        }),
        [color, size],
    );

    const _style = {
        color,
        size,
        ...style,
    };

    const classes = classnames(prefixCls, className, `${prefixCls}--${type}`, {
        [`${prefixCls}--vertical`]: !!vertical,
    });

    const renderText = () => {
        if (children) {
            return (
                <span
                    className={`${prefixCls}__text`}
                    style={{
                        fontSize: addUnit(textSize),
                        color: textColor ?? color,
                    }}
                >
                    {children}
                </span>
            );
        }
        return null;
    };

    return (
        <div className={classes} style={_style}>
            <span
                className={classnames(
                    `${prefixCls}__icon`,
                    `${prefixCls}__icon--${type}`,
                )}
                style={iconStyle}
            >
                {type === 'circular' ? <CircularIcon /> : <SpinIcon />}
            </span>
            {renderText()}
        </div>
    );
};

Loading.defaultProps = {
    type: 'circular',
    // color: '#c8c8c8',
    // size: '30px',
    // textSize: '14px',
    // textColor: '#c8c8c8',
    // vertical: false,
};

export default memo(Loading);
