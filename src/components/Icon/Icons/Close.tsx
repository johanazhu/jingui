import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import close from '../svg/close.svg';

const Close = (props: JqbIconProps) => {
    return <JqbIcon icon={close} color="grey" {...props} />;
};

export default React.memo(Close);
