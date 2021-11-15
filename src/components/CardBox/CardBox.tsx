import * as React from 'react';
import classnames from 'classnames';
import CardBoxHeader, { CardBoxHeaderProps } from './Header';
import CardBoxFooter, { CardBoxFooterProps } from './Footer';
import { Row } from 'components';

export interface CardBoxProps {
    className?: string;
}

interface CardBoxType extends React.FC<CardBoxProps> {
    Header: React.FC<CardBoxHeaderProps>;
    Footer: React.FC<CardBoxFooterProps>;
}

const CardBox: CardBoxType = (props) => {
    const { children, className } = props;

    const cardChildren = React.Children.map(children, (child, i) => {
        return child;
    });

    return (
        <Row className={classnames('CardBox', className)}>{cardChildren}</Row>
    );
};

CardBox.Header = CardBoxHeader;
CardBox.Footer = CardBoxFooter;

export default CardBox;
