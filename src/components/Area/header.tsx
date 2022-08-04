import React, { useState, useEffect, FC } from 'react';
import classnames from 'classnames';
import { AreaHeaderArea, AreaTabSourceProps } from './PropType';

const Header: FC<AreaHeaderArea> = (props) => {
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

export default Header;
