import React, { FC } from 'react';
import classnames from 'classnames';
import { PanelProps } from './PropType';

const prefixCls = 'jing-panel';

const Panel: FC<PanelProps> = (props) => {
    const { className, children, title, more } = props;

    return (
        <div className={classnames(prefixCls, className)}>
            <div className={`${prefixCls}__header`}>
                {title && (
                    <div className={`${prefixCls}__header-title`}>{title}</div>
                )}
                {more && (
                    <div className={`${prefixCls}__header-more`}>{more}</div>
                )}
            </div>
            <div className={`${prefixCls}__body`}>{children}</div>
        </div>
    );
};

export default React.memo(Panel);
