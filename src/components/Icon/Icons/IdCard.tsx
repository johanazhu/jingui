import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import idcard from '../svg/idcard.svg';

const IdCard = (props: JqbIconProps) => {
    return <JqbIcon icon={idcard} {...props} />;
};

export default IdCard;
