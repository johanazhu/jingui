import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import face from '../svg/face.svg';

const Face = (props: JqbIconProps) => {
    return <JqbIcon icon={face} {...props} />;
};

export default React.memo(Face);
