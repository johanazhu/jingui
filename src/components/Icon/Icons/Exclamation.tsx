import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import exclamation from '../svg/exclamation.svg';

const Exclamation = (props: JqbIconProps) => {
    return <JqbIcon icon={exclamation} {...props} />;
};

export default React.memo(Exclamation);
