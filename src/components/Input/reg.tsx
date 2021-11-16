import React, { useState, useEffect, FC } from 'react';
import classnames from 'classnames';
import Input from './base';
import { RegProps } from './PropType';

const prefixCls = 'jing-input';

const RegInput: FC<RegProps> = (props) => {
    const { value, className, reg, onChange } = props;

    const [_value, setValue] = useState(value);
    const [_isValid, setValid] = useState(true);

    useEffect(() => {
        setValue(value);
        setValid(reg.test(value));
    });

    return (
        <Input
            {...props}
            value={value}
            className={classnames(className, {
                [`${prefixCls}--error`]: !_isValid && _value,
            })}
            onChange={(res) => {
                setValue(res);
                onChange && onChange(res, _isValid);
            }}
        />
    );
};

RegInput.defaultProps = {
    reg: /[\s\S]*/,
};

export default React.memo(RegInput);
