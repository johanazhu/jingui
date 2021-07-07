import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import keyboardShiftLine from '../../svg/keyboard-shift-line.svg';

const KeyboardShiftLine = (props: JqbIconProps) => {
    return <JqbIcon icon={keyboardShiftLine} color="white" {...props} />;
};

export default React.memo(KeyboardShiftLine);
