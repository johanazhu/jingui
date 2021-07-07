import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import trash from '../svg/trash.svg';

const Trash = (props: JqbIconProps) => {
    return <JqbIcon icon={trash} {...props} />;
};

export default React.memo(Trash);
