import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import fz from '../svg/fz.svg';

const FZ = (props: JqbIconProps) => {
    return <JqbIcon icon={fz} color="grey" {...props} />;
};

export default React.memo(FZ);
