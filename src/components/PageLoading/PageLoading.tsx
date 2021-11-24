import React, { useState, useEffect, FC } from 'react';
import classNames from 'classnames';
import { SPEED } from '@/utils';
import { PageLoadingProps } from './PropType';

const prefixCls = 'jing-pageloading';

const PageLoading: FC<PageLoadingProps> = (props) => {
    const { mask, loading } = props;

    // const [isShow, setIsShow] = useState(loading);

    const classes = classNames(prefixCls, {
        [`${prefixCls}--mask`]: !!mask,
        // [`${prefixCls}_${loading}`]: !!loading
    });

    return (
        <div className={classes}>
            <span></span>
        </div>
    );
};

PageLoading.defaultProps = {
    mask: false,
};

export default PageLoading;
