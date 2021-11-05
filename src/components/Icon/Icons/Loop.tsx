import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import loop from '../svg/loop.svg';

const Loop = (props: JqbIconProps) => {
    return <JqbIcon icon={loop} {...props} />;
};

export default React.memo(Loop);
