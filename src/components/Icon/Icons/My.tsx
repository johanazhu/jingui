import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import my from '../svg/my.svg';

const My = (props: JqbIconProps) => {
    return <JqbIcon icon={my}  {...props} />;
};

export default My;
