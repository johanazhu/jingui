import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import eyeclose from '../svg/eyeclose.svg';

const EyeClose = (props: JqbIconProps) => {
    return <JqbIcon icon={eyeclose} color="grey" {...props} />;
};

export default React.memo(EyeClose);
