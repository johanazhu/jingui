import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import subtraction from '../../svg/subtraction.svg';

const Subtraction = (props: JqbIconProps) => {
    return <JqbIcon icon={subtraction} {...props} />;
};

export default React.memo(Subtraction);
