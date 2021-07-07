import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import checkboxempty from '../svg/checkboxempty.svg';

const CheckboxEmpty = (props: JqbIconProps) => {
    return <JqbIcon icon={checkboxempty} color="grey" {...props} />;
};

export default React.memo(CheckboxEmpty);
