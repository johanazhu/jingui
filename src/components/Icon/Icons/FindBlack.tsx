import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import findblack from '../svg/find_black.svg';

const FindBlack = (props: JqbIconProps) => {
    return <JqbIcon icon={findblack} keepOriginColor {...props} />;
};

export default FindBlack;
