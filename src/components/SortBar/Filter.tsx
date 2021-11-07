import React, { FC, memo } from 'react';
import classnames from 'classnames';
import {
    IconFilter,
} from '../Icon';
import { SortBarFilterProps } from './PropType';

const SortBarFilter:FC<SortBarFilterProps> = props => {
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


export default memo(SortBarFilter)