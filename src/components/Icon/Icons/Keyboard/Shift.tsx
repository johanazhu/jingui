import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import keyboardShift from '../../svg/keyboard-shift.svg';

const KeyboardShift = (props: JqbIconProps) => {
    return <JqbIcon icon={keyboardShift} color="white" {...props} />;
};

export default React.memo(KeyboardShift);
