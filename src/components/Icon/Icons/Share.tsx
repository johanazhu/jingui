import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import share from '../svg/share.svg';

const Share = (props: JqbIconProps) => {
    return <JqbIcon icon={share} fill="#26a4a4" {...props} />;
};

export default Share;
