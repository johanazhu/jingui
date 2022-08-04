import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import trash from '../svg/trash.svg';

const Trash = (props: JqbIconProps) => {
    return <JqbIcon icon={trash} {...props} />;
};

export default Trash;
