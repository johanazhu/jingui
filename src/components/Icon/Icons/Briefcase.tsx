import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import briefcase from '../svg/briefcase.svg';

const Briefcase = (props: JqbIconProps) => {
    return <JqbIcon icon={briefcase} {...props} />;
};

export default React.memo(Briefcase);
