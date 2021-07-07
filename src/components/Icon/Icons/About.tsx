import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import about from '../svg/about.svg';

const About = (props: JqbIconProps) => {
    return <JqbIcon icon={about} color="grey" {...props} />;
};

export default React.memo(About);
