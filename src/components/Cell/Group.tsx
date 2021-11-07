import React, { FC  } from 'react';
import classnames from 'classnames';
import { CellProps } from './PropType';


const CellGroup = (props: any) => {
    const { className, children, inset, border  } = props;

    const prefixCls = 'jing-cell-group';


    return (
        <div className={classnames(prefixCls, className)}>
            {children}
        </div>
    );
};

export default React.memo(CellGroup);
