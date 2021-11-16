import React, { useState, useEffect, memo } from 'react';
import RegInput from './reg';
import { PhoneProps } from './PropType';

const filterValue = (val: string) => {
    const _reg = /^[0-9]*$/;
    let _val = '';
    if (_reg.test(val)) {
        _val = val;
    } else {
        _val = val.replace(/[^\d]/g, '');
    }
    return _val;
};

const Phone = (props: PhoneProps) => {
    const { value, reg } = props;

    const [_value, setValue] = useState(value);

    useEffect(() => {
        setValue(filterValue(value));
    }, [value]);

    return (
        <RegInput
            {...props}
            type="text"
            reg={reg || /^[1]([3-9])[0-9]{9}$/}
            value={_value}
        />
    );
};

export default memo(Phone);
