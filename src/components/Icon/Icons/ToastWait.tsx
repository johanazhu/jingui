import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import toastWait from '../svg/toast-wait.svg';

const ToastWait = (props: JqbIconProps) => {
    return <JqbIcon icon={toastWait} color="grey" {...props} />;
};

export default React.memo(ToastWait);
