import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import callcenter from '../svg/callcenter.svg';

const Callcenter = (props: JqbIconProps) => {
    return <JqbIcon icon={callcenter} color="grey" {...props} />;
};

export default React.memo(Callcenter);
