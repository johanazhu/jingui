import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import mall from '../svg/mall.svg';

const Mall = (props: JqbIconProps) => {
    return <JqbIcon icon={mall} keepOriginColor  {...props} />;
};

export default Mall;
