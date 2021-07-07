import React, { FC, useState, useEffect, forwardRef } from 'react';
import { createPortal } from 'react-dom';

export interface portalProps {
    container?: any;
    className?: any;
}

const Portal: FC<portalProps> = (props) => {
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

Portal.defaultProps = {
    className: '',
};

export default React.memo(Portal);
