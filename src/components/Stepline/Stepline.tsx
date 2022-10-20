import React, { FC } from 'react';
import { SteplineProps } from './PropType';

const prefixCls = 'jing-stepline';

const Stepline: FC<SteplineProps> = (props) => {
    const { children, percent, color, type } = props;

    const count = React.Children.count(children);

    const items = React.Children.map(children, (child: any, i) => {
        const childProps = {
            ...child.props,
            count,
            percent,
            color,
            type,
            i,
        };

        return React.cloneElement(child, childProps);
    });

    return <ul className={prefixCls}>{items}</ul>;
};

Stepline.defaultProps = {
    type: 'normal',
    color: '#3264c8',
};

export default Stepline;
