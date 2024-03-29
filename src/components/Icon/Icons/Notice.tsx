import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import notice from '../svg/notice.svg';

const Notice = (props: JqbIconProps) => {
    return <JqbIcon icon={notice} fill="#de3813" {...props} />;
};

export default Notice;
