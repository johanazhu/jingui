import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import radioempty from '../svg/radioempty.svg';

const RadioEmpty = (props: JqbIconProps) => {
    return <JqbIcon icon={radioempty} color="grey" {...props} />;
};

export default React.memo(RadioEmpty);
