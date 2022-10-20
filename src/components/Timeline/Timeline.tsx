import React, { FC } from 'react';
import { TimelineProps } from './PropType';

const prefixCls = 'jing-timeline';

const Timeline: FC<TimelineProps> = (props) => {
    const { children, percent, color } = props;

    const count = React.Children.count(children);

    const items = React.Children.map(children, (child: any, i) => {
        const childProps = {
            ...child.props,
            count,
            percent,
            color,
            i,
        };
        return React.cloneElement(child, childProps);
    });

    return (
        <div className={prefixCls}>
            <ul className={`${prefixCls}__items`}>{items}</ul>
            <div className={`${prefixCls}--percent`}>
                {percent === '100%' ? (
                    <em style={{ width: percent }}></em>
                ) : (
                    <em style={{ backgroundColor: color, width: percent }}></em>
                )}
            </div>
        </div>
    );
};

Timeline.defaultProps = {
    color: '#4666D8',
};

export default Timeline;
