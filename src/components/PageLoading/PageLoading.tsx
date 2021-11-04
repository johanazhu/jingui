import React, { useState, useEffect, FC } from 'react';
import classNames from 'classnames';
import { SPEED } from '../utils';

export interface LoadingProps {
    type: string;
    show: boolean | undefined;
}

const PageLoading: FC<LoadingProps> = (props) => {
    const { type, show } = props;

    const [isShow, setIsShow] = useState('false');

    const prefixCls = 'jing-pageloading';
    let timer;

    const classes = classNames(prefixCls, {
        [`${prefixCls}_mask`]: type !== 'noMask',
        [`${prefixCls}_noMask`]: type === 'noMask',
    });

    useEffect(() => {
        if (show === true && isShow === 'false') {
            setIsShow('true');
        } else if (show === false && isShow === 'true') {
            setIsShow('ready');
            timer = setTimeout(function () {
                setIsShow('false');
            }, SPEED);
        }
        return () => {
            timer = null;
        };
    }, []);

    return (
        <div className={`${classes} ${prefixCls}_${isShow}`}>
            <span></span>
        </div>
    );
};

PageLoading.defaultProps = {
    type: 'noMask',
};

export default PageLoading;
