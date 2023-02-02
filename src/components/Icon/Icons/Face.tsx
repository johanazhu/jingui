import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import face from '../svg/face.svg';

const Face = (props: JqbIconProps) => {
    return <JqbIcon icon={face} {...props} />;
};

export default Face;
