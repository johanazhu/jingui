import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import info from '../svg/info.svg';

const Info = (props: JqbIconProps) => {
    return <JqbIcon icon={info} {...props} />;
};

export default React.memo(Info);
