import React, { FC, cloneElement } from 'react';
import classnames from 'classnames';
import Sticky from '../Sticky';
import Filter from './Filter';
import { SortBarProps } from './PropType';

const prefixCls = 'jing-sortbar';

const SortBar: FC<SortBarProps> = (props) => {
    const {
        className,
        style,
        activeKey,
        type,
        title,
        sticky,
        children,
        onClick,
        onChange,
    } = props;

    const onHandleClick = (key: string, status: string) => {
        onChange && onChange(key, status);
    };

    const items = React.Children.map(children, (element, index) => {
        if (!React.isValidElement(element)) return null;

        return cloneElement(element, {
            key: index,
            // @ts-ignore
            title: element.props.title,
            itemKey: element.props.itemKey || index,
            selected: activeKey === element.props.itemKey,
            onClick: (status: string) =>
                onHandleClick(element.props.itemKey, status),
        });
    });

    const classes = classnames(prefixCls, className, `${prefixCls}--${type}`);

    const Content = (
        <div className={classes} style={style}>
            {items}
            <Filter title={title} onClick={onClick} />
        </div>
    );

    return <>{sticky ? <Sticky> {Content} </Sticky> : Content}</>;
};

SortBar.defaultProps = {
    sticky: true,
    type: 'normal',
};

export default SortBar;
