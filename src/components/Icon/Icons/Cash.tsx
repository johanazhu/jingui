import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import cash from '../svg/cash.svg';

const Cash = (props: JqbIconProps) => {
    return <JqbIcon icon={cash} color="" {...props} />;
};

export default React.memo(Cash);
