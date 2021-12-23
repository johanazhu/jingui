import React, { FC, memo } from 'react';
import classnames from 'classnames';
import { IconFilter } from '../Icon';
import { SortBarFilterProps } from './PropType';

const prefixCls = 'jing-sortbar__filter';

const Filter: FC<SortBarFilterProps> = (props) => {
    const { title, onClick } = props;

    return (
        <div className={classnames(`${prefixCls}`)} onClick={onClick}>
            {title}
            <IconFilter size="sm" />
        </div>
    );
};

Filter.defaultProps = {
    title: '筛选',
};

export default memo(Filter);
