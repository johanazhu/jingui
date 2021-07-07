import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../../JqbIcon';
import keyboardSecurity from '../../svg/keyboard-security.svg';

const KeyboardSecurity = (props: JqbIconProps) => {
    return <JqbIcon icon={keyboardSecurity} color="green" {...props} />;
};

export default React.memo(KeyboardSecurity);
