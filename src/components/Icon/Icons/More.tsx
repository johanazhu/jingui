import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import more from '../svg/more.svg';

const More = (props: JqbIconProps) => {
    return <JqbIcon icon={more} {...props} />;
};

export default React.memo(More);
