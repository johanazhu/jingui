import * as React from 'react';
import TimelineItem from './TimelineItem';
import { TimelineType } from './PropType';

const Timeline: TimelineType = (props) => {
    const { children, percent, color, hundred } = props;

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
        <div className="jing-timeline">
            <ul className="jing-timeline-items">{items}</ul>
            <div className="jing-timeline-percent">
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
    hundred: false,
};

export default Timeline;
