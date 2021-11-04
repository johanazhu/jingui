import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import {
    IconFilter,
    IconFilterDown,
    IconFilterEmty,
    IconFilterUp,
} from '../Icon';

// 是否开启滚动后悬浮到顶部
export interface SortBarProps {
    options: Array<any>;
    isSticky: Boolean;
    filterName: string;
    status: boolean;
    onItemHandleClick: (item: any) => void;
    onFilterHandleClick: () => void;
}

interface SortBarItemProps {
    name: string;
    status?: string;
    onClick: (isStatus: string) => void;
    // subscription: (isState: any, name: string) => void;
}

interface SortBarFilterProps {
    name: string;
    status: boolean;
    onClick: () => void;
}

const SortBarItem = (props: SortBarItemProps) => {
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
        <div className="SortBar__Item" onClick={onHandleClick}>
            {name}
            {isStatus === '0' && <IconFilterEmty size="sm" />}
            {isStatus === '1' && <IconFilterDown size="sm" />}
            {isStatus === '2' && <IconFilterUp size="sm" />}
        </div>
    );
};

const SortBarFilter = (props: SortBarFilterProps) => {
    const { name, status, onClick } = props;

    return (
        <div
            className={classnames('SortBar__Filter', {
                'am-color-blue': status,
            })}
            onClick={onClick}
        >
            {name}
            <IconFilter size="sm" color={status ? 'blue' : 'grey'} />
        </div>
    );
};

const SortBar = (props: SortBarProps) => {
    const {
        options,
        status,
        filterName,
        isSticky,
        onItemHandleClick,
        onFilterHandleClick,
    } = props;

    const onClick = (isStatus: string, item: any) => {
        options.forEach((option) => {
            option.status = '0';
        });
        item.status = isStatus;
        onItemHandleClick(item);
    };

    const classes = classnames('SortBar', { SortBar__sticky: isSticky });

    return (
        <div className={classes}>
            {options.map((item: any) => (
                <SortBarItem
                    key={item.id}
                    name={item.name}
                    status={item.status}
                    onClick={(isStatus: string) => onClick(isStatus, item)}
                />
            ))}
            <SortBarFilter
                name={filterName}
                status={status}
                onClick={onFilterHandleClick}
            />
        </div>
    );
};

SortBar.defaultProps = {
    isSticky: true,
};

export default React.memo(SortBar);
