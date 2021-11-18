import React, { useState, CSSProperties, ReactNode, FC, memo } from 'react';
import type { MouseEvent } from 'react';
import classnames from 'classnames';
import Title from './TabsTitle';
import Content from './TabsContent';
import classNames from 'classnames';

export interface TabsProps {
    className?: string;
    style?: CSSProperties;
    value?: number;
    swipeable?: boolean;
    sticky?: boolean;
    ellipsis?: boolean; // 是否省略过长的标题文字
    animated?: boolean;
    lineStyle?: CSSProperties;
    swipeThreshold?: number; // 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 默认5
    children?: ReactNode;
    onChange?: (index?: number) => void;
    // active：下标
}

// export default interface PropsType {
//     value?: number;
//     defaultValue?: number;
//     lineWidth?: string | number;
//     disabled?: boolean;
//     swipeable?: boolean;
//     scrollable?: boolean;
//     direction?: 'horizontal' | 'vertical';
//     onChange?: (index?: number) => void;
//   }

const prefixCls = 'jing-tabs';

const Tabs: FC<TabsProps> = (props) => {
    const {
        className,
        style,
        value,
        swipeable,
        sticky,
        ellipsis,
        animated,
        lineStyle,
        swipeThreshold,
        children,
        onChange,
    } = props;

    const [currentIndex, setCurrentIndex] = useState(0);

    const count = React.Children.count(children);

    let scrollable;

    if (swipeThreshold) {
        scrollable = count > swipeThreshold || !ellipsis;
    }

    const classes = classnames(prefixCls, className);

    const onHandleClick = (item: any, index: number) => {
        // const { value, disabled } = item;
        console.log('item', item);
        onChange && onChange(index);
    };

    // onClick(item, index) {
    //     const { title, disabled, computedName } = this.children[index];
    //     if (disabled) {
    //       this.$emit('disabled', computedName, title);
    //     } else {
    //       this.callBeforeChange(computedName, () => {
    //         this.setCurrentIndex(index);
    //         this.scrollToCurrentContent();
    //       });
    //       this.$emit('click', computedName, title);
    //       route(item.$router, item);
    //     }
    //   },

    // const setCurrentIndex = (currentIndex: number) => {

    // }

    // setCurrentIndex(currentIndex) {
    //     currentIndex = this.findAvailableTab(currentIndex);

    //     if (isDef(currentIndex) && currentIndex !== this.currentIndex) {
    //       const shouldEmitChange = this.currentIndex !== null;
    //       this.currentIndex = currentIndex;
    //       this.$emit('input', this.currentName);

    //       if (shouldEmitChange) {
    //         this.$emit(
    //           'change',
    //           this.currentName,
    //           this.children[currentIndex].title
    //         );
    //       }
    //     }
    //   },

    const Nav = React.Children.map(children, (item: any, index: number) => {
        console.log('item', item);
        return (
            <Title
                // isActive={index === this.currentIndex}
                active={item.active}
                img={item.img}
                value={item.value}
                disabled={item.disabled}
                className={item.titleClass}
                style={item.titleStyle}
                onClick={() => {
                    onHandleClick(item, index);
                }}
            />
        );
    });

    const Wrap = (
        <div
            className={classnames(`${prefixCls}__wrap`, {
                [`${prefixCls}__wrap--scrollable`]: !!scrollable,
            })}
        >
            <div className={classnames(`${prefixCls}__nav`)}>
                {Nav}
                <div
                    className={classNames(`${prefixCls}__line`)}
                    style={lineStyle}
                />
                {/* <div class={bem('line')} style={this.lineStyle} /> */}
            </div>
        </div>
    );

    return (
        <div className={classes} style={style}>
            {sticky ? (
                <div className={classnames(`${prefixCls}__sticky`)}>{Wrap}</div>
            ) : (
                Wrap
            )}
            <Content
                count={count}
                animated={animated}
                swipeable={swipeable}
                currentIndex={value}
                // selected={value === index}
                //  selected={value === index}
                // onChange={onChange}
            >
                {children}
            </Content>
            {/* <Content
                count={this.children.length}
                animated={animated}
                duration={this.duration}
                swipeable={this.swipeable}
                currentIndex={this.currentIndex}
                onChange={this.setCurrentIndex}
            >
                {this.slots()}
            </Content> */}
        </div>
    );
};

Tabs.defaultProps = {
    ellipsis: true,
    swipeThreshold: 5,
};

export default memo(Tabs);
