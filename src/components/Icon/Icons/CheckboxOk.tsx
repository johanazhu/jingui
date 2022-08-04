import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import checkboxok from '../svg/checkboxok.svg';

const CheckboxOk = (props: JqbIconProps) => {
    return <JqbIcon icon={checkboxok} {...props} />;
};

export default CheckboxOk;
