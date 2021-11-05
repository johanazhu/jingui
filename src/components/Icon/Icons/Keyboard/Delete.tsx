import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import keyboardDelete from '../../svg/keyboard-delete.svg';

const KeyboardDelete = (props: JqbIconProps) => {
    return (
        <JqbIcon
            icon={keyboardDelete}
            color={props.color || 'block'}
            {...props}
        />
    );
};

export default React.memo(KeyboardDelete);
