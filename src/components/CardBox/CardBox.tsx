import React, { Children } from 'react';
import classnames from 'classnames';
import CardBoxHeader from './Header';
import CardBoxFooter from './Footer';
import { Row } from '../Layout';
import { CardBoxType } from './PropType';

const prefixCls = 'jing-cardbox';

const CardBox: CardBoxType = (props) => {
    const { children, className } = props;

    const cardChildren = Children.map(children, (child, i) => {
        return child;
    });

    return (
        <Row className={classnames(prefixCls, className)}>{cardChildren}</Row>
    );
};

CardBox.Header = CardBoxHeader;
CardBox.Footer = CardBoxFooter;

export default CardBox;
