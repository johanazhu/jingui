import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { CardBoxHeaderProps } from './PropType';

const prefixCls = 'jing-cardbox';

const CardBoxHeader: FC<CardBoxHeaderProps> = (props) => {
    const { children, className } = props;
    return (
        <div className={classnames(`${prefixCls}__header`, className)}>
            {children}
        </div>
    );
};

export default memo(CardBoxHeader);
