import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import eyeclosetwo from '../svg/eyeclosetwo.svg';

const EyeCloseTwo = (props: JqbIconProps) => {
    return <JqbIcon icon={eyeclosetwo} color="grey" {...props} />;
};

export default React.memo(EyeCloseTwo);
