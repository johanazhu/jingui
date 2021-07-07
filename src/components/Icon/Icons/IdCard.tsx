import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import idcard from '../svg/idcard.svg';

const IdCard = (props: JqbIconProps) => {
    return <JqbIcon icon={idcard} {...props} />;
};

export default React.memo(IdCard);
