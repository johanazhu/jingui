import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import radiook from '../svg/radiook.svg';

const RadioOk = (props: JqbIconProps) => {
    return <JqbIcon icon={radiook} {...props} />;
};

export default React.memo(RadioOk);
