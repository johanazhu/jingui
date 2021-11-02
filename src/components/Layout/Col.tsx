import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

export type spanSize =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24;
export interface ColProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    span: spanSize;
}

const Col: React.FC<ColProps> = (props) => {
    const { span, children, className, style } = props;

    const classes = classNames(className, 'jing-col', `jing-col--${span}`);

    return (
        <div className={classes} style={style}>
            {children}
        </div>
    );
};

export default React.memo(Col);
