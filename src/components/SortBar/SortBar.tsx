import React, { FC } from 'react';
import classnames from 'classnames';
import SortBarItem from './Item';
import SortBarFilter from './Filter';
import { SortBarProps } from './PropType';


const SortBar:FC<SortBarProps> = props => {
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

    const classes = classnames('jing-sortbar', { 'jing-sortBar--sticky': isSticky });

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
