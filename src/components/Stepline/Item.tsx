import React, { FC } from 'react';
import { SteplineItemProps } from './PropType';

const prefixCls = 'jing-stepline--item';

const SteplineItem: FC<SteplineItemProps> = (props) => {
    const { children, footer, percent, color, type, count, i } = props;

    const distribute = (count && (100 / count) * (i + 1)) || 0;
    const percentValue = (percent && parseInt(percent)) || 0;
    const showColor = percentValue - distribute;

    console.log('distribute', distribute);

    const renderStep = () => {
        if (type === 'normal') {
            return (
                <div
                    className={`${prefixCls}__step`}
                    style={{ backgroundColor: showColor > 0 ? color : '' }}
                ></div>
            );
        } else {
            return (
                <div className={`${prefixCls}__ellipsisstep`}>
                    <div
                        style={{
                            backgroundColor: showColor > 0 ? color : '',
                            marginRight: count === 3 ? '1rem' : '0.5rem',
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: showColor > 0 ? color : '',
                            marginRight: count === 3 ? '1rem' : '0.5rem',
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: showColor > 0 ? color : '',
                        }}
                    ></div>
                </div>
            );
        }
    };

    return (
        <li className={prefixCls} style={{ width: `${count && 100 / count}%` }}>
            {renderStep()}
            <div
                className={`${prefixCls}__header`}
                style={{ backgroundColor: showColor > 0 ? color : '' }}
            >
                {children}
            </div>
            <div className={`${prefixCls}__footer`}>{footer}</div>
        </li>
    );
};

SteplineItem.defaultProps = {
    color: '#3264c8',
};

export default SteplineItem;
