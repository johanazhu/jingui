import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import authen from '../svg/authen.svg';

const Authen = (props: JqbIconProps) => {
    return <JqbIcon icon={authen} {...props} />;
};

export default React.memo(Authen);
