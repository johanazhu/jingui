import React, { memo, FC, useState } from 'react';
import classnames from 'classnames';
import { SwitchProps } from './PropType';

const prefixCls = 'jing-switch';

const getChecked = (props: SwitchProps, defaultChecked: boolean) => {
    if (typeof props.checked !== 'undefined') {
        return props.checked;
    }
    if (typeof props.defaultChecked !== 'undefined') {
        return props.defaultChecked;
    }
    return defaultChecked;
};

const Switch: FC<SwitchProps> = (props) => {
    const { disabled, onChange, style, className } = props;

    const [status, setStatus] = useState<boolean>(getChecked(props, false));

    const handleChange = () => {
        if (disabled) {
            return;
        }
        setStatus(!status);
        onChange && onChange(status);
    };

    const classes = classnames(prefixCls, className, {
        [`${prefixCls}--disabled`]: disabled,
    });

    return (
        <span className={classes} style={style}>
            <input
                type="checkbox"
                disabled={disabled}
                checked={status}
                className={classnames(`${prefixCls}__input`)}
                value={status ? 'on' : 'off'}
                onChange={handleChange}
            />
        </span>
    );
};

export default memo(Switch);
