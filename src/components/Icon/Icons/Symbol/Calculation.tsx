import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import calculation from '../../svg/calculation.svg';

const Calculation = (props: JqbIconProps) => {
    return <JqbIcon icon={calculation} color="orange" {...props} />;
};

export default React.memo(Calculation);
