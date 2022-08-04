import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import toastRight from '../svg/toast-right.svg';

const ToastRight = (props: JqbIconProps) => {
    return <JqbIcon icon={toastRight} color="grey" {...props} />;
};

export default ToastRight;
