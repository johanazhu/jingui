import * as React from 'react';
import { IconbaseProps } from './PropType';

const IconBase = (props: IconbaseProps) => {
    const { svgClass, icon, fill } = props;

    return React.createElement(icon, {
        role: 'img',
        key: `svg-${icon.name}`,
        'aria-label': `svg-${icon.name}`,
        focusable: 'false',
        'data-icon': `svg-${icon.name}`,
        className: svgClass,
        'aria-hidden': 'true',
        fill,
    });
};

export default IconBase;
