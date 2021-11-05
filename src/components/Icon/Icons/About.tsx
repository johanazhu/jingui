import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import about from '../svg/about.svg';

const About = (props: JqbIconProps) => {
    return <JqbIcon icon={about} color="grey" {...props} />;
};

export default React.memo(About);
