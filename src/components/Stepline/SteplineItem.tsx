import  React, { FC, memo } from 'react';
import { SteplineItemProps } from './PropType';

const StepLineItem: FC<SteplineItemProps> = (props) => {
    const { header, footer, color, percent, count, i } = props;

    const prefixCls = 'jing-stepline--item';

    const canShowColor =
        // @ts-ignore
        parseInt(percent) - `${count && i && (100 / count) * (i + 1)}`;

    return (
        <li
            className={prefixCls}
            style={{ width: `${count && 100 / count}%` }}
        >
            <div
                className={`${prefixCls}__step`}
                style={{ backgroundColor: canShowColor > 0 ? color : '' }}
            ></div>
            <div
                className={`${prefixCls}__header`}
                style={{ backgroundColor: canShowColor > 0 ? color : '' }}
            >
                {header}
            </div>
            <div className={`${prefixCls}__footer`}>{footer}</div>
        </li>
    );
};

export default memo(StepLineItem);
