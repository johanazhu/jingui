import * as React from 'react';
import { IconbaseProps } from './PropType'

const IconBase = (props: IconbaseProps) => {
    const { svgClass, icon } = props;

    return React.createElement(icon, {
        role: 'img',
        key: `svg-${icon.name}`,
        className: svgClass,
        'aria-hidden': 'true',
    });
};

export default React.memo(IconBase);
