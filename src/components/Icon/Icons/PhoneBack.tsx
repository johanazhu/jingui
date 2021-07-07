import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import phoneback from '../svg/phoneback.svg';

const PhoneBack = (props: JqbIconProps) => {
    return <JqbIcon icon={phoneback} {...props} />;
};

export default React.memo(PhoneBack);
