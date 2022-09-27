import React, { useState, useEffect, FC, memo } from 'react';
import classnames from 'classnames';
import Cell from '../Cell';
import { ListTitleProps } from './PropType';

const prefixCls = 'jing-input';

const Title: FC<ListTitleProps> = (props) => {
    const { leftText, rightText } = props;

    return <Cell />;
};

export default memo(Title);
