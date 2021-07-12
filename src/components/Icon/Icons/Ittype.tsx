import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import ittype from '../svg/ittype.svg';

const Ittype = (props: JqbIconProps) => {
    return <JqbIcon icon={ittype} color="" {...props} />;
};

export default React.memo(Ittype);
