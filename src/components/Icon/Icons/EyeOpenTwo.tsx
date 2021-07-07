import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import eyeopentwo from '../svg/eyeopentwo.svg';

const EyeOpenTwo = (props: JqbIconProps) => {
    return <JqbIcon icon={eyeopentwo} color="grey" {...props} />;
};

export default React.memo(EyeOpenTwo);
