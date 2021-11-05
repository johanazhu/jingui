import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import notepad from '../svg/notepad.svg';

const Notepad = (props: JqbIconProps) => {
    return <JqbIcon icon={notepad} {...props} />;
};

export default React.memo(Notepad);
