import React, { useEffect, ReactNode, FC, memo } from 'react';
import classnames from 'classnames';

export interface TabsContentProps {
    count?: number;
    animated?: boolean;
    swipeable?: boolean;
    currentIndex?: number;
    onChange?: () => void;
    children?: ReactNode;
}

const prefixCls = 'jing-tabs__content';

const Content: FC<TabsContentProps> = (props) => {
    const { count, animated, swipeable, currentIndex, onChange, children } =
        props;

    useEffect(() => {
        if (swipeable) {
            // 监听touchmove
        }
    }, []);

    return (
        <div
            className={classnames(prefixCls, {
                [`${prefixCls}--animated`]: !!animated,
            })}
        >
            {children}
        </div>
    );
};

export default memo(Content);
