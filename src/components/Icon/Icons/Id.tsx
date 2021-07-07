import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import id from '../svg/id.svg';

const Id = (props: JqbIconProps) => {
    return <JqbIcon icon={id} {...props} />;
};

export default React.memo(Id);
