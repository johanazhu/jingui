import * as React from 'react';
import SteplineItem from './SteplineItem';
import { StepLineType } from './PropType';

const prefixCls = 'jing-stepline';

const Stepline:StepLineType = (props) => {
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
