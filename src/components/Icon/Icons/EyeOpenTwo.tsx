import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import eyeopentwo from '../svg/eyeopentwo.svg';

const EyeOpenTwo = (props: JqbIconProps) => {
    return <JqbIcon icon={eyeopentwo} color="grey" {...props} />;
};

export default EyeOpenTwo;
