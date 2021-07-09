import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon/index';

export interface ListSelectProps {
    icon?: string;
    title: string;
    list: Array<ListSelectItemProps>;
    onSelected: (value: any, index: number) => void;
}

interface ListSelectItemProps {
    title: string;
    value: any;
    selected?: boolean;
}

function onSelect(
    setIsSelect: (bool: boolean) => void,
    onSelected: (value: any, index: number) => void,
    value: any,
    index: number,
) {
    console.log('选择');
    setIsSelect(true);
    if (typeof onSelected === 'function') {
        onSelected(value, index);
    }
}

const ListSelect = (props: ListSelectProps) => {
    const { icon, title, list, onSelected } = props;

    let listHasSelected = false;
    let defaultValue = 'none';
    for (let i = 0; i < list.length; i++) {
        if (list[i].selected === true) {
            defaultValue = list[i].value;
            listHasSelected = true;
            console.log('list[i].selected', list[i].selected);
            console.log('defaultValue', defaultValue);
            console.log('listHasSelected', listHasSelected);
        }
    }

    const [isSelect, setIsSelect] = useState(listHasSelected);

    console.log('isSelect', isSelect);

    const classes = classNames('ListSelect__content', {
        [`ListSelect__content_state_hasicon`]: icon !== undefined,
        [`ListSelect__content_state_on`]: isSelect === true,
    });

    return (
        <div className="ListSelect">
            {icon && (
                <span className="ListSelect__icon">
                    <Icon kind={icon} />
                </span>
            )}
            <span className={classes}>
                <select
                    className="ListSelect__content-select"
                    onChange={(e) => {
                        onSelect(
                            setIsSelect,
                            onSelected,
                            e.target.value,
                            e.target.selectedIndex - 1,
                        );
                    }}
                    defaultValue={defaultValue}
                >
                    <option
                        className="ListSelect__content-select-option ListSelect__content-select-option_type_title"
                        value="none"
                        disabled
                    >
                        {title}
                    </option>
                    {list.map((item: ListSelectItemProps, key: any) => (
                        <option
                            key={item.value + key}
                            className="ListSelect__content-select-option"
                            value={JSON.stringify(item.value)}
                        >
                            {item.title}
                        </option>
                    ))}
                </select>
            </span>
            <span className="ListSelect__link">
                <Icon kind="arrow" size="small" />
            </span>
        </div>
    );
};

ListSelect.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    list: PropTypes.array,
    onSelected: PropTypes.func,
};

export default React.memo(ListSelect);
