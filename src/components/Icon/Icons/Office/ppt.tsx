import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import ppt from '../../svg/ppt.svg';

const Ppt = (props: JqbIconProps) => {
    return <JqbIcon icon={ppt} color="" {...props} />;
};

export default React.memo(Ppt);
