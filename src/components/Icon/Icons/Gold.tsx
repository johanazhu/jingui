import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import gold from '../svg/gold.svg';

const Gold = (props: JqbIconProps) => {
    return <JqbIcon icon={gold} color="" {...props} />;
};

export default React.memo(Gold);
