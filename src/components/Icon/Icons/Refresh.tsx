import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import refresh from '../svg/refresh.svg';

const Refresh = (props: JqbIconProps) => {
    return <JqbIcon icon={refresh} fill="#26a4a4" {...props} />;
};

export default Refresh;
