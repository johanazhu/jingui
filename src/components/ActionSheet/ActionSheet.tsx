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
        title,
        closeable,
        onCancel,
    } = props;
    const [isShow, setIsShow] = useState(visible);

    useEffect(() => {
        setIsShow(visible);
    }, [visible]);

    const classes = classnames(prefixCls, className);

    // const renderHeader = () => {
    //     if (!title) return null;
    //     return (
    //         <div className={`${prefixCls}__header`}>
    //             {title}
    //             {closeable && (
    //                 <IconClose
    //                     className={`${prefixCls}__clear`}
    //                     onClick={onCancel}
    //                 />
    //             )}
    //         </div>
    //     );
    // };

    return (
        <Popup
            // visible={visible}
            className={`${prefixCls}__wrapper`}
            position="bottom"
            // {...pick(props, sharedPopupProps)}
            onClose={onCancel}
            round
            {...props}
        >
            <div className={classes} style={style}>
                {/* {renderHeader()} */}
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
