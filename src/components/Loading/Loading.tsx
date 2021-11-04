import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

export interface LoadingProps {
    className?: string;
    type?: string;
    color?: string;
    size?: number | string;
}

const Loading = (props: LoadingProps) => {
    const { size, className } = props;
    const prefixCls = 'jing-loading';

    return <div className={classnames(prefixCls, className)}></div>;
};

export default React.memo(Loading);
