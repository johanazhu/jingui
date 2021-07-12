import React from 'react';
import classnames from 'classnames';

// 具体到写到页面时再改进
// percent 百分比
// 虚线 实线
export interface TimeLineItemProps {
    header: React.ReactNode;
    footer: React.ReactNode;
    color?: string;
    dashed?: boolean;
    count?: number;
    percent?: string;
    showPercent?: boolean;
    i?: any;
    canShowColor?: boolean; // 不显示颜色标记
}

const TimelineItem: React.FC<TimeLineItemProps> = (props) => {
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

    const dotClass = classnames('jing-timeline-item__content', {
        'jing-timeline-item__content-dashed': dashed,
    });

    const stepClass = classnames('jing-timeline-item__step', {
        'jing-timeline-item__step-dashed': dashed,
    });
    // @ts-ignore
    const isShowColor =
        parseInt(percent) - `${count && i && (100 / count) * i}`;

    return (
        <li
            className={classnames('jing-timeline-item', {
                'jing-timeline-item-isShowPercent': showPercent,
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
            <div className="jing-timeline-item__header">{header}</div>
            <div className="jing-timeline-item__content-box">
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
            <div className="jing-timeline-item__footer">{footer}</div>
        </li>
    );
};

TimelineItem.defaultProps = {
    dashed: false,
    canShowColor: true,
};

export default React.memo(TimelineItem);
