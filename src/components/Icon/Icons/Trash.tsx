import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import trash from '../svg/trash.svg';

const Trash = (props: JqbIconProps) => {
    return <JqbIcon icon={trash} fill="#26a4a4" {...props} />;
};

export default Trash;
