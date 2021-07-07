import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import magezine from '../svg/magezine.svg';

const Magezine = (props: JqbIconProps) => {
    return <JqbIcon icon={magezine} {...props} />;
};

export default React.memo(Magezine);
