import React, { useState, useEffect, memo } from 'react';
import classnames from 'classnames';
import { PickerProps } from './PropType';

const prefixCls = 'jing-picker';

const Picker = (props: PickerProps) => {
    const { className, show, title, height, onHandleCancel } = props;

    const classes = classnames(className, prefixCls);

    return <div className={classes}></div>;
};

Picker.defaultProps = {
    show: true,
};

export default memo(Picker);
