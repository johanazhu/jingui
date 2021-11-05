import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import notepad2 from '../svg/notepad2.svg';

const Notepad2 = (props: JqbIconProps) => {
    return <JqbIcon icon={notepad2} color="" {...props} />;
};

export default React.memo(Notepad2);
