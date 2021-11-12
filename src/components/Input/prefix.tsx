import React, { FC, useRef } from 'react';
import classnames from 'classnames';
import Group from './group';
import Input from './base';
import { InputProps } from './PropType';

const prefixCls = 'jing-input';

const Inner: FC<InputProps> = (props) => {
    console.log('props.children', props.children);

    if (props.children !== 'undefined') {
        <>
            <div className={`${prefixCls}__group-prefix-left`}>
                {props.icon}
            </div>
            <Input {...props} />
        </>;
    }
    return (
        <>
            <div className={`${prefixCls}__group-prefix-left`}>
                {props.icon}
            </div>
            {props.children}
        </>
    );
};

export default (props: InputProps) => {
    const { className, style } = props;
    return (
        <Group
            className={classnames(`${prefixCls}__group-prefix`, className)}
            style={style}
        >
            {/* <Inner {...props} /> */}
            <div className={`${prefixCls}__group-prefix-left`}>
                {props.icon}
            </div>
            <Input {...props} />
        </Group>
    );
};
