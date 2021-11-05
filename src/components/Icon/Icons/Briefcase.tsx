import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import briefcase from '../svg/briefcase.svg';

const Briefcase = (props: JqbIconProps) => {
    return <JqbIcon icon={briefcase} {...props} />;
};

export default React.memo(Briefcase);
