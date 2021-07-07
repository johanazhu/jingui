import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import refresh from '../svg/refresh.svg';

const Refresh = (props: JqbIconProps) => {
    return <JqbIcon icon={refresh} {...props} />;
};

export default React.memo(Refresh);
