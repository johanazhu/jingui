import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import card from '../svg/card.svg';

const Card = (props: JqbIconProps) => {
    return <JqbIcon icon={card} {...props} />;
};

export default React.memo(Card);
