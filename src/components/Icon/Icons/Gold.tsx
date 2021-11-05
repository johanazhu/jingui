import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import gold from '../svg/gold.svg';

const Gold = (props: JqbIconProps) => {
    return <JqbIcon icon={gold} color="" {...props} />;
};

export default React.memo(Gold);
