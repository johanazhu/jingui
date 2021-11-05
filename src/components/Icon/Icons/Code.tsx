import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import code from '../svg/code.svg';

const Code = (props: JqbIconProps) => {
    return <JqbIcon icon={code} {...props} />;
};

export default React.memo(Code);
