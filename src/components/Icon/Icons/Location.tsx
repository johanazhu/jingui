import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import location from '../svg/location.svg';

const Location = (props: JqbIconProps) => {
    return <JqbIcon icon={location} {...props} />;
};

export default React.memo(Location);
