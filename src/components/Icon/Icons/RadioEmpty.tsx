import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import radioempty from '../svg/radioempty.svg';

const RadioEmpty = (props: JqbIconProps) => {
    return <JqbIcon icon={radioempty} color="grey" {...props} />;
};

export default React.memo(RadioEmpty);
