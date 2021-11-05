import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import keyboardShift from '../../svg/keyboard-shift.svg';

const KeyboardShift = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={keyboardShift}
            color={props.color || 'block'}
            {...props}
        />
    );
};

export default React.memo(KeyboardShift);
