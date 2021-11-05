import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import home from '../svg/home.svg';

const Home = (props: JqbIconProps) => {
    return <JqbIcon icon={home} {...props} />;
};

export default React.memo(Home);
