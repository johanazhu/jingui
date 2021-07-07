import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import coupon from '../svg/coupon.svg';

const Coupon = (props: JqbIconProps) => {
    return <JqbIcon icon={coupon} {...props} />;
};

export default React.memo(Coupon);
