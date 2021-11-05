import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import cash from '../svg/cash.svg';

const Cash = (props: JqbIconProps) => {
    return <JqbIcon icon={cash} color="" {...props} />;
};

export default React.memo(Cash);
