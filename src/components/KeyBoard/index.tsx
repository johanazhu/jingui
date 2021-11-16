import React, { TouchEvent } from 'react';
import classnames from 'classnames';
import Number from './Number';
import Price from './Price';
import IdCard from './IdCard';
import Letter from './Letter';
import Symbol from './Symbol';
import Header from './Header';
import { KeyBoardProps } from './PropType';

export default class extends React.PureComponent<KeyBoardProps> {
    static Number = Number;
    static Price = Price;
    static IdCard = IdCard;
    static Letter = Letter;
    static Symbol = Symbol;
    static Header = Header;

    render() {
        const { className, style } = this.props;
        return (
            <div
                className={classnames('jing-keyBoard scroller', className)}
                style={style}
            >
                {this.props.children}
            </div>
        );
    }
}
