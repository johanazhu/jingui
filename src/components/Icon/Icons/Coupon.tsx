import * as React from 'react';
import JqbIcon from '../JqbIcon';
import { JqbIconProps } from '../PropType';
import coupon from '../svg/coupon.svg';

const Coupon = (props: JqbIconProps) => {
    return <JqbIcon icon={coupon} {...props} />;
};

export default React.memo(Coupon);
