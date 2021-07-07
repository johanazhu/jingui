import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import eyeclose from '../svg/eyeclose.svg';

const EyeClose = (props: JqbIconProps) => {
    return <JqbIcon icon={eyeclose} color="grey" {...props} />;
};

export default React.memo(EyeClose);
