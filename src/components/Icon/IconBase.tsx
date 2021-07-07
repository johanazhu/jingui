import * as React from 'react';

export interface IconbaseProps {
    svgClass?: string;
    icon?: any;
    color?: string;
    fill?: string;
    style?: any;
}

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
