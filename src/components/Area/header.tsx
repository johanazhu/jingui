import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * 选择器的头部
 * @param {tabSource} Array
 * @param {rangeKey} string
 * @param {onClick} function
 **/

export interface AreaHeaderArea {
    onClick?: (item: AreaTabSourceProps) => void;
    tabSource?: Array<AreaTabSourceProps>;
}

export interface AreaTabSourceProps {
    value: string;
    label: string;
}

const Header = (props: AreaHeaderArea) => {
    const { tabSource, onClick } = props;
    // console.log('props tabSource---------------', tabSource)

    const [currentValue, setCurrentValue] = useState('请选择');
    useEffect(() => {
        if (tabSource) {
            const filterResult = tabSource.filter((item) => {
                return item.value === currentValue;
            });
            // console.log('header的useEffect渲染', filterResult)
            if (filterResult.length === 0) {
                setCurrentValue('请选择');
            }
        }
    }, [tabSource]);

    return (
        <div className={classnames('Area__Header')}>
            {tabSource &&
                tabSource.map((item: AreaTabSourceProps) => {
                    return (
                        <div
                            className={classnames('Area__Header-item', {
                                on: currentValue === item.value,
                            })}
                            key={item.value}
                            onClick={() => {
                                setCurrentValue(item.value);
                                onClick && onClick(item);
                            }}
                        >
                            <span>{item.label}</span>
                        </div>
                    );
                })}
            <div
                className={classnames('Area__Header-item', {
                    on: currentValue === '请选择',
                })}
                onClick={() => {
                    setCurrentValue('请选择');
                    onClick && onClick({ value: '请选择', label: '请选择' });
                }}
            >
                <span>请选择</span>
            </div>
        </div>
    );
};

Header.propTypes = {
    tabSource: PropTypes.array,
    onClick: PropTypes.func,
};

export default React.memo(Header);
