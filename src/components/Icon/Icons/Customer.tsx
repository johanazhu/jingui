import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import customer from '../svg/customer.svg';

const Customer = (props: JqbIconProps) => {
    return <JqbIcon icon={customer} color="orange" {...props} />;
};

export default React.memo(Customer);
