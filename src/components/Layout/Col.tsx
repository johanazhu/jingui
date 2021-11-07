import * as React from 'react';
import classNames from 'classnames';
import { ColProps } from './PropType';

const Col: React.FC<ColProps> = (props) => {
    const { span, children, className, style, onClick } = props;

    const classes = classNames(className, 'jing-col', `jing-col--${span}`);

    return (
        <div className={classes} style={style} onClick={onClick}>
            {children}
        </div>
    );
};

export default React.memo(Col);
