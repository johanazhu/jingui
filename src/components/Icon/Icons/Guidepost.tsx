import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import guidepost from '../svg/guidepost.svg';

const Guidepost = (props: JqbIconProps) => {
    return <JqbIcon icon={guidepost} {...props} />;
};

export default React.memo(Guidepost);
