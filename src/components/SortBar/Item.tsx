import React, { FC, useState, useEffect, memo } from 'react';
import { IconFilterDown, IconFilterEmty, IconFilterUp } from '../Icon';
import { SortBarItemProps } from './PropType';

const prefixCls = 'jing-sortbar__item';

const Item: FC<SortBarItemProps> = (props) => {
    const { title, selected, onClick } = props;
    const [status, setStatus] = useState('0');

    useEffect(() => {
        if (selected === false) {
            setStatus('0');
        }
    }, [selected]);

    const onHandleClick = () => {
        if (status === '0' || status === '2') {
            setStatus('1');
            onClick && onClick('1');
        } else if (status === '1') {
            setStatus('2');
            onClick && onClick('2');
        }
    };

    return (
        <div className={`${prefixCls}`} onClick={onHandleClick}>
            {title}
            {status === '0' && <IconFilterEmty size="sm" />}
            {status === '1' && <IconFilterDown size="sm" />}
            {status === '2' && <IconFilterUp size="sm" />}
        </div>
    );
};

export default memo(Item);
