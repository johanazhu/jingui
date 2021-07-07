import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import call from '../svg/call.svg';

const Call = (props: JqbIconProps) => {
    return <JqbIcon icon={call} {...props} />;
};

export default React.memo(Call);
