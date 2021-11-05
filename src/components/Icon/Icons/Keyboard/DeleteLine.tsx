import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
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
