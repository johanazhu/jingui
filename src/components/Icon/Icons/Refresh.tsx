import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import refresh from '../svg/refresh.svg';

const Refresh = (props: JqbIconProps) => {
    return <JqbIcon icon={refresh} {...props} />;
};

export default React.memo(Refresh);
