import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import zanover from '../svg/zanover.svg';

const ZanOver = (props: JqbIconProps) => {
    return <JqbIcon icon={zanover} color="" {...props} />;
};

export default React.memo(ZanOver);
