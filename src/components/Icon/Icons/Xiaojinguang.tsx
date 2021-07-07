import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import xiaojinguang from '../svg/xiaojinguang.svg';

const Xiaojinguang = (props: JqbIconProps) => {
    return <JqbIcon icon={xiaojinguang} color="" {...props} />;
};

export default React.memo(Xiaojinguang);
