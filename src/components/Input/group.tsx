import * as React from 'react';
import classnames from 'classnames';
import { GroupProps } from './PropType';

const prefixCls = 'jing-input';

const Group = (props: GroupProps) => {
    const { className, children, style } = props;
    return (
        <div
            className={classnames(`${prefixCls}__group`, className)}
            style={style}
        >
            {children}
        </div>
    );
};

export default React.memo(Group);
