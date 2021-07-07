import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import back from '../svg/back.svg';

const Back = (props: JqbIconProps) => {
    return <JqbIcon icon={back} color="grey" {...props} />;
};

export default React.memo(Back);
