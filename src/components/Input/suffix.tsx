import * as React from 'react';
import classnames from 'classnames';
import Group from './group';
import Clear from './clear';
import { InputProps } from './PropType';

const prefixCls = 'jing-input';

export default (props: InputProps) => {
    const { className, style, icon } = props;

    return (
        <Group
            className={classnames(`${prefixCls}__group-suffix`, className)}
            style={style}
        >
            <Clear {...props} />
            <div className={`${prefixCls}__group-suffix-icon`}>{icon}</div>
        </Group>
    );
};
