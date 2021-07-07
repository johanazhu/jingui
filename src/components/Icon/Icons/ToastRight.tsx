import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import toastRight from '../svg/toast-right.svg';

const ToastRight = (props: JqbIconProps) => {
    return <JqbIcon icon={toastRight} color="grey" {...props} />;
};

export default React.memo(ToastRight);
