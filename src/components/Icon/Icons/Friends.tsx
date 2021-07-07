import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import friends from '../svg/friends.svg';

const Friends = (props: JqbIconProps) => {
    return <JqbIcon icon={friends} {...props} />;
};

export default React.memo(Friends);
