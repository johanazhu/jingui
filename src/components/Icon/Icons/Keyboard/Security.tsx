import * as React from 'react';
import JqbIcon from '../../JqbIcon';
import { JqbIconProps } from '../../PropType';
import keyboardSecurity from '../../svg/keyboard-security.svg';

const KeyboardSecurity = (props: JqbIconProps) => {
    return <JqbIcon icon={keyboardSecurity} color="green" {...props} />;
};

export default React.memo(KeyboardSecurity);
