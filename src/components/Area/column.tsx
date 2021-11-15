import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { IconRight } from 'icons';
import { AreaTabSourceProps } from './header';

/**
 * 单个选择器
 * @param {columnSource} Array 单个选择器的数据源
 * @param {tabSource} Array<header的数据源>;
 * @param {rangeKey} string 单个选择器的key
 * @param {onClick} function 回调函数
 **/

export interface AreaColumn {
    columnSource: Array<AreaColumnRangeProps>;
    tabSource?: Array<AreaTabSourceProps>;
    rangeKey?: string;
    onClick: (item: AreaColumnRangeProps) => void;
}

export interface AreaColumnRangeProps {
    value: string;
    label: string;
}

const Column = (props: AreaColumn) => {
    const { columnSource, tabSource, onClick } = props;
    const headerSource = tabSource && tabSource.map((item: any) => item.value);

    const [currentItem, setCurrentItem] = useState('');

    return (
        <div className="Area__Column scroller" id="canmove">
            {columnSource.map((item: AreaColumnRangeProps, key: any) => {
                return (
                    <div
                        className={classnames('Area__Column-item', {
                            on:
                                currentItem === item.value ||
                                (headerSource &&
                                    headerSource.indexOf(item.value) > -1),
                        })}
                        key={item.value + key}
                        onClick={() => {
                            setCurrentItem(item.value);
                            onClick(item);
                        }}
                    >
                        {item.label}
                        {(currentItem === item.value ||
                            (headerSource &&
                                headerSource.indexOf(item.value) > -1)) && (
                            <span className="checkout">
                                <IconRight size="small" />
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

Column.propTypes = {
    columnSource: PropTypes.array,
    rangeKey: PropTypes.string,
    onClick: PropTypes.func,
};

export default React.memo(Column);
