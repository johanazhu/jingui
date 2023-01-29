import React, { useState, useEffect, FC } from 'react';
import { Popup } from '../Popup';
import Column from './column';
import Header from './header';
import { AreaProps } from './PropType';

const prefixCls = 'jing-area';

const Area: FC<AreaProps> = (props) => {
    const {
        tabSource,
        columnSource,
        onHeaderItemClick,
        onColumnItemClick,
        show,
        title,
        onCancel,
    } = props;
    const [isShow, setIsShow] = useState(show || false);

    useEffect(() => {
        setIsShow(show);
    }, [show]);

    return (
        <Popup visible={isShow}>
            <div className={prefixCls}>
                {tabSource && (
                    <Header
                        tabSource={tabSource}
                        onClick={(currentHeaderItem) => {
                            onHeaderItemClick &&
                                onHeaderItemClick(currentHeaderItem);
                        }}
                    />
                )}
                <Column
                    tabSource={tabSource}
                    columnSource={columnSource}
                    onClick={(currentItem) => {
                        onColumnItemClick(currentItem);
                    }}
                />
            </div>
        </Popup>
    );
};

Area.defaultProps = {
    show: true,
};

export default Area;
