import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import phone from '../svg/phone.svg';

const Phone = (props: JqbIconProps) => {
    return <JqbIcon icon={phone} fill="#26a4a4" {...props} />;
};

export default Phone;
