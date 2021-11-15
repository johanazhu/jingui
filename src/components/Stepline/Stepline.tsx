import React from 'react';
import SteplineItem, { SteplineItemProps } from './SteplineItem';

export interface StepLineProps {
    className?: string;
    percent?: string;
    color?: string;
}

interface StepLineType extends React.FC<StepLineProps> {
    Item: React.FC<SteplineItemProps>;
}

const Stepline: StepLineType = (props) => {
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
    return <ul className="Stepline">{items}</ul>;
};

Stepline.Item = SteplineItem;

export default Stepline;
