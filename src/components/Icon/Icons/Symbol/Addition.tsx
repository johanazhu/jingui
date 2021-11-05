import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import addition from '../../svg/addition.svg';

const Addition = (props: JqbIconProps) => {
    return <JqbIcon icon={addition} {...props} />;
};

export default React.memo(Addition);
