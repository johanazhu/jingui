
import React, { useState, useEffect, CSSProperties, FC, useRef } from 'react';
import classnames from 'classnames';
import { ConnectFooterProps } from './PropType';

const prefixCls = 'jing-connectfooter';

const ConnectFooter: FC<ConnectFooterProps> = (props) => {
    const { left, right, className, children, style, onClickLeft, onClickRight } = props;

    const classes = classnames(className, prefixCls);

    const leftContent = () => left && <div className={`${prefixCls}__left`} onClick={onClickLeft}>{left}</div>
    const rightContent = () => right && <div className={`${prefixCls}__right`} onClick={onClickRight}>{right}</div>
    return (
        <div className={classes} style={style} >
            {leftContent()}
            {rightContent()}
            {!left && children}
        </div>
    );

};

export default ConnectFooter;


