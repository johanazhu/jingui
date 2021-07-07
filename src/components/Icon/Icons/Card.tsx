import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import card from '../svg/card.svg';

const Card = (props: JqbIconProps) => {
    return <JqbIcon icon={card} {...props} />;
};

export default React.memo(Card);
