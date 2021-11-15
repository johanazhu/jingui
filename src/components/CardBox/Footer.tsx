import React, { memo, FC } from 'react';
import classnames from 'classnames';
import { CardBoxFooterProps } from './PropType';


const prefixCls = 'jing-cardbox';

const CardBoxFooter: FC<CardBoxFooterProps> = (props) => {
    const { children, className } = props;
    return (
        <div className={classnames(`${prefixCls}__footer`, className)}>
            {children}
        </div>
    );
};

export default memo(CardBoxFooter);
