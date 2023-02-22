import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import myblack from '../svg/my_black.svg';

const MyBlack = (props: JqbIconProps) => {
    return <JqbIcon icon={myblack}  {...props} />;
};

export default MyBlack;

