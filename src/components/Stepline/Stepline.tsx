import React, { FC } from 'react';
import SteplineItem from './SteplineItem';
import { SteplineType } from './PropType';

const prefixCls = 'jing-stepline';

const Stepline:SteplineType = (props) => {
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
    return <ul className={prefixCls}>{items}</ul>;
};

Stepline.Item = SteplineItem;

export default Stepline;
