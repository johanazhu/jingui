import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { TimelineItemProps } from './PropType';

const prefixCls = 'jing-timeline--item';

const TimelineItem: FC<TimelineItemProps> = (props) => {
    const {
        header,
        footer,
        color,
        dashed,
        count,
        percent,
        showPercent,
        i,
        canShowColor,
    } = props;

    const dotClass = classnames(`${prefixCls}__content`, {
        [`${prefixCls}__content--dashed`]: dashed,
    });

    const stepClass = classnames(`${prefixCls}__step`, {
        [`${prefixCls}__step--dashed`]: dashed,
    });

    const isShowColor =
        // @ts-ignore
        parseInt(percent) - `${count && i && (100 / count) * i}`;

    return (
        <li
            className={classnames(prefixCls, {
                [`${prefixCls}--isShowPercent`]: showPercent,
            })}
            style={{ width: `${count && 100 / count}%` }}
        >
            <div
                className={stepClass}
                style={{
                    backgroundColor:
                        isShowColor > 0 && percent === '100%' ? color : '',
                }}
            ></div>
            <div className={`${prefixCls}__header`}>{header}</div>
            <div className={`${prefixCls}__contents`}>
                <div
                    className={dotClass}
                    style={{
                        backgroundColor:
                            isShowColor > 0 && canShowColor && !dashed
                                ? color
                                : '',
                        borderColor:
                            isShowColor > 0 && canShowColor ? color : '',
                    }}
                />
            </div>
            <div className={`${prefixCls}__footer`}>{footer}</div>
        </li>
    );
};

TimelineItem.defaultProps = {
    dashed: false,
    canShowColor: true,
};

export default memo(TimelineItem);
