import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import phoneright from '../svg/phoneright.svg';

const Phoneright = (props: JqbIconProps) => {
    return <JqbIcon icon={phoneright} {...props} />;
};

export default React.memo(Phoneright);
