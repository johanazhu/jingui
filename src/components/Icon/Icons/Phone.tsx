import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import phone from '../svg/phone.svg';

const Phone = (props: JqbIconProps) => {
    return <JqbIcon icon={phone} {...props} />;
};

export default React.memo(Phone);
