import React, { FC, useState, useEffect, memo } from 'react';
import { IconFilterDown, IconFilterEmty, IconFilterUp } from '../Icon';
import { SortBarItemProps } from './PropType';

const prefixCls = 'jing-sortbar__item';

const Item: FC<SortBarItemProps> = (props) => {
    const { title, selected, onClick } = props;
    const [_status, setStatus] = useState('0');

    useEffect(() => {
        if (selected === false) {
            setStatus('0');
        }
    }, [selected]);

    const onHandleClick = () => {
        if (_status === '0' || _status === '2') {
            setStatus('1');
            onClick && onClick('1');
        } else if (_status === '1') {
            setStatus('2');
            onClick && onClick('2');
        }
    };

    return (
        <div className={`${prefixCls}`} onClick={onHandleClick}>
            {title}
            {_status === '0' && <IconFilterEmty size="sm" />}
            {_status === '1' && <IconFilterDown size="sm" />}
            {_status === '2' && <IconFilterUp size="sm" />}
        </div>
    );
};

export default memo(Item);
