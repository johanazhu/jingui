import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import inputedit from '../svg/inputedit.svg';

const InputEdit = (props: JqbIconProps) => {
    return <JqbIcon icon={inputedit} {...props} />;
};

export default React.memo(InputEdit);
