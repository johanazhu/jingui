import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import toastWait from '../svg/toast-wait.svg';

const ToastWait = (props: JqbIconProps) => {
    return <JqbIcon icon={toastWait} color="grey" {...props} />;
};

export default React.memo(ToastWait);
