import React, { FC, useState, useEffect, memo } from 'react';
import { createPortal } from 'react-dom';
import { PortalProps } from './PropType';

const Portal: FC<PortalProps> = (props) => {
    const { children, container, className } = props;

    const [containerEl] = useState(() => {
        const el = document.createElement('div');
        el.className += `jing-portal__container ${className}`;
        return el;
    });

    useEffect(() => {
        document.body.appendChild(container || containerEl);

        return () => {
            document.body.removeChild(containerEl);
        };
    }, []);

    return createPortal(children, containerEl);
};

export default memo(Portal);
