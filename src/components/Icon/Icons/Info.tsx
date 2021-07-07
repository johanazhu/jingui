import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import info from '../svg/info.svg';

const Info = (props: JqbIconProps) => {
    return <JqbIcon icon={info} {...props} />;
};

export default React.memo(Info);
