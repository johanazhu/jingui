import React, { CSSProperties, FC } from 'react';
import classnames from 'classnames';
import { MaskProps } from './PropType';


const Mask: FC<MaskProps> = (props) => {
    const { className, isTransparent, style, onClick } = props;

    const prefixCls = 'jing-mask';
    
    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--transparent`]: !isTransparent,
    });

    return (
        <div
            className={classes}
            style={style}
            onClick={onClick}
        />
    );
};

Mask.defaultProps = {
    isTransparent: false,
};


export default React.memo(Mask);
