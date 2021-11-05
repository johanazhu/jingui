import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import code2 from '../svg/code2.svg';

const Code2 = (props: JqbIconProps) => {
    return <JqbIcon icon={code2} {...props} />;
};

export default React.memo(Code2);
