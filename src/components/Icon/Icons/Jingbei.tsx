import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import jingbei from '../svg/jingbei.svg';

const Jingbei = (props: JqbIconProps) => {
    return <JqbIcon icon={jingbei} {...props} />;
};

export default React.memo(Jingbei);
