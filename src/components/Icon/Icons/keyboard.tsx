import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import keyboard from '../svg/keyboard.svg';

const Keyboard = (props: JqbIconProps) => {
    return <JqbIcon icon={keyboard} {...props} />;
};

export default React.memo(Keyboard);
