import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import phoneright from '../svg/phoneright.svg';

const Phoneright = (props: JqbIconProps) => {
    return <JqbIcon icon={phoneright} {...props} />;
};

export default React.memo(Phoneright);
