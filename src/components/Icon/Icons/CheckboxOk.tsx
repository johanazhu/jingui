import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import checkboxok from '../svg/checkboxok.svg';

const CheckboxOk = (props: JqbIconProps) => {
    return <JqbIcon icon={checkboxok} {...props} />;
};

export default React.memo(CheckboxOk);
