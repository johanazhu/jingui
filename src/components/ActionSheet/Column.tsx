import React, { useState, useEffect, FC, useRef } from 'react';
import classnames from 'classnames';
import { IconRight } from '../Icon';
import {
    ActionSheetColumnProps,
    ActionSheetColumnRangeProps,
} from './PropType';

const prefixCls = 'jing-actionsheet__column';

const Column: FC<ActionSheetColumnProps> = (props) => {
    const columnRef = useRef<any>([]);
    const { defaultCurrent, columnSource, tabSource, onClick } = props;
    const headerSource = tabSource && tabSource.map((item: any) => item.value);

    const [currentItem, setCurrentItem] = useState('');

    useEffect(() => {
        columnRef?.current?.scroll({
            top: columnRef?.current.scrollHeight / 2 - 150,
        });
    }, []);

    useEffect(() => {
        defaultCurrent && setCurrentItem(defaultCurrent);
    }, [defaultCurrent]);

    return (
        <div className={`${prefixCls}`} ref={columnRef}>
            {columnSource.map((item: ActionSheetColumnRangeProps, key: any) => {
                return (
                    <div
                        className={classnames(`${prefixCls}-item`, {
                            on:
                                currentItem === item.value ||
                                (headerSource &&
                                    headerSource.indexOf(item.value) > -1),
                        })}
                        key={item.value + key}
                        onClick={() => {
                            // columnRef?.current.scroll({ top: 0 });
                            setCurrentItem(item.value);
                            onClick(item);
                        }}
                    >
                        {item.label}
                        {(currentItem === item.value ||
                            (headerSource &&
                                headerSource.indexOf(item.value) > -1)) && (
                            <span className="checkout">
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
