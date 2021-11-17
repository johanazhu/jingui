import React, { CSSProperties, ReactNode, FC, memo } from 'react';
import type { MouseEvent } from 'react';
import classnames from 'classnames';
import Title from './TabsTitle';
import Content from './TabsContent';

export interface TabsProps {
    className?: string;
    style?: CSSProperties;
    title?: string;
    swipeable?: boolean;
    sticky?: boolean;
    ellipsis?: boolean; // 是否省略过长的标题文字
    animated?: boolean;
    swipeThreshold?: number; // 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 默认5
    children?: ReactNode;
    onClick?: (e: MouseEvent) => void;
    // active：下标
}

const prefixCls = 'jing-tabs';

const Tabs: FC<TabsProps> = (props) => {
    const {
        className,
        style,
        title,
        swipeable,
        sticky,
        ellipsis,
        animated,
        swipeThreshold,
        children,
        onClick,
    } = props;

    const count = React.Children.count(children);

    let scrollable;

    if (swipeThreshold) {
        scrollable = count > swipeThreshold || !ellipsis;
    }

    const classes = classnames(prefixCls, className, {
        // [`${prefixCls}--active`]: !!type,
    });

    const Nav = React.Children.map(children, (child: any) => {
        return <Title active={true} value="2" label="22" onClick={onClick} />;
    });

    const Wrap = (
        <div
            className={classnames(`${prefixCls}__wrap`, {
                [`${prefixCls}__wrap--scrollable`]: !!scrollable,
            })}
        >
            <div className={classnames(`${prefixCls}__nav`)}>{Nav}</div>
        </div>
    );

    return (
        <div className={classes} style={style}>
            {Wrap}
        </div>
    );
};

Tabs.defaultProps = {
    ellipsis: true,
    swipeThreshold: 5,
};

export default memo(Tabs);
