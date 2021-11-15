import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { Picker } from 'components';
import Column, { AreaColumnRangeProps } from './column';
import Header, { AreaTabSourceProps } from './header';

/**
 * 从底部弹起的滚动选择器（高仿京东地址选择器）
 * @param {tabSource} Array 头部的数据源
 * @param {columnSource} Array 选择器的数据
 * @param {onHeaderItemClick} 头部中的点击回调
 * @param {onColumnItemClick} 选择器中的点击回调
 * @param {show} 是否显示
 * @param {title} 标题
 * @param {onHandleCancel} 点击空白处回调
 */
export interface AreaProps {
    tabSource?: Array<AreaTabSourceProps>;
    columnSource: Array<AreaColumnRangeProps>;
    onHeaderItemClick?: (item: AreaTabSourceProps) => void;
    onColumnItemClick: (item: AreaColumnRangeProps) => void;
    show: boolean;
    title: string;
    onHandleCancel?: () => void;
}

const Area = (props: AreaProps) => {
    const {
        tabSource,
        columnSource,
        onHeaderItemClick,
        onColumnItemClick,
        show,
        title,
        onHandleCancel,
    } = props;
    const [isShow, setIsShow] = useState(show);

    useEffect(() => {
        setIsShow(show);
    }, [show]);

    return (
        <Picker show={isShow} title={title} onHandleCancel={onHandleCancel}>
            <div className="Area">
                {tabSource && (
                    <Header
                        tabSource={tabSource}
                        onClick={(currentHeaderItem) => {
                            onHeaderItemClick &&
                                onHeaderItemClick(currentHeaderItem);
                        }}
                    />
                )}
                <Column
                    tabSource={tabSource}
                    columnSource={columnSource}
                    onClick={(currentItem) => {
                        onColumnItemClick(currentItem);
                    }}
                />
            </div>
        </Picker>
    );
};

Area.defaultProps = {
    show: true,
};

Area.propTypes = {
    tabSource: PropTypes.array,
    columnSource: PropTypes.array.isRequired,
    onHeaderItemClick: PropTypes.func,
    onColumnItemClick: PropTypes.func.isRequired,
    show: PropTypes.bool,
    title: PropTypes.string,
    onHandleCancel: PropTypes.func,
};

export default React.memo(Area);
