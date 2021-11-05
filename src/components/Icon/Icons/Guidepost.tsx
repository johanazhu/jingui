import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import guidepost from '../svg/guidepost.svg';

const Guidepost = (props: JqbIconProps) => {
    return <JqbIcon icon={guidepost} {...props} />;
};

export default React.memo(Guidepost);
