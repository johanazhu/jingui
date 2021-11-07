import React, { FC, useState, useEffect, memo } from 'react';
import {
    IconFilterDown,
    IconFilterEmty,
    IconFilterUp,
} from '../Icon';
import { SortBarItemProps } from './PropType';

const SortBarItem:FC<SortBarItemProps> = props => {
    const { name, status, onClick } = props;
    const [isStatus, setIsStatus] = useState(status);

    useEffect(() => {
        setIsStatus(status);
    }, [status]);

    const onHandleClick = () => {
        if (isStatus === '0' || isStatus === '2') {
            setIsStatus('1');
            onClick('1');
        } else if (isStatus === '1') {
            setIsStatus('2');
            onClick('2');
        }
    };

    return (
        <div className="jing-sortbar--item" onClick={onHandleClick}>
            {name}
            {isStatus === '0' && <IconFilterEmty size="sm" />}
            {isStatus === '1' && <IconFilterDown size="sm" />}
            {isStatus === '2' && <IconFilterUp size="sm" />}
        </div>
    );
};


export default memo(SortBarItem)