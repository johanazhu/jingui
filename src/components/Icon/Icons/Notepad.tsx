import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import notepad from '../svg/notepad.svg';

const Notepad = (props: JqbIconProps) => {
    return <JqbIcon icon={notepad} {...props} />;
};

export default React.memo(Notepad);
