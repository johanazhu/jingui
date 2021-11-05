import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import camera from '../svg/camera.svg';

const Camera = (props: JqbIconProps) => {
    return <JqbIcon icon={camera} {...props} />;
};

export default React.memo(Camera);
