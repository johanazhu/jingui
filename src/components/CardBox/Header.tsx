import * as React from 'react';
import classnames from 'classnames';
import { Col } from 'components';

export interface CardBoxHeaderProps {
    className?: string;
    children: React.ReactNode;
}

const CardBoxHeader: React.FC<CardBoxHeaderProps> = (props) => {
    const { children, className } = props;
    return (
        <div className={classnames('CardBox__header', className)}>
            {children}
        </div>
    );
};

export default React.memo(CardBoxHeader);
