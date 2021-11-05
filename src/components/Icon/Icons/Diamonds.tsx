import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import diamonds from '../svg/diamonds.svg';

const Diamonds = (props: JqbIconProps) => {
    return <JqbIcon icon={diamonds} color="" {...props} />;
};

export default React.memo(Diamonds);
