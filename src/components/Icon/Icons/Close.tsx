import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import close from '../svg/close.svg';

const Close = (props: JqbIconProps) => {
    return <JqbIcon icon={close} color="grey" {...props} />;
};

export default Close;
