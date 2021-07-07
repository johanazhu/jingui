import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import medal from '../svg/medal.svg';

const Medal = (props: JqbIconProps) => {
    return <JqbIcon icon={medal} {...props} />;
};

export default React.memo(Medal);
