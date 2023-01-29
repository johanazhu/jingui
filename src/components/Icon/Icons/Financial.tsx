import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import financial from '../svg/financial.svg';

const Financial = (props: JqbIconProps) => {
    return <JqbIcon icon={financial} color="grey" {...props} />;
};

export default Financial;
