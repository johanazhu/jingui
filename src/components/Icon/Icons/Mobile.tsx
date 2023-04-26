import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import mobile from '../svg/mobile.svg';

const Mobile = (props: JqbIconProps) => {
    return <JqbIcon icon={mobile} fill="#26a4a4" {...props} />;
};

export default React.memo(Mobile);
