import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import toastWrong from '../svg/toast-wrong.svg';

const ToastWrong = (props: JqbIconProps) => {
    return <JqbIcon icon={toastWrong} color="grey" {...props} />;
};

export default React.memo(ToastWrong);
