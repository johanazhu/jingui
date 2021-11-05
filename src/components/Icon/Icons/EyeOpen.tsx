import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import eyeopen from '../svg/eyeopen.svg';

const EyeOpen = (props: JqbIconProps) => {
    return <JqbIcon icon={eyeopen} color="grey" {...props} />;
};

export default React.memo(EyeOpen);
