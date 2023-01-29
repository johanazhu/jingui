import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import mallblack from '../svg/mall_black.svg';

const MallBlack = (props: JqbIconProps) => {
    return <JqbIcon icon={mallblack} keepOriginColor {...props} />;
};

export default MallBlack;
