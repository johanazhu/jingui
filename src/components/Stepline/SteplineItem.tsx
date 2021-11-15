import * as React from 'react';

export interface SteplineItemProps {
    header: React.ReactNode;
    footer: React.ReactNode;
    color?: string;
    percent?: string;
    count?: number;
    i?: any;
}

const StepLineItem: React.FC<SteplineItemProps> = (props) => {
    const { header, footer, color, percent, count, i } = props;

    // @ts-ignore
    const canShowColor =
        parseInt(percent) - `${count && i && (100 / count) * (i + 1)}`;

    return (
        <li
            className="Stepline-item"
            style={{ width: `${count && 100 / count}%` }}
        >
            <div
                className="Stepline-item__step"
                style={{ backgroundColor: canShowColor > 0 ? color : '' }}
            ></div>
            <div
                className="Stepline-item__header"
                style={{ backgroundColor: canShowColor > 0 ? color : '' }}
            >
                {header}
            </div>
            <div className="Stepline-item__footer">{footer}</div>
        </li>
    );
};

export default React.memo(StepLineItem);
