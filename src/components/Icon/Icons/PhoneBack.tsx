import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import phoneback from '../svg/phoneback.svg';

const PhoneBack = (props: JqbIconProps) => {
    return <JqbIcon icon={phoneback} {...props} />;
};

export default React.memo(PhoneBack);
