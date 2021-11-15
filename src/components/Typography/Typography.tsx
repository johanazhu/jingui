import React, { FC } from 'react';
import classnames from 'classnames';
import { TypographyProps } from './PropType';

const prefixCls = 'jing-typography';

const Typography: FC<TypographyProps> = (props) => {
    const { children, className, innerHtml } = props;

    if (innerHtml) {
        return (
            <div
                className={classnames(prefixCls, className)}
                dangerouslySetInnerHTML={{ __html: innerHtml }}
            />
        );
    }

    return <div className={classnames(prefixCls, className)}>{children}</div>;
};

export default React.memo(Typography);
