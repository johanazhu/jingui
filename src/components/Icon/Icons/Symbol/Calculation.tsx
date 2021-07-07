import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import calculation from '../../svg/calculation.svg';

const Calculation = (props: JqbIconProps) => {
    return <JqbIcon icon={calculation} color="orange" {...props} />;
};

export default React.memo(Calculation);
