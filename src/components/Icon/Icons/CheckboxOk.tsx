import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import checkboxok from '../svg/checkboxok.svg';

const CheckboxOk = (props: JqbIconProps) => {
    return <JqbIcon icon={checkboxok} fill="#26a4a4" {...props} />;
};

export default CheckboxOk;
