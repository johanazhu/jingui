import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

export interface ListButtonProps {
    title: string;
    desc?: string;
    buttonArray: Array<ButtonItemProps>;
}

export interface ButtonItemProps {
    name: string;
    color: any;
    primary: boolean;
    onClick?: () => void;
}

const ListButton = (props: ListButtonProps) => {
    const { title, desc, buttonArray } = props;

    return (
        <div className="jing-list-button">
            <span
                className={classNames('jing-list-button__content')}
                style={{ marginRight: 3.2 * buttonArray.length + 0.5 + 'rem' }}
            >
                <span className="ListButton__content-title">{title}</span>
                {!!desc ? (
                    <span className="ListButton__content-desc">{desc}</span>
                ) : (
                    ''
                )}
            </span>
            <span
                className="ListButton__btn"
                style={{ width: 3.2 * buttonArray.length + 'rem' }}
            >
                <ButtonGroup>
                    {buttonArray.map((item: ButtonItemProps) => (
                        <Button
                            key={item.name}
                            color={item.color}
                            onClick={item.onClick}
                        >
                            {item.name}
                        </Button>
                    ))}
                </ButtonGroup>
            </span>
        </div>
    );
};

ListButton.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    buttonArray: PropTypes.array,
};

export default React.memo(ListButton);
