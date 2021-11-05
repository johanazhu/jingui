import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import ppt from '../../svg/ppt.svg';

const Ppt = (props: JqbIconProps) => {
    return <JqbIcon icon={ppt} color="" {...props} />;
};

export default React.memo(Ppt);
