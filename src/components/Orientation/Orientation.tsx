import React, { memo, FC } from 'react';
import Portal from '../Popup/Portal';
import classnames from 'classnames';
import { IconFZ } from '../Icon';


const prefixCls = 'jing-orientation';

const Orientation: FC = (props: any) => {
    const { className, style } = props;

    const classes = classnames(className, prefixCls);

    return (
        <Portal>
            <div className={classes} style={style}>
                <div className={`${prefixCls}__inner`}>
                    <div className={`${prefixCls}__inner-icon`}>
                        <IconFZ size="auto" />
                    </div>
                    <div className={`${prefixCls}__inner-desc`}>
                        为了更好的体验
                    </div>
                    <div className={`${prefixCls}__inner-desc`}>
                        请竖向使用您的手机
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default memo(Orientation);
