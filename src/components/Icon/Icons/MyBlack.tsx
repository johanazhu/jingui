import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import myblack from '../svg/my_black.svg';

const MyBlack = (props: JqbIconProps) => {
    return <JqbIcon icon={myblack} keepOriginColor {...props} />;
};

export default MyBlack;

