import * as React from 'react';
import JqbIcon, { JqbIconProps } from '../JqbIcon';
import coupon2 from '../svg/coupon2.svg';

const Coupon2 = (props: JqbIconProps) => {
    return <JqbIcon icon={coupon2} color="orange" {...props} />;
};

export default React.memo(Coupon2);
