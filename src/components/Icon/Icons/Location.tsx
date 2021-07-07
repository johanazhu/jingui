import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import location from '../svg/location.svg';

const Location = (props: JqbIconProps) => {
    return <JqbIcon icon={location} {...props} />;
};

export default React.memo(Location);
