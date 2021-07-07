import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import keyboardDelete from '../../svg/keyboard-delete.svg';

const KeyboardDelete = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={keyboardDelete}
            color={props.color || 'white'}
            {...props}
        />
    );
};

export default React.memo(KeyboardDelete);
