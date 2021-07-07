import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import jingbei from '../svg/jingbei.svg';

const Jingbei = (props: JqbIconProps) => {
    return <JqbIcon icon={jingbei} {...props} />;
};

export default React.memo(Jingbei);
