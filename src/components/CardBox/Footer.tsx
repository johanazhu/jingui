import * as React from 'react';
import classnames from 'classnames';
import { Col } from 'components';

export interface CardBoxFooterProps {
    className?: string;
    children: React.ReactChild;
}

const CardBoxFooter: React.FC<CardBoxFooterProps> = (props) => {
    const { children, className } = props;
    return (
        <div className={classnames('CardBox__footer', className)}>
            {children}
        </div>
    );
};

export default React.memo(CardBoxFooter);
