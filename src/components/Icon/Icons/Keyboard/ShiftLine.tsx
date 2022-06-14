import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import keyboardShiftLine from '../../svg/keyboard-shift-line.svg';

const KeyboardShiftLine = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={keyboardShiftLine}
            color={props.color || 'black'}
            {...props}
        />
    );
};

export default React.memo(KeyboardShiftLine);
