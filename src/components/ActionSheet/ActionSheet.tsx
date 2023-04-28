import React, { useState, useEffect, FC } from 'react';
import { Popup } from '../Popup';
import Picker from '../Picker';
import Column from './Column';
import Header from './Header';
import { ActionSheetProps } from './PropType';

const prefixCls = 'jing-actionsheet';

const ActionSheet: FC<ActionSheetProps> = (props) => {
    const {
        tabSource,
        columns,
        onHeaderItemClick,
        onColumnItemClick,
        visible,
        title,
        onCancel,
    } = props;
    const [isShow, setIsShow] = useState(visible);

    useEffect(() => {
        setIsShow(visible);
    }, [visible]);

    return (
        // <Popup
        //             visible={showPopup8}
        //             closeable
        //             style={{ height: '30%' }}
        //             position="bottom"
        //             onClose={() => setShowPopup8(false)}
        //         />
        // <Popup
        //     visible={visible}
        //     position="bottom"
        //     onClose={() => setIsShow(false)}
        //     style={{ height: '60vh' }}
        // >

        // </Popup>
        // popup={{
        //     round: true,
        //   }}
        //   value={value}
        //   title='标题'
        //   columns={columns}
        //   onConfirm={setValue}
        <Picker
            title={title}
            columns={columns}
            // columns={normalColumns}
            // onConfirm={() => setShowPopup(false)}
            // onCancel={() => setShowPopup(false)}
            // onChange={(value: any, index: any) => {
            //     console.log('value', value);
            //     setCity(value);
            // }}
        >
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
                    columnSource={columns}
                    onClick={(currentItem) => {
                        onColumnItemClick(currentItem);
                    }}
                />
            </div>
        </Picker>
    );
};

ActionSheet.defaultProps = {
    visible: true,
};

export default ActionSheet;
