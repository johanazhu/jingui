import React, { FC } from 'react';
import classnames from 'classnames';
import Group from './group';
import Input from './base';
import { InputProps } from './PropType';

const prefixCls = 'jing-input';

export default (props: InputProps) => {
    const { className, style, icon } = props;
    return (
        <Group
            className={classnames(`${prefixCls}__group-prefix`, className)}
            style={style}
        >
            <div className={`${prefixCls}__group-prefix-icon`}>{icon}</div>
            <Input {...props} />
        </Group>
    );
};
