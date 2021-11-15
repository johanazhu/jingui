import React, { useState } from 'react';
import classnames from 'classnames';
import { IconRight } from '../Icon';
import { AreaColumn, AreaColumnRangeProps } from './PropType'


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
                                <IconRight size="sm" />
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default React.memo(Column);
