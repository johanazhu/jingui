import React, { useState, useEffect, FC } from 'react';
import classnames from 'classnames';
import { Popup } from '../Popup';
import Picker from '../Picker';
import Column from './Column';
import Header from './Header';
import { ActionSheetProps } from './PropType';
import { IconClose } from '../Icon';
import classNames from 'classnames';

const prefixCls = 'jing-actionsheet';

const ActionSheet: FC<ActionSheetProps> = (props) => {
    const {
        style,
        className,
        tabSource,
        columns,
        onHeaderItemClick,
        onColumnItemClick,
        visible,
        defaultCurrent,
        onCancel,
    } = props;
    const [isShow, setIsShow] = useState(visible);

    useEffect(() => {
        setIsShow(visible);
    }, [visible]);

    const classes = classnames(prefixCls, className);

    return (
        <Popup
            className={`${prefixCls}__wrapper`}
            position="bottom"
            onClose={onCancel}
            round
            {...props}
        >
            <div className={classes} style={style}>
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
                    defaultCurrent={defaultCurrent}
                    tabSource={tabSource}
                    columnSource={columns}
                    onClick={(currentItem) => {
                        onColumnItemClick(currentItem);
                    }}
                />
            </div>
        </Popup>
    );
};

ActionSheet.defaultProps = {
    visible: true,
    closeable: true,
};

export default ActionSheet;
