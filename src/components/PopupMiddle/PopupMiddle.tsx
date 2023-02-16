import React, { memo, FC } from 'react';
import { Popup } from '../Popup';
import classnames from 'classnames';
import { IconClose } from '../Icon';


const prefixCls = 'jing-popupmiddle';

const PopupMiddle: FC = (props: any) => {
    const { className, style, visible, onClose, children } = props;

    const classes = classnames(className, prefixCls);

    return (
        <Popup visible={visible} style={{ width: '80%', height: '70vh', background: 'transparent' }}>
            <div className={classes} style={style}>
                {children}
            </div>
            <div className={`${prefixCls}__close`} onClick={onClose}>
                <IconClose color="grey" />
            </div>
        </Popup>
    );
};

export default memo(PopupMiddle);
