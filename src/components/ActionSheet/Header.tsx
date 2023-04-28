import React, { useState, useEffect, FC } from 'react';
import classnames from 'classnames';
import { ActionSheetHeaderProps, ActionSheetTabSourceProps } from './PropType';

const prefixCls = 'jing-actionsheet';

const Header: FC<ActionSheetHeaderProps> = (props) => {
    const { tabSource, onClick } = props;

    const [currentValue, setCurrentValue] = useState('请选择');
    useEffect(() => {
        if (tabSource) {
            const filterResult = tabSource.filter((item) => {
                return item.value === currentValue;
            });
            if (filterResult.length === 0) {
                setCurrentValue('请选择');
            }
        }
    }, [tabSource]);

    return (
        <div className={`${prefixCls}__Header`}>
            {tabSource &&
                tabSource.map((item: ActionSheetTabSourceProps) => {
                    return (
                        <div
                            className={classnames(`${prefixCls}__Header-item`, {
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
                className={classnames(`${prefixCls}__Header-item`, {
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
