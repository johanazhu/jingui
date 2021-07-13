import * as React from 'react';
import classnames from 'classnames';

import Group from './group';
import { InputProps } from './PropType';

function Inner(props: InputProps) {
    return (
        <>
            <div className="jing-input__group-prefix-left">{props.icon}</div>
            {props.children}
        </>
    );
}

export default (props: InputProps) => {
    const { className, style } = props;
    return (
        <Group
            className={classnames('jing-input__group-prefix', className)}
            style={style}
        >
            <Inner {...props} />
        </Group>
    );
};
