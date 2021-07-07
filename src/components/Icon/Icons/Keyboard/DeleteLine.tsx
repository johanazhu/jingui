import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import keyboardDeleteLine from '../../svg/keyboard-delete-line.svg';

const KeyboardDeleteLine = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={keyboardDeleteLine}
            color={props.color || 'grey'}
            {...props}
        />
    );
};

export default React.memo(KeyboardDeleteLine);
