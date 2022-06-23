import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { ColProps } from './PropType';

const prefixCls = 'jing-col';

const Col: FC<ColProps> = (props) => {
    const { span, offset, children, className, style, onClick } = props;

    const classes = classnames(className, prefixCls, `${prefixCls}--${span}`, {
        [`${prefixCls}--offset-${offset}`]: !!offset,
    });

    return (
        <div className={classes} style={style} onClick={onClick}>
            {children}
        </div>
    );
};

export default memo(Col);
