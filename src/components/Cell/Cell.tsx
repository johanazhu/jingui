import React, { FC  } from 'react';
import classnames from 'classnames';
import { CellProps } from './PropType';


const Cell: FC<CellProps> = props => {
    const { className, label, title, value  } = props;

    const prefixCls = 'jing-cell';

    return (
        <div className={classnames(prefixCls, className)}>
            <div className={`${prefixCls}__title`}>
                {title}
                {label}
            </div>
            <div className={`${prefixCls}__value`}>
                {value}
            </div>
        </div>
    );
};

export default React.memo(Cell);
