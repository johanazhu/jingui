import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import back from '../svg/back.svg';

const Back = (props: JqbIconProps) => {
    return <JqbIcon icon={back} color="grey" {...props} />;
};

export default Back;
