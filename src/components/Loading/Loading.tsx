import React, { FC } from 'react';
import classnames from 'classnames';
import { LoadingProps } from './PropType';

// 未完成
const Loading: FC<LoadingProps> = (props) => {
    const { size, className } = props;
    const prefixCls = 'jing-loading';

    return <div className={classnames(prefixCls, className)}></div>;
};

export default React.memo(Loading);
