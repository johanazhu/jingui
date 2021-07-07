import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import code from '../svg/code.svg';

const Code = (props: JqbIconProps) => {
    return <JqbIcon icon={code} {...props} />;
};

export default React.memo(Code);
