import React, { useState, FC } from 'react';
import classnames from 'classnames';
import { IconRight } from '../Icon';
import {
    ActionSheetColumnProps,
    ActionSheetColumnRangeProps,
} from './PropType';

const prefixCls = 'jing-actionsheet';

const Column: FC<ActionSheetColumnProps> = (props) => {
    const { columnSource, tabSource, onClick } = props;
    const headerSource = tabSource && tabSource.map((item: any) => item.value);

    const [currentItem, setCurrentItem] = useState('');

    return (
        <div className={`${prefixCls}__Column`}>
            {columnSource.map((item: ActionSheetColumnRangeProps, key: any) => {
                return (
                    <div
                        className={classnames(`${prefixCls}__Column-item`, {
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
                            <span>
                                <IconRight size="sm" />
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Column;
