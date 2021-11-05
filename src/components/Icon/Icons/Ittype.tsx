import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import ittype from '../svg/ittype.svg';

const Ittype = (props: JqbIconProps) => {
    return <JqbIcon icon={ittype} color="" {...props} />;
};

export default React.memo(Ittype);
