import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import checkboxempty from '../svg/checkboxempty.svg';

const CheckboxEmpty = (props: JqbIconProps) => {
    return <JqbIcon icon={checkboxempty} color="grey" {...props} />;
};

export default CheckboxEmpty;
