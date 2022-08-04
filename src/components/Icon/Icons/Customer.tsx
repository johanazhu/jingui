import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import customer from '../svg/customer.svg';

const Customer = (props: JqbIconProps) => {
    return <JqbIcon icon={customer} color="orange" {...props} />;
};

export default Customer;
