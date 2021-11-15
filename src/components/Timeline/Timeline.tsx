import React, { Children, cloneElement } from 'react';
import TimelineItem from './TimelineItem';
import { TimelineType } from './PropType';

const prefixCls = 'jing-timeline';

const Timeline: TimelineType = (props) => {
    const { children, percent, color } = props;

    const count = Children.count(children);

    const items = Children.map(children, (child: any, i) => {
        const childProps = {
            ...child.props,
            count,
            percent,
            color,
            i,
        };
        return cloneElement(child, childProps);
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

Timeline.Item = TimelineItem;

Timeline.defaultProps = {
    color: '#4666D8',
};

export default Timeline;
