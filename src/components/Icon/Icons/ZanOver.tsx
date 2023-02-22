import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import zanover from '../svg/zanover.svg';

const ZanOver = (props: JqbIconProps) => {
    return <JqbIcon icon={zanover} fill="#de3813" {...props} />;
};

export default ZanOver;
