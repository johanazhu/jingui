import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import inputedit from '../svg/inputedit.svg';

const InputEdit = (props: JqbIconProps) => {
    return <JqbIcon icon={inputedit} fill="#26a4a4" {...props} />;
};

export default InputEdit;
