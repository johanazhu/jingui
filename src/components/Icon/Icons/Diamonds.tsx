import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import diamonds from '../svg/diamonds.svg';

const Diamonds = (props: JqbIconProps) => {
    return <JqbIcon icon={diamonds} color="" {...props} />;
};

export default React.memo(Diamonds);
