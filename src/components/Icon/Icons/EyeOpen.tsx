import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import eyeopen from '../svg/eyeopen.svg';

const EyeOpen = (props: JqbIconProps) => {
    return <JqbIcon icon={eyeopen} color="grey" {...props} />;
};

export default React.memo(EyeOpen);
