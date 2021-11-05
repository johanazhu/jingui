import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import toastWrong from '../svg/toast-wrong.svg';

const ToastWrong = (props: JqbIconProps) => {
    return <JqbIcon icon={toastWrong} color="grey" {...props} />;
};

export default React.memo(ToastWrong);
