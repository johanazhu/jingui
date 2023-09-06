import React, { memo, FC, useState, CSSProperties } from 'react';
import classnames from 'classnames';
import { SwitchProps } from './PropType';
import { addUnit } from '@/utils';

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
    const { disabled, onChange, className, size } = props;

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

    const style: CSSProperties = {
        fontSize: addUnit(size),
        // backgroundColor: isChecked ? activeColor : inactiveColor,
        ...props.style,
    };

    return (
        <div role="switch" tabIndex={0} className={classes}>
            <input
                style={style}
                type="checkbox"
                disabled={disabled}
                checked={status}
                className={classnames(`${prefixCls}__input`)}
                value={status ? 'on' : 'off'}
                onChange={handleChange}
            />
        </div>
    );
};

export default memo(Switch);
