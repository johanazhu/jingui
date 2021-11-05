import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import keyboard from '../svg/keyboard.svg';

const Keyboard = (props: JqbIconProps) => {
    return <JqbIcon icon={keyboard} {...props} />;
};

export default React.memo(Keyboard);
