import * as React from 'react';
import classnames from 'classnames';

import Group from './group';
import Clear from './clear';

const prefixCls = 'jing-input';

function Inner(props: any) {
    return (
        <>
            <Clear {...props} />
            <div className="group-suffix">{props.render()}</div>
        </>
    );
}

export default (props: any) => {
    const { className } = props;

    return (
        <Group className={classnames(`${prefixCls}__group-suffix`, className)}>
            <Inner {...props} className={''} />
        </Group>
    );
};
