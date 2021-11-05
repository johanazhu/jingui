import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import friends from '../svg/friends.svg';

const Friends = (props: JqbIconProps) => {
    return <JqbIcon icon={friends} {...props} />;
};

export default React.memo(Friends);
